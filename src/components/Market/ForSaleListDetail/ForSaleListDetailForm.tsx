import React from 'react'
import {
  Wrapper,
  TableHeader,
  TableContent,
  // 숨기기 & 숨기기 취소
  HiddenButtonWrapper,
  HiddenButton,

  // 판매자 정보
  ForSaleSellerInfoWrapper,
  ForSaleSellerInfoHeader,
  ForSaleSellerInfoContent,
  // 딜러 정보
  ForSaleDealerInfoWrapper,
  ForSaleDealerTable,
  ForSaleDealerPhotoHeader,
  ForSaleDealerPhotoContent,
  ForSalePhoto,

  // 회원 정보
  ForSaleMemberInfoWrapper,
  ForSalerMemeberTable
} from "./ForSaleListDetailForm.styled";
import PageTitle from '../../Common/PageTitle/PageTitle';
import MainInfoTableForm from '../Detail/MainInfoTable/MainInfoTableForm';
import SubTitleTableForm from '../Detail/SubTitleTable/SubTitleTableForm';
import VehicleDetailTableForm from '../Detail/VehicleDetailTable/VehicleDetailTableForm';
import PhotoRegistrationTableForm from '../Detail/PhotoRegistrationTable/PhotoRegistrationTableForm';
import DownLoadFileForm from '../Detail/DownLoadFile/DownLoadFileForm';
import SellerInfoTableForm from '../Detail/SellerInfoTable/SellerInfoTableForm';

const ForSaleListDetailForm = () => {
  return (
    <Wrapper>
      <PageTitle title={"판매차량 정보"} />
      {/* 판매 차량 종합 정보 */}
      <MainInfoTableForm />
      {/* 부제목 */}
      <SubTitleTableForm />      
      {/* 차량 설명글 */}
      <VehicleDetailTableForm />
      {/* 사진 등록 */}
      <PhotoRegistrationTableForm />
      {/* 첨부 파일 */}
      <DownLoadFileForm />
      {/* 숨기기 버튼 */}
      <HiddenButtonWrapper>
        <HiddenButton>숨기기</HiddenButton>
      </HiddenButtonWrapper>
      {/* 판매자 정보 */}
      <SellerInfoTableForm />
    </Wrapper>
  )
}

export default ForSaleListDetailForm;