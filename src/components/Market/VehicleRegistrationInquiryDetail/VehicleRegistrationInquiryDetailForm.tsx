import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { Wrapper, ButtonWrapper, HiddenButton } from "./VehicleRegistrationInquiryDetailForm.styled";
import PageTitle from '../../Common/PageTitle/PageTitle';
import MainInfoTableForm from './Detail/MainInfoTable/MainInfoTableForm';
import SubTitleTableForm from './Detail/SubTitleTable/SubTitleTableForm';
import VehicleDetailTableForm from './Detail/VehicleDetailTable/VehicleDetailTableForm';
import PhotoRegistrationTableForm from './Detail/PhotoRegistrationTable/PhotoRegistrationTableForm';
import AttachFileForm from './Detail/DownLoadFile/DownLoadFileForm';
import SellerInfoTableForm from './Detail/SellerInfoTable/SellerInfoTableForm';

import { getForSaleDetailItem } from '../../../redux/modules/ForSaleInquirySlice';
import { useAppDispatch, useAppSelector } from '../../../store/rootReducer';

const VehicleRegistrationInquiryDetailForm = () => {
  const { inquiryId } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector( state => state.ForSaleListSlice );

  useEffect( () => {
    dispatch( getForSaleDetailItem( { category : 'product', brdSeq : inquiryId as string } ) );
  }, [ inquiryId, dispatch ] );
  return (
    <>
      <Wrapper>
        <PageTitle title={"판매차량 등록 문의 정보"} />
        {isLoading ? (
          <div>조회 중입니다.</div>
        ) : (
          <>
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
          </>
        )}
      </Wrapper>
    </>
  );
}

export default VehicleRegistrationInquiryDetailForm;