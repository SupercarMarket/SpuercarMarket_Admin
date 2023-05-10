import React, { useCallback, useRef } from "react";
import { ThumbnailBox } from "./ThumbnailBoxForm.styled";
import { ReactComponent as ImageIcon } from "assets/image.svg";
import { ReactComponent as TrashIcon } from "assets/trash.svg";
import { makeUploadImageURL, uploadImage } from "utils/api/S3Upload/AdminS3ClientAPI";

interface ThumbnailBoxProps {
    thumbnailImage: string;
    setThumbnailImage: Function;
    setUploadedImage: Function;
}

function ThumbnailBoxForm({ thumbnailImage, setThumbnailImage, setUploadedImage }: ThumbnailBoxProps) {
    const thumbnailInputRef = useRef<HTMLInputElement | null>(null);

    const onUploadImage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return;
        }
        const fileToUpload = event.target.files[0];
        uploadImage(fileToUpload as Blob)
            .then(() => {
                const url = makeUploadImageURL(fileToUpload);
                setThumbnailImage(url);
                setUploadedImage((prevState: any) => [...prevState, url.split("/")[-1]]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const onUploadImageButtonClick = useCallback(() => {
        if (!thumbnailInputRef.current) {
            return;
        }
        thumbnailInputRef.current.click();
    }, []);

    const deleteImageButtonOnClickHandler = () => {
        setThumbnailImage("");
    };

    return (
        <ThumbnailBox>
            <input type="file" accept="image/*" ref={thumbnailInputRef} onChange={onUploadImage} style={{ display: "none" }} />
            {!thumbnailImage ? (
                <ImageIcon fill="#C3C3C7" onClick={onUploadImageButtonClick} style={{ width: "30px", height: "30px" }} />
            ) : (
                <TrashIcon fill="#C3C3C7" onClick={deleteImageButtonOnClickHandler} style={{ width: "30px", height: "30px" }} />
            )}
        </ThumbnailBox>
    );
}

export default ThumbnailBoxForm;
