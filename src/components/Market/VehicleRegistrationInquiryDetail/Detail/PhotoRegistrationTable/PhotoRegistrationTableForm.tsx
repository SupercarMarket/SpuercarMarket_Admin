import React from 'react'
import {
  PhotoRegistrationWrapper,
  PhotoRegistrationTitle,
  PhotoRegistrationContentWrapper,
  PhotoUploadWrapper,
  PhotoImage,
  PhotoName,
} from "./PhotoRegistrationTable.styled";

import { useAppSelector } from '../../../../../store/rootReducer';

const PhotoRegistrationTableForm = () => {
  const { detailItem } = useAppSelector( state => state.ForSaleListSlice );
  return (
    <>
    <PhotoRegistrationWrapper>
        <PhotoRegistrationTitle>
          <span>사진 등록</span>
          <span>(최대 20장)</span>
        </PhotoRegistrationTitle>
        <PhotoRegistrationContentWrapper>
          { detailItem?.imgSrc.map( ( item, index ) => {
            return (
              <PhotoUploadWrapper key={index}>
                <PhotoImage src={item}/>
                <PhotoName>파일명.jpg</PhotoName>
              </PhotoUploadWrapper>
            )
          })}
          {/* { Array.from({length:20}, (v, i ) => {
            return (
              <PhotoUploadWrapper key={i}>
                <PhotoImage />
                <PhotoName>파일명.jpg</PhotoName>
              </PhotoUploadWrapper>
            )})} */}
        </PhotoRegistrationContentWrapper>
      </PhotoRegistrationWrapper>
    </>
  )
}

export default PhotoRegistrationTableForm