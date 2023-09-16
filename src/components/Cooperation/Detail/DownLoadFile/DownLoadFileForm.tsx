import React from "react";
import {
  DownLaodFileWrapper,
  DownLaodFileTitle,
  DownLaodFileContentWrapper,
  DownLaodFileInputButtonWrapper,
  DownLaodFileInput,
  DownLaodButton,
} from "./DownLoadFileForm.styled";
import { useAppSelector } from "../../../../store/rootReducer";

const DownLoadFileForm = () => {
  const { detailItem } = useAppSelector((state) => state.CooperationSlice);

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
    <DownLaodFileWrapper>
      <DownLaodFileTitle>첨부 파일</DownLaodFileTitle>
      <DownLaodFileContentWrapper>
        {detailItem?.partnershipAttachmentList.map((item, index) => (
          <DownLaodFileInputButtonWrapper>
            <DownLaodFileInput>{item.prtnAttchFileName}</DownLaodFileInput>
            <DownLaodButton
              onClick={() =>
                downloadFileFromURL(item.prtnAttchFileName, item.prtnAttchUrl)
              }
            >
              다운로드
            </DownLaodButton>
          </DownLaodFileInputButtonWrapper>
        ))}
      </DownLaodFileContentWrapper>
    </DownLaodFileWrapper>
  );
};

export default DownLoadFileForm;
