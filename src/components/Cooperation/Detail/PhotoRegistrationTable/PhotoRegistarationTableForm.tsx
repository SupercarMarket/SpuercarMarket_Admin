import React from 'react'
import {
  Wrapper,
  PhotoRegistrationTitle,
  PhotoRegistrationContentWrapper,
  PhotoUploadWrapper,
  PhotoImage,
  PhotoName
} from "./PhotoRegistrationTableForm.styled";

const PhotoRegistarationTableForm = () => {
  return (
    <Wrapper>
        <PhotoRegistrationTitle>
          사진 등록
        </PhotoRegistrationTitle>
        <PhotoRegistrationContentWrapper>
          { Array.from({length:10}, (v, i ) => {
            return (
              <PhotoUploadWrapper key={i}>
                <PhotoImage />
                <PhotoName>파일명.jpg</PhotoName>
              </PhotoUploadWrapper>
            )})}
        </PhotoRegistrationContentWrapper>
      </Wrapper>
  )
}

export default PhotoRegistarationTableForm;