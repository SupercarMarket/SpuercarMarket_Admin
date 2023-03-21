import React from "react";
import { DealerInquiryTableBody, DealerInquiryTableBodyRowSpan, DealerInquiryTableBodyNoSpan, DealerInquiryTableBodyButton, DealerInquiryTableImage } from "./DealerInquiryTableBodyForm.styled";

import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { useNavigate } from "react-router";

import { DealerInquiryTableProps } from "../DealerInquiryTableForm";

const DealerInquiryTableBodyForm = ({ offset, postsPerPage, totalContentsCount, registerDealerHandler }: DealerInquiryTableProps) => {
    const navigate = useNavigate();
    const { list } = useAppSelector((state) => state.DealerInquirySlice);

    // 매물 디테일로 넘어가기
    const DealerInquiryDetailOnClickHandler = (userSeq: number) => {
        navigate(`/dealerinquiry/${userSeq.toString()}`);
    };

    return (
        <DealerInquiryTableBody key={`uuid`}>
            {list.slice(offset, offset + postsPerPage).map((dealerInquiry, index) => {
                return (
                    <React.Fragment key={dealerInquiry.userSeq}>
                        <tr onClick={() => DealerInquiryDetailOnClickHandler(dealerInquiry.userSeq)}>
                            <DealerInquiryTableBodyNoSpan>{dealerInquiry.comName}</DealerInquiryTableBodyNoSpan>
                            <DealerInquiryTableBodyNoSpan>{dealerInquiry.comPhone}</DealerInquiryTableBodyNoSpan>
                            <DealerInquiryTableBodyNoSpan>{dealerInquiry.guildName}</DealerInquiryTableBodyNoSpan>
                            <DealerInquiryTableBodyRowSpan rowSpan={2}>
                                <DealerInquiryTableImage src={dealerInquiry.dlrEmployeeCardFront} alt="dlrEmployeeCardFront" />
                            </DealerInquiryTableBodyRowSpan>
                            <DealerInquiryTableBodyRowSpan rowSpan={2}>
                                <DealerInquiryTableImage src={dealerInquiry.dlrEmployeeCardBack} alt="dlrEmployeeCardBack" />
                            </DealerInquiryTableBodyRowSpan>
                            <DealerInquiryTableBodyRowSpan rowSpan={2}>
                                <DealerInquiryTableImage src={dealerInquiry.dlrProileImage} alt="dlrProfileImage" />
                            </DealerInquiryTableBodyRowSpan>
                            <DealerInquiryTableBodyRowSpan rowSpan={2}>{dealerInquiry.comment}</DealerInquiryTableBodyRowSpan>
                            <DealerInquiryTableBodyRowSpan rowSpan={2}>
                                <DealerInquiryTableBodyButton id={dealerInquiry.userSeq.toString()} onClick={() => registerDealerHandler(dealerInquiry.userSeq)}>
                                    딜러 등록
                                </DealerInquiryTableBodyButton>
                            </DealerInquiryTableBodyRowSpan>
                        </tr>
                        <tr onClick={() => DealerInquiryDetailOnClickHandler(dealerInquiry.userSeq)}>
                            <DealerInquiryTableBodyNoSpan colSpan={2} style={{ cursor: "pointer" }}>
                                {dealerInquiry.comAddress}
                            </DealerInquiryTableBodyNoSpan>
                            <DealerInquiryTableBodyNoSpan style={{ cursor: "pointer" }}>{dealerInquiry.dlrNum}</DealerInquiryTableBodyNoSpan>
                        </tr>
                    </React.Fragment>
                );
            })}
        </DealerInquiryTableBody>
    );
};

export default DealerInquiryTableBodyForm;
