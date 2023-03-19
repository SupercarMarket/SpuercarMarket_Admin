import React from 'react'
import {
  DownLaodFileWrapper,
  DownLaodFileTitle,
  DownLaodFileContentWrapper,
  DownLaodFileInputButtonWrapper,
  DownLaodFileInput,
  DownLaodButton,
} from "./DownLoadFileForm.styled";

const DownLoadFileForm = () => {
  return (
    <DownLaodFileWrapper>
      <DownLaodFileTitle>첨부 파일</DownLaodFileTitle>
      <DownLaodFileContentWrapper>
        <DownLaodFileInputButtonWrapper>
          <DownLaodFileInput>파일명.jpg</DownLaodFileInput>
          <DownLaodButton>다운로드</DownLaodButton>
        </DownLaodFileInputButtonWrapper>
        <DownLaodFileInputButtonWrapper>
          <DownLaodFileInput>파일명.jpg</DownLaodFileInput>
          <DownLaodButton>다운로드</DownLaodButton>
        </DownLaodFileInputButtonWrapper>
        <DownLaodFileInputButtonWrapper>
          <DownLaodFileInput>파일명.jpg</DownLaodFileInput>
          <DownLaodButton>다운로드</DownLaodButton>
        </DownLaodFileInputButtonWrapper>
      </DownLaodFileContentWrapper>
    </DownLaodFileWrapper>
  );
}

export default DownLoadFileForm