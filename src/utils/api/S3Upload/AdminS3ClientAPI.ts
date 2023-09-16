import { PutObjectCommand, DeleteObjectsCommand } from "@aws-sdk/client-s3";
import { AdminS3Client, AWS_Configuration } from "./AdminS3Client";

const ImgURL = process.env.REACT_APP_S3_BUCKET_URL;

// Blob은 name이 없기 때문에 변경해준다.
export const convertToFile = ( blob : Blob ) : File => {
    return new File([blob], randomFileName('community', blob.type), { type: blob.type });
};
// 확장자명 가져오기
export const randomFileName = ( path : string, fileType : string ) => {
    const fileExe = fileType.replace("image/", ".");
    return path + dateFormatChange() + fileExe;
};
// 파일 이름에 붙일 날짜 파싱
export const dateFormatChange = () => {
    const currentDate = new Date();

    const sYear = currentDate.getFullYear().toString();
    let sMonth = ( currentDate.getMonth() + 1 ).toString();
    let sDate = currentDate.getDate().toString();

    let sHour = currentDate.getHours().toString();
    let sMinute = currentDate.getMinutes().toString();
    let sSecond = currentDate.getSeconds().toString();

    sMonth = Number( sMonth ) > 9 ? sMonth : "0" + sMonth;
    sDate = Number( sDate ) > 9 ? sDate : "0" + sDate;

    sHour = Number( sHour ) > 9 ? sHour : "0" + sHour;
    sMinute = Number( sMinute ) > 9 ? sMinute : "0" + sMinute;
    sSecond = Number( sSecond ) > 9 ? sSecond : "0" + sSecond;

    return sYear + sMonth + sDate + sHour + sMinute + sSecond;
};

// 이미지 업로드
export const uploadImage = async (blob: Blob) => {
    const file = convertToFile(blob);
    const params = {
        // bucket 이름
        Bucket: AWS_Configuration.bucketName,
        // 업로드 파일이름
        Key: file.name,
        // 파일 스트림
        Body: file,
    };

    try {
        await AdminS3Client.send(new PutObjectCommand(params));
        return ImgURL + file.name;
    } catch (err) {
        alert('다시 시도해주세요');
    }
};

// 업로드 URL로 변환합니다.
export const makeUploadImageURL = (blob: Blob) => {
    return ImgURL + convertToFile(blob).name;
}

// HTML 코드에서 이미지 파일명만 추출합니다.
export const getFileNameFromHTML = (contents: string): (string | undefined)[] => {
    // img 태그 내의 src 경로 가져오기
    const result = Array.from(contents.matchAll(/<img[^>]+src=["']([^'">]+)['"]/gi));
    // 가져온 src 경로에서 파일 이름만 추출하기
    const resultArr = result.map(item => item.pop()?.replace(/^.*\//, ''));

    return resultArr as string[];
};

// 지금까지 글을 작성하면서 업로드한 파일명들과
// HTML 코드에서 남아있는 파일명들과 비교하여
// 중복되지 않는 것을 추출합니다.
export const getNotEqualFileList = (previouseFileList: string[], currentFileList: (string | undefined)[]) => {
    const deleteFileList = previouseFileList.concat(currentFileList as string[]).filter(item => !previouseFileList.includes(item) || !currentFileList.includes(item));
    return deleteFileList;
};

// 이미지 지우기
export const deleteImage = async (fileList: string[]) => {
    const params = {
        Bucket: AWS_Configuration.bucketName,
        Delete: {
            Objects: fileList.map((v) => {
                return { Key: v };
            }),
        },
    };
    try {
        await AdminS3Client.send(new DeleteObjectsCommand(params));
    } catch (err) {
        throw err;
    }
};
