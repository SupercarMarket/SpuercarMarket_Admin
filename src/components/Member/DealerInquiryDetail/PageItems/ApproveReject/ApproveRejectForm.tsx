import React, { useState } from "react";
import { Button } from "../../../styles/buttonStyles";
import { ModalBackground, ModalContainer, TextArea } from "./ApproveRejectForm.styled";

import { dealerAcceptHandler, dealerRejectHandler } from "utils/api/Member/DealerInquiryAPI";
import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { useNavigate } from "react-router-dom";
import { getDealerInquiryList } from "redux/modules/DealerInquirySlice";

function ApproveRejectForm({ dlrSeq }: { dlrSeq: number }) {
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [rejectReasonText, setRejectReasonText] = useState("");
    const { filter, keyword, currentPage } = useAppSelector((state) => state.DealerInquirySlice);
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
        dealerAcceptHandler(dlrSeq)
            .then((response) => {
                if (response?.status === 200) {
                    dispatch(getDealerInquiryList({ filter: filter, keyword: keyword, page: currentPage }));
                    navigate("/dealerinquiry");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const dealerReject = () => {
        dealerRejectHandler(dlrSeq, rejectReasonText)
            .then((response) => {
                if (response?.status === 200) {
                    dispatch(getDealerInquiryList({ filter: filter, keyword: keyword, page: currentPage }));
                    navigate("/dealerinquiry");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                <Button onClick={dealerApprove}>딜러 등록</Button>
                <Button onClick={openModalHandler}>반려</Button>
            </div>
            {isShowModal && (
                <>
                    <ModalBackground onClick={closeModalHandler}></ModalBackground>
                    <ModalContainer>
                        <div className="Title">반려 사유 작성</div>
                        <TextArea value={rejectReasonText} onChange={textChangeHandler}></TextArea>
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

export default ApproveRejectForm;
