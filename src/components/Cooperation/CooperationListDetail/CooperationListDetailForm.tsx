import React, { useEffect } from "react";
import {
  Wrapper,
  HiddenButtonWrapper,
  HiddenButton,
} from "./CooperationListDetailForm.styled";
import PageTitle from "../../Common/PageTitle/PageTitle";
import MainInfoTableForm from "../Detail/MainInfoTable/MainInfoTableForm";
import HomepageInfoTableForm from "../Detail/HomepageInfoTable/HomepageInfoTableForm";
import CompanyIntroForm from "../Detail/CompanyIntro/CompanyIntroForm";
import PhotoRegistarationTableForm from "../Detail/PhotoRegistrationTable/PhotoRegistarationTableForm";
import DownLoadFileForm from "../Detail/DownLoadFile/DownLoadFileForm";
import { getCooperationDetail } from "../../../redux/modules/CooperationSlice";
import { useAppDispatch, useAppSelector } from "../../../store/rootReducer";
import { useNavigate, useParams } from "react-router";
import ClientAxios from "../../../utils/api/AxiosAPI/ClientAxios";

const CooperationListDetailForm = () => {
  const { brdSeq } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, detailItem } = useAppSelector(
    (state) => state.CooperationSlice
  );

  useEffect(() => {
    console.log(brdSeq);
    dispatch(getCooperationDetail({ brdSeq: brdSeq as string }));
  }, [brdSeq, dispatch]);

  //숨기기 / 숨기기 취소
  const hidePartnershipHandler = async (id: number, isAppear: boolean) => {
    if (isAppear) {
      await ClientAxios.post(`/partnerships/hide/${id}`)
        .then((response) => {
          if (response.status === 200) {
            alert("[완료]");
            // eslint-disable-next-line no-restricted-globals
            location.reload();
          }
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      await ClientAxios.post(`/partnerships/unHide/${id}`)
        .then((response) => {
          if (response.status === 200) {
            alert("[완료]");
            // eslint-disable-next-line no-restricted-globals
            location.reload();
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <Wrapper>
      {isLoading ? (
        <div>조회 중입니다.</div>
      ) : (
        <>
          <PageTitle title="제휴업체 정보" />
          <MainInfoTableForm />
          <HomepageInfoTableForm />
          <CompanyIntroForm />
          <PhotoRegistarationTableForm />
          <DownLoadFileForm />
          <HiddenButtonWrapper>
            <HiddenButton
              onClick={() =>
                hidePartnershipHandler(
                  detailItem?.brdSeq as number,
                  detailItem?.isAppear as boolean
                )
              }
            >
              {detailItem?.isAppear ? "숨기기" : "숨기기 취소"}
            </HiddenButton>
          </HiddenButtonWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default CooperationListDetailForm;
