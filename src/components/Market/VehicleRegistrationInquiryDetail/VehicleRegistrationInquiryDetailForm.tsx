import React from 'react'
import { Wrapper, ButtonWrapper, HiddenButton } from "./VehicleRegistrationInquiryDetailForm.styled";
import PageTitle from '../../Common/PageTitle/PageTitle';
import MainInfoTableForm from '../Detail/MainInfoTable/MainInfoTableForm';
import SubTitleTableForm from '../Detail/SubTitleTable/SubTitleTableForm';
import VehicleDetailTableForm from '../Detail/VehicleDetailTable/VehicleDetailTableForm';
import PhotoRegistrationTableForm from '../Detail/PhotoRegistrationTable/PhotoRegistrationTableForm';
import AttachFileForm from '../Detail/DownLoadFile/DownLoadFileForm';
import SellerInfoTableForm from '../Detail/SellerInfoTable/SellerInfoTableForm';

const VehicleRegistrationInquiryDetailForm = () => {
  return (
    <>
      <Wrapper>
        <PageTitle title={"판매차량 등록 문의 정보"} />
        {/* 판매 차량 종합 정보 */}
        <MainInfoTableForm />
        {/* 부제목 */}
        <SubTitleTableForm />
        {/* 차량 설명글 */}
        <VehicleDetailTableForm />
        {/* 사진 등록 */}
        <PhotoRegistrationTableForm />
        {/* 첨부 파일 */}
        <AttachFileForm />
        {/* 숨기기 버튼 */}
        <ButtonWrapper>
          <HiddenButton>보완, 보류...거절하기?</HiddenButton>
          <HiddenButton>숨기기</HiddenButton>
        </ButtonWrapper>
        {/* 판매자 정보 */}
        <SellerInfoTableForm />
      </Wrapper>
    </>
  );
}

export default VehicleRegistrationInquiryDetailForm;