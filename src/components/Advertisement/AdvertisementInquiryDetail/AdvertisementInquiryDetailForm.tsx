import React, { useEffect, useState } from "react";
import {
  CompleteButtonWrapper,
  DetailCompleteButton,
  DisableDetailCompleteButton,
  TableWrapper,
  Wrapper,
} from "./AdvertisementInquiryDetailForm.styled";

import AdvertisementInquiryInfoTableForm from "./Detail/AdvertisementInquiryInfoTable/AdvertisementInquiryInfoTableForm";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../store/rootReducer";
import {
  getAdvertisementInquiryDetail,
  setAdvertisementProgress,
} from "../../../redux/modules/AdvertisementSlice";
import MemberInfoTableForm from "../../Advertisement/AdvertisementInquiryDetail/Detail/MemberInfoTable/MemberInfoTableForm";
import {
  ModalBackground,
  ModalContainer,
  TextArea,
} from "../../Member/DealerInquiryDetail/PageItems/ApproveReject/ApproveRejectForm.styled";
import { Button } from "../../Member/styles/buttonStyles";
import { AdvertisementRejectHandler } from "../../../utils/api/Advertisement/AdvertisementAPI";

const AdvertisementInquiryDetailForm = () => {
  const { inquiryDetail } = useAppSelector((state) => state.AdvertisementSlice);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [rejectReasonText, setRejectReasonText] = useState<string>("");
  const { brdSeq } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, updated } = useAppSelector(
    (state) => state.AdvertisementSlice
  );
  useEffect(() => {
    dispatch(getAdvertisementInquiryDetail({ brdSeq: brdSeq as string }));
  }, [brdSeq, dispatch, updated]);

  const textChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRejectReasonText(event.currentTarget.value);
  };

  const progressOnClickHandler = () => {
    const seqList = [];
    seqList.push(Number(brdSeq));
    dispatch(setAdvertisementProgress({ checkList: seqList }));
  };

  const progressRejectOnClickHandler = () => {
    AdvertisementRejectHandler(Number(brdSeq), rejectReasonText)
      .then((response) => {
        if (response?.status === 200) {
          alert("반려 완료되었습니다.");
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }
      })
      .catch((reason) => {
        alert(reason);
      });
  };
  const openModalHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsShowModal(true);
  };

  const closeModalHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsShowModal(false);
  };

  return (
    <>
      <Wrapper>
        {isLoading ? (
          <div>조회 중입니다.</div>
        ) : (
          <>
            <TableWrapper>
              <AdvertisementInquiryInfoTableForm />
              <MemberInfoTableForm />
            </TableWrapper>
            {inquiryDetail?.confirm === "R" ? (
              <CompleteButtonWrapper>
                <DetailCompleteButton onClick={progressOnClickHandler}>
                  완료
                </DetailCompleteButton>
                <DetailCompleteButton onClick={openModalHandler}>
                  반려
                </DetailCompleteButton>
                {isShowModal && (
                  <>
                    <ModalBackground
                      onClick={closeModalHandler}
                    ></ModalBackground>
                    <ModalContainer>
                      <div className="Title">반려 사유 작성</div>
                      <TextArea
                        value={rejectReasonText}
                        onChange={textChangeHandler}
                      />
                      <div className="Button">
                        <Button onClick={closeModalHandler}>취소</Button>
                        <Button onClick={progressRejectOnClickHandler}>
                          완료
                        </Button>
                      </div>
                    </ModalContainer>
                  </>
                )}
              </CompleteButtonWrapper>
            ) : (
              <CompleteButtonWrapper>
                <DisableDetailCompleteButton onClick={progressOnClickHandler}>
                  완료 처리 완료
                </DisableDetailCompleteButton>
                <DisableDetailCompleteButton onClick={openModalHandler}>
                  반려 처리 완료
                </DisableDetailCompleteButton>
                {isShowModal && (
                  <>
                    <ModalBackground
                      onClick={closeModalHandler}
                    ></ModalBackground>
                    <ModalContainer>
                      <div className="Title">반려 사유 작성</div>
                      <TextArea
                        value={rejectReasonText}
                        onChange={textChangeHandler}
                      />
                      <div className="Button">
                        <Button onClick={closeModalHandler}>취소</Button>
                        <Button onClick={progressRejectOnClickHandler}>
                          완료
                        </Button>
                      </div>
                    </ModalContainer>
                  </>
                )}
              </CompleteButtonWrapper>
            )}
          </>
        )}
      </Wrapper>
    </>
  );
};

export default AdvertisementInquiryDetailForm;
