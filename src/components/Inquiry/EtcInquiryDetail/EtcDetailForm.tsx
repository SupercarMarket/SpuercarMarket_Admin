import React, {useEffect, useRef, useState} from 'react'
import {
    Wrapper,
    TableWrapper,
    CompleteButtonWrapper,
    CompleteButton,
    Modal,
    ModalBody,
    ModalTextArea,
    BottomArea,
    ModalButton,
    ModalCompleteButton
} from './EtcDetailForm.styled';

import MemberInfoTableForm from './Detail/MemberInfoTable/MemberInfoTableForm'
import EtcInquiryInfoTableForm from "./Detail/EtcInquiryInfoTable/EtcInquiryInfoTableForm";
import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../../store/rootReducer";
import {
    EtcInquiryAction,
    getEctInquiryDetailItem,
    setEtcInquiryProgress,
    setEtcInquiryReply
} from "../../../redux/modules/EtcInquirySlice";
import PageTitle from "../../Common/PageTitle/PageTitle";
import {current} from "@reduxjs/toolkit";

const EtcDetailForm = () => {
    const { inquiryId } = useParams();
    const dispatch = useAppDispatch();
    const { isLoading, detailItem, updated, showAnswer } = useAppSelector((state) => state.EtcInquirySlice);
    useEffect(() => {
        dispatch( getEctInquiryDetailItem({ brdSeq : inquiryId as string } ) );
    }, [inquiryId, dispatch, updated ]);
    const progressEndOnClickHandler = (brdSeq : number) => {
        dispatch(setEtcInquiryProgress({checkList: [brdSeq]}));
    };
    const progressReplyOnClickHandler = () => {
        dispatch( EtcInquiryAction.setEtcInquiryShowAnswer({showAnswer:true}));

    };
    const ReplyTextAreaRef = useRef<HTMLTextAreaElement>(null);
    const replyOnClickHandler = () => {
        if(ReplyTextAreaRef.current?.value == '') return;
        dispatch( setEtcInquiryReply({brdSeq: detailItem?.brdSeq as number, reply: ReplyTextAreaRef.current?.value as string}) );
    };
    const replyCancelOnClickHandler = () => {
        dispatch( EtcInquiryAction.setEtcInquiryShowAnswer({showAnswer:false}));
    }
    return (
        <>
        <Wrapper>
            {isLoading ? (
                <div>조회 중입니다.</div>
            ) : (
                <>
                    <TableWrapper>
                        <EtcInquiryInfoTableForm/>
                        <MemberInfoTableForm/>
                    </TableWrapper>
                    <CompleteButtonWrapper>
                        {detailItem?{
                            0: <><CompleteButton onClick={() => progressEndOnClickHandler(detailItem.brdSeq)}
                                                 style={{marginRight: "8px"}}>완료</CompleteButton>
                                <CompleteButton onClick={progressReplyOnClickHandler}>답변</CompleteButton></>,
                            1: <CompleteButton>완료됨</CompleteButton>,
                            2: <CompleteButton>답변됨</CompleteButton>
                        }[detailItem.progress] : <></>
                        }
                    </CompleteButtonWrapper>
                </>
                )}
        </Wrapper>


            {showAnswer ? (<Modal>
                <ModalBody>

                    <PageTitle title={"답변 작성"} />
                    <ModalTextArea
                        ref = {ReplyTextAreaRef}
                    />
                    <BottomArea>

                        <ModalButton onClick = {replyCancelOnClickHandler}>취소</ModalButton>
                        <ModalCompleteButton onClick = {replyOnClickHandler}>완료</ModalCompleteButton>
                    </BottomArea>
                </ModalBody>
            </Modal>) : (<></>)
            }
            </>
    );
}

export default EtcDetailForm
