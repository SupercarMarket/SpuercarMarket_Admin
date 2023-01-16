import React, { useState } from 'react'
import { Wrapper, HiddenButtonWrapper, HiddenButton } from "./CooperationInquiryDetailForm.styled";
import PageTitle from '../../Common/PageTitle/PageTitle';
import MainInfoTableForm from '../Detail/MainInfoTable/MainInfoTableForm';
import HomepageInfoTableForm from '../Detail/HomepageInfoTable/HomepageInfoTableForm';
import CompanyIntroForm from '../Detail/CompanyIntro/CompanyIntroForm';
import PhotoRegistarationTableForm from '../Detail/PhotoRegistrationTable/PhotoRegistarationTableForm';
import DownLoadFileForm from '../Detail/DownLoadFile/DownLoadFileForm';
import ModalForm from '../Modal/ModalForm';

const CooperationInquiryDetailForm = () => {
  const [ isOpenModal, setIsOpenModal ] = useState< boolean >( false );
  return (
    <Wrapper>
      <PageTitle title="제휴업체 등록 문의 정보"/>
      <MainInfoTableForm />
      <HomepageInfoTableForm />
      <CompanyIntroForm />
      <PhotoRegistarationTableForm/>
      <DownLoadFileForm />
      <HiddenButtonWrapper>
        <HiddenButton>업체 등록</HiddenButton>
        <HiddenButton onClick={ () => setIsOpenModal( !isOpenModal )}>반려</HiddenButton>
      </HiddenButtonWrapper>
      <>
        { isOpenModal && <ModalForm setIsOpenModal={ setIsOpenModal } isOpenModal={ isOpenModal }/> }
      </>
    </Wrapper>
  )
}

export default CooperationInquiryDetailForm;