import React, {useEffect, useState} from 'react'
import { Wrapper, TableWrapper, CompleteButtonWrapper, CompleteButton } from './EtcDetailForm.styled';

import MemberInfoTableForm from './Detail/MemberInfoTable/MemberInfoTableForm'
import EtcInquiryInfoTableForm from "./Detail/EtcInquiryInfoTable/EtcInquiryInfoTableForm";
import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../../store/rootReducer";
import {getEctInquiryDetailItem} from "../../../redux/modules/EtcInquirySlice";

const EtcDetailForm = () => {
    const { inquiryId } = useParams();
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector((state) => state.EtcInquirySlice);
    useEffect(() => {
        dispatch( getEctInquiryDetailItem({ brdSeq : inquiryId as string } ) );
    }, [inquiryId, dispatch ]);
    return (
        <Wrapper>
            {isLoading ? (
                <div>조회 중입니다.</div>
            ) : (
                <>
                <TableWrapper>
                    <EtcInquiryInfoTableForm />
                    <MemberInfoTableForm />
                </TableWrapper>
                <CompleteButtonWrapper>
                    <CompleteButton>완료</CompleteButton>
                </CompleteButtonWrapper>
                </>
                )}
        </Wrapper>
    );
}

export default EtcDetailForm
