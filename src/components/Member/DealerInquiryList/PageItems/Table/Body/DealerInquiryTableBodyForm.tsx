import React from "react";
import {
  DealerInquiryTableBody,
  DealerInquiryTableBodyNoSpan,
  DealerInquiryTableBodyRowSpan,
  DealerInquiryTableImage,
} from "./DealerInquiryTableBodyForm.styled";

import { useAppSelector } from "store/rootReducer";
import { useNavigate } from "react-router";

import { DealerInquiryTableProps } from "../DealerInquiryTableForm";
import AcceptedButtonForm from "./AcceptedButtonForm";

const DealerInquiryTableBodyForm = ({}: DealerInquiryTableProps) => {
  const navigate = useNavigate();
  const { list } = useAppSelector((state) => state.DealerInquirySlice);

  // 매물 디테일로 넘어가기
  const DealerInquiryDetailOnClickHandler = (brdSeq: number) => {
    navigate(`/dealerinquiry/${brdSeq.toString()}`);
  };

  return (
    <DealerInquiryTableBody key={`uuid`}>
      {list.map((dealerInquiry, index) => {
        return (
          <React.Fragment key={dealerInquiry.brdSeq}>
            <tr
              onClick={() =>
                DealerInquiryDetailOnClickHandler(dealerInquiry.brdSeq)
              }
            >
              <DealerInquiryTableBodyNoSpan>
                {dealerInquiry.comName}
              </DealerInquiryTableBodyNoSpan>
              <DealerInquiryTableBodyNoSpan>
                {dealerInquiry.comPhone}
              </DealerInquiryTableBodyNoSpan>
              <DealerInquiryTableBodyNoSpan>
                {dealerInquiry.guildName}
              </DealerInquiryTableBodyNoSpan>
              <DealerInquiryTableBodyRowSpan rowSpan={2}>
                <DealerInquiryTableImage
                  src={dealerInquiry.dlrEmployeeCardFront}
                  alt="dlrEmployeeCardFront"
                />
              </DealerInquiryTableBodyRowSpan>
              <DealerInquiryTableBodyRowSpan rowSpan={2}>
                <DealerInquiryTableImage
                  src={dealerInquiry.dlrEmployeeCardBack}
                  alt="dlrEmployeeCardBack"
                />
              </DealerInquiryTableBodyRowSpan>
              <DealerInquiryTableBodyRowSpan rowSpan={2}>
                <DealerInquiryTableImage
                  src={dealerInquiry.dlrProfileImage}
                  alt="dlrProfileImage"
                />
              </DealerInquiryTableBodyRowSpan>
              <DealerInquiryTableBodyRowSpan rowSpan={2}>
                {dealerInquiry.comment}
              </DealerInquiryTableBodyRowSpan>
              <DealerInquiryTableBodyRowSpan rowSpan={2}>
                <AcceptedButtonForm accepted={dealerInquiry.accepted} />
              </DealerInquiryTableBodyRowSpan>
            </tr>
            <tr
              onClick={() =>
                DealerInquiryDetailOnClickHandler(dealerInquiry.brdSeq)
              }
            >
              <DealerInquiryTableBodyNoSpan colSpan={2}>
                {dealerInquiry.comAddress}
              </DealerInquiryTableBodyNoSpan>
              <DealerInquiryTableBodyNoSpan>
                {dealerInquiry.dlrNum}
              </DealerInquiryTableBodyNoSpan>
            </tr>
          </React.Fragment>
        );
      })}
    </DealerInquiryTableBody>
  );
};

export default DealerInquiryTableBodyForm;
