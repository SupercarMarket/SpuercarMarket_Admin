import React, { useEffect, useState } from "react";
import {
  DisableHiddenButton,
  HiddenButton,
  HiddenButtonWrapper,
  Wrapper,
} from "./CooperationInquiryDetailForm.styled";
import PageTitle from "../../Common/PageTitle/PageTitle";
import MainInfoTableForm from "../Detail/MainInfoTable/MainInfoTableForm";
import HomepageInfoTableForm from "../Detail/HomepageInfoTable/HomepageInfoTableForm";
import CompanyIntroForm from "../Detail/CompanyIntro/CompanyIntroForm";
import PhotoRegistarationTableForm from "../Detail/PhotoRegistrationTable/PhotoRegistarationTableForm";
import DownLoadFileForm from "../Detail/DownLoadFile/DownLoadFileForm";
import ModalForm from "../Modal/ModalForm";
import { getCooperationInquiryDetail } from "../../../redux/modules/CooperationSlice";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../store/rootReducer";

const CooperationInquiryDetailForm = () => {
  const { brdSeq } = useParams();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading, detailItem } = useAppSelector(
    (state) => state.CooperationSlice
  );

  useEffect(() => {
    dispatch(getCooperationInquiryDetail({ brdSeq: brdSeq as string }));
  }, [brdSeq, dispatch]);
  return (
    <Wrapper>
      <PageTitle title="제휴업체 등록 문의 정보" />
      <MainInfoTableForm />
      <HomepageInfoTableForm />
      <CompanyIntroForm />
      <PhotoRegistarationTableForm />
      <DownLoadFileForm />
      {detailItem?.accepted === "WAITING" ? (
        <HiddenButtonWrapper>
          <HiddenButton>업체 등록</HiddenButton>
          <HiddenButton onClick={() => setIsOpenModal(!isOpenModal)}>
            반려
          </HiddenButton>
        </HiddenButtonWrapper>
      ) : (
        <HiddenButtonWrapper>
          <DisableHiddenButton>
            {detailItem?.accepted === "ACCEPTED" ? "등록된 업체" : "반려"}
          </DisableHiddenButton>
        </HiddenButtonWrapper>
      )}

      <>
        {isOpenModal && (
          <ModalForm
            setIsOpenModal={setIsOpenModal}
            isOpenModal={isOpenModal}
          />
        )}
      </>
    </Wrapper>
  );
};

export default CooperationInquiryDetailForm;
