import React from "react";
import {
  Wrapper,
  PhotoRegistrationTitle,
  PhotoRegistrationContentWrapper,
  PhotoUploadWrapper,
  PhotoImage,
  PhotoName,
} from "./PhotoRegistrationTableForm.styled";
import { useAppSelector } from "../../../../store/rootReducer";

const PhotoRegistarationTableForm = () => {
  const { detailItem } = useAppSelector((state) => state.CooperationSlice);
  return (
    <Wrapper>
      <PhotoRegistrationTitle>사진 등록</PhotoRegistrationTitle>
      <PhotoRegistrationContentWrapper>
        {detailItem?.partnershipPhotoAttachmentList.map((i, index) => (
          <PhotoUploadWrapper>
            {/*<br />*/}
            <PhotoImage src={i.prtnPhotoAttachmentUrl} />
            <PhotoName>{i.prtnPhotoAttachmentFileName}</PhotoName>
          </PhotoUploadWrapper>
        ))}
      </PhotoRegistrationContentWrapper>
    </Wrapper>
  );
};

export default PhotoRegistarationTableForm;
