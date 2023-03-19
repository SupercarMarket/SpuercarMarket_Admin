import React from 'react'
import { Wrapper, HiddenButtonWrapper, HiddenButton } from "./CooperationListDetailForm.styled";
import PageTitle from '../../Common/PageTitle/PageTitle';
import MainInfoTableForm from '../Detail/MainInfoTable/MainInfoTableForm';
import HomepageInfoTableForm from '../Detail/HomepageInfoTable/HomepageInfoTableForm';
import CompanyIntroForm from '../Detail/CompanyIntro/CompanyIntroForm';
import PhotoRegistarationTableForm from '../Detail/PhotoRegistrationTable/PhotoRegistarationTableForm';
import DownLoadFileForm from '../Detail/DownLoadFile/DownLoadFileForm';

const CooperationListDetailForm = () => {
  return (
    <Wrapper>
      <PageTitle title="제휴업체 정보"/>
      <MainInfoTableForm />
      <HomepageInfoTableForm />
      <CompanyIntroForm />
      <PhotoRegistarationTableForm/>
      <DownLoadFileForm />
      <HiddenButtonWrapper>
        <HiddenButton>숨기기</HiddenButton>
      </HiddenButtonWrapper>
    </Wrapper>
  )
}

export default CooperationListDetailForm;