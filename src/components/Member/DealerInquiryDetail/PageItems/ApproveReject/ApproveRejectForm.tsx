import React, { useState } from "react";
import { Button } from "../../../styles/buttonStyles";
import { ButtonWrapper, ModalBackground, ModalContainer, TextArea } from "./ApproveRejectForm.styled";

import { dealerAcceptHandler, dealerRejectHandler } from "utils/api/Member/DealerInquiryAPI";
import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { useNavigate } from "react-router-dom";
import { DealerInquiryAction, getDealerInquiryList } from "redux/modules/DealerInquirySlice";

function ApproveRejectForm({ brdSeq }: { brdSeq: number }) {
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [rejectReasonText, setRejectReasonText] = useState<string>("");
    const { detailItem, list } = useAppSelector((state) => state.DealerInquirySlice);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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

    const dealerApprove = () => {
        dealerAcceptHandler(brdSeq)
            .then((response) => {
                if (response?.status === 200) {
                    dispatch(DealerInquiryAction.setDealerInquiryDetailAcceptedStatus({ accepted: "Y" }));
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const dealerReject = () => {
        dealerRejectHandler(brdSeq, rejectReasonText)
            .then((response) => {
                if (response?.status === 200) {
                    dispatch(DealerInquiryAction.setDealerInquiryDetailAcceptedStatus({ accepted: "N" }));
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (detailItem.accepted === "Y") {
        return (
            <ButtonWrapper>
                <Button disabled>딜러 등록 완료</Button>{" "}
            </ButtonWrapper>
        );
    } else if (detailItem.accepted === "N") {
        return (
            <ButtonWrapper>
                <Button disabled>반려됨</Button>{" "}
            </ButtonWrapper>
        );
    } else {
        return (
            <>
                <ButtonWrapper>
                    <Button onClick={dealerApprove}>딜러 등록</Button>
                    <Button onClick={openModalHandler}>반려</Button>
                </ButtonWrapper>
                {isShowModal && (
                    <>
                        <ModalBackground onClick={closeModalHandler}></ModalBackground>
                        <ModalContainer>
                            <div className="Title">반려 사유 작성</div>
                            <TextArea value={rejectReasonText} onChange={textChangeHandler} />
                            <div className="Button">
                                <Button onClick={closeModalHandler}>취소</Button>
                                <Button onClick={dealerReject}>완료</Button>
                            </div>
                        </ModalContainer>
                    </>
                )}
            </>
        );
    }
}

export default ApproveRejectForm;
