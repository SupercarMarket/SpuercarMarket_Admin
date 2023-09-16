import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Wrapper,
  ButtonWrapper,
  HiddenButton,
  ModalBackground,
  ModalContainer,
  TextArea,
  ConfirmButton,
} from "./VehicleRegistrationInquiryDetailForm.styled";
import PageTitle from "../../Common/PageTitle/PageTitle";
import MainInfoTableForm from "./Detail/MainInfoTable/MainInfoTableForm";
import SubTitleTableForm from "./Detail/SubTitleTable/SubTitleTableForm";
import VehicleDetailTableForm from "./Detail/VehicleDetailTable/VehicleDetailTableForm";
import PhotoRegistrationTableForm from "./Detail/PhotoRegistrationTable/PhotoRegistrationTableForm";
import AttachFileForm from "./Detail/DownLoadFile/DownLoadFileForm";
import SellerInfoTableForm from "./Detail/SellerInfoTable/SellerInfoTableForm";

import { useAppDispatch, useAppSelector } from "../../../store/rootReducer";

import { Button } from "./Detail/VehicleDetailTable/VehicleDetailTableForm.styled";
import ClientAxios from "../../../utils/api/AxiosAPI/ClientAxios";
import { getForSaleInquiryDetailItem } from "../../../redux/modules/ForSaleInquirySlice";

const VehicleRegistrationInquiryDetailForm = () => {
  const { inquiryId } = useParams();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [rejectReasonText, setRejectReasonText] = useState<string>("");
  const dispatch = useAppDispatch();
  const { isLoading, inquiryDetailItem } = useAppSelector(
    (state) => state.ForSaleListSlice
  );

  const textChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRejectReasonText(event.currentTarget.value);
  };

  const openModalHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsShowModal(true);
  };

  const closeModalHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsShowModal(false);
  };

  useEffect(() => {
    dispatch(
      getForSaleInquiryDetailItem({
        category: "product",
        brdSeq: inquiryId as string,
      })
    );
    console.log("abc");
    console.log(inquiryDetailItem?.accept as string);
    setRefresh(false);
  }, [inquiryId, dispatch, refresh]);

  const rejectHandler = async () => {
    const rejectProductDto = {
      accept: false,
      brdSeq: inquiryId,
      comment: rejectReasonText,
    };
    await ClientAxios.post(`/inquiry/product`, rejectProductDto, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          alert("[매물 반려 완료]");
          setRefresh(true);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const confirmHandler = async () => {
    await ClientAxios.post(`/inquiry/product/confirm/${inquiryId}`)
      .then((response) => {
        if (response.status === 200) {
          alert("[매물 승인 완료]");
          setRefresh(true);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

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

            {inquiryDetailItem?.accept === "R" ? (
              <ButtonWrapper>
                <HiddenButton onClick={(e) => openModalHandler(e)}>
                  매물 등록 반려
                </HiddenButton>
                <HiddenButton onClick={() => confirmHandler()}>
                  매물 승인
                </HiddenButton>
              </ButtonWrapper>
            ) : (
              <ButtonWrapper>
                <ConfirmButton
                  onClick={() => console.log("a")}
                  isAccepted={inquiryDetailItem?.accept as string}
                >
                  {(inquiryDetailItem?.accept as string) === "Y"
                    ? "승인된 매물"
                    : "반려된 매물"}
                </ConfirmButton>
              </ButtonWrapper>
            )}

            {isShowModal && (
              <>
                <ModalBackground onClick={closeModalHandler}></ModalBackground>
                <ModalContainer>
                  <div className="Title">반려 사유 작성</div>
                  <TextArea
                    value={rejectReasonText}
                    onChange={textChangeHandler}
                  />
                  <div className="Button">
                    <Button onClick={closeModalHandler}>취소</Button>
                    <Button onClick={() => rejectHandler()}>완료</Button>
                  </div>
                </ModalContainer>
              </>
            )}

            {/* 판매자 정보 */}
            <SellerInfoTableForm />
          </>
        )}
      </Wrapper>
    </>
  );
};

export default VehicleRegistrationInquiryDetailForm;
