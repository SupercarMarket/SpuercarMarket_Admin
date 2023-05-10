import React from "react";
import {
  AdvertisementDetailTable,
  AdvertisementWrapper,
  TableContent,
  TableHeader,
} from "./AdvertisementInquiryInfoTableForm.styled";
import PageTitle from "../../../../Common/PageTitle/PageTitle";
import { useAppSelector } from "../../../../../store/rootReducer";
import {
  DownLaodButton,
  DownLaodFileInput,
  DownLaodFileInputButtonWrapper,
} from "../DownLoadFile/DownLoadFileForm.styled";

const AdvertisementInquiryInfoTableForm = () => {
  const { inquiryDetail, inquiryDetailAttachment } = useAppSelector(
    (state) => state.AdvertisementSlice
  );

  const downloadFileFromURL = (fileName: string, url: string) => {
    fetch(url, { method: "GET" })
      .then((res) => {
        // console.log( res );
        return res.blob();
      })
      .then((blob) => {
        // console.log( blob );
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          URL.revokeObjectURL(url);
        }, 60000);
        a.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <AdvertisementWrapper>
        <PageTitle title={"광고 문의 상세 정보"} />
        <AdvertisementDetailTable>
          <tbody>
            <tr>
              <TableHeader>제목</TableHeader>
              <TableContent colSpan={4}>{inquiryDetail?.title}</TableContent>
            </tr>
            <tr>
              <TableHeader>관련 링크</TableHeader>
              <TableContent colSpan={4}>{inquiryDetail?.link}</TableContent>
            </tr>
            <tr>
              {/*<DownLaodFileWrapper>*/}
              {/*    <DownLaodFileTitle>첨부 파일</DownLaodFileTitle>*/}
              <TableHeader>첨부파일</TableHeader>
              <TableContent colSpan={4}>
                {/*<DownLaodFileContentWrapper>*/}
                {inquiryDetailAttachment?.map((item) => {
                  return (
                    <DownLaodFileInputButtonWrapper key={item.originName}>
                      <DownLaodFileInput>{item.originName}</DownLaodFileInput>
                      <DownLaodButton
                        style={{ width: "105px" }}
                        onClick={() =>
                          downloadFileFromURL(item.originName, item.attUrl)
                        }
                      >
                        다운로드
                      </DownLaodButton>
                    </DownLaodFileInputButtonWrapper>
                  );
                })}
                {/*</DownLaodFileContentWrapper>*/}
              </TableContent>

              {/*</DownLaodFileWrapper>*/}

              {/*<TableContent colSpan={4}>temp</TableContent>*/}
            </tr>
            <tr>
              <TableHeader>문의 내용</TableHeader>
              <TableContent colSpan={4}>{inquiryDetail?.contents}</TableContent>
            </tr>
            <tr>
              <TableHeader>반려 사유</TableHeader>
              <TableContent colSpan={4}>
                {inquiryDetail?.rejectReason}
              </TableContent>
            </tr>
          </tbody>
        </AdvertisementDetailTable>
      </AdvertisementWrapper>
    </>
  );
};

export default AdvertisementInquiryInfoTableForm;
