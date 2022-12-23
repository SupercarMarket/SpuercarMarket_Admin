import React from 'react'
import {
  AttachFileWrapper,
  AttachFileTitle,
  AttachFileContentWrapper,
  AttachFileInputButtonWrapper,
  AttachFileInput,
  AttachButton,
} from "./AttachFileForm.styled";

const AttachFileForm = () => {
  return (
    <>
      <AttachFileWrapper>
        <AttachFileTitle>첨부 파일</AttachFileTitle>
        <AttachFileContentWrapper>
          <AttachFileInputButtonWrapper>
            <AttachFileInput>파일명.jpg</AttachFileInput>
            <AttachButton>다운로드</AttachButton>
          </AttachFileInputButtonWrapper>
          <AttachFileInputButtonWrapper>
            <AttachFileInput>파일명.jpg</AttachFileInput>
            <AttachButton>다운로드</AttachButton>
          </AttachFileInputButtonWrapper>
          <AttachFileInputButtonWrapper>
            <AttachFileInput>파일명.jpg</AttachFileInput>
            <AttachButton>다운로드</AttachButton>
          </AttachFileInputButtonWrapper>
        </AttachFileContentWrapper>
      </AttachFileWrapper>
    </>
  );
}

export default AttachFileForm;