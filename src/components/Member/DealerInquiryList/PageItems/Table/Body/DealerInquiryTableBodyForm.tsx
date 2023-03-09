import React from "react";
import { DealerInquiryTableBody, DealerInquiryTableBodyRowSpan, DealerInquiryTableBodyButton } from "./DealerInquiryTableBodyForm.styled";

import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { useNavigate } from "react-router";

import { DealerInquiryTableProps } from "../DealerInquiryTableForm";

const DealerInquiryTableBodyForm = ({ offset, postsPerPage, totalContentsCount, registerDealerHandler }: DealerInquiryTableProps) => {
    const navigate = useNavigate();
    const { list } = useAppSelector((state) => state.DealerInquirySlice);

    // 매물 디테일로 넘어가기
    const DealerInquiryDetailOnClickHandler = (userSeq: number) => {
        // navigate(`/inquiry/${userSeq.toString()}`);
    };

    return (
        <DealerInquiryTableBody key={`uuid`}>
            {list.slice(offset, offset + postsPerPage).map((dealerInquiry, index) => {
                return (
                    <React.Fragment key={dealerInquiry.userSeq}>
                        <tr onClick={() => DealerInquiryDetailOnClickHandler(dealerInquiry.userSeq)}>
                            <DealerInquiryTableBodyRowSpan>{dealerInquiry.comName}</DealerInquiryTableBodyRowSpan>
                            <DealerInquiryTableBodyRowSpan>{dealerInquiry.comPhone}</DealerInquiryTableBodyRowSpan>
                            <DealerInquiryTableBodyRowSpan>{dealerInquiry.guildName}</DealerInquiryTableBodyRowSpan>
                            <DealerInquiryTableBodyRowSpan rowSpan={2}>{dealerInquiry.dlrEmployeeCardFront}</DealerInquiryTableBodyRowSpan>
                            <DealerInquiryTableBodyRowSpan rowSpan={2}>{dealerInquiry.dlrEmployeeCardBack}</DealerInquiryTableBodyRowSpan>
                            <DealerInquiryTableBodyRowSpan rowSpan={2}>{dealerInquiry.dlrProileImage}</DealerInquiryTableBodyRowSpan>
                            <DealerInquiryTableBodyRowSpan rowSpan={2}>{dealerInquiry.comment}</DealerInquiryTableBodyRowSpan>
                            <DealerInquiryTableBodyRowSpan rowSpan={2}>
                                <DealerInquiryTableBodyButton id={dealerInquiry.userSeq.toString()} onClick={() => registerDealerHandler(dealerInquiry.userSeq)}>
                                    딜러 등록
                                </DealerInquiryTableBodyButton>
                            </DealerInquiryTableBodyRowSpan>
                        </tr>
                        <tr onClick={() => DealerInquiryDetailOnClickHandler(dealerInquiry.userSeq)}>
                            <DealerInquiryTableBodyRowSpan colSpan={2} style={{ cursor: "pointer" }}>
                                {dealerInquiry.comAddress}
                            </DealerInquiryTableBodyRowSpan>
                            <DealerInquiryTableBodyRowSpan style={{ cursor: "pointer" }}>{dealerInquiry.dlrNum}</DealerInquiryTableBodyRowSpan>
                        </tr>
                    </React.Fragment>
                );
            })}
        </DealerInquiryTableBody>
    );
};

export default DealerInquiryTableBodyForm;
