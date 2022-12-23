import React from 'react'
import { Wrapper, HiddenButtonWrapper, HiddenButton } from "./CooperationInquiryDetailForm.styled";
import PageTitle from '../../Common/PageTitle/PageTitle';
import MainInfoTableForm from '../Detail/MainInfoTable/MainInfoTableForm';
import HomepageInfoTableForm from '../Detail/HomepageInfoTable/HomepageInfoTableForm';
import CompanyIntroForm from '../Detail/CompanyIntro/CompanyIntroForm';
import PhotoRegistarationTableForm from '../Detail/PhotoRegistrationTable/PhotoRegistarationTableForm';
import DownLoadFileForm from '../Detail/DownLoadFile/DownLoadFileForm';

const CooperationInquiryDetailForm = () => {
  return (
    <Wrapper>
      <PageTitle title="제휴업체 등록 문의 정보"/>
      <MainInfoTableForm />
      <HomepageInfoTableForm />
      <CompanyIntroForm />
      <PhotoRegistarationTableForm/>
      <DownLoadFileForm />
      <HiddenButtonWrapper>
        <HiddenButton>거절하기</HiddenButton>
        <HiddenButton>업체 등록</HiddenButton>
      </HiddenButtonWrapper>
    </Wrapper>
  )
}

export default CooperationInquiryDetailForm;