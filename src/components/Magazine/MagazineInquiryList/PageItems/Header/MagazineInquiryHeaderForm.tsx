import React from "react";
import { Button } from "../../../styles/buttonStyles";

import { useAppDispatch, useAppSelector } from "store/rootReducer";

import { HeaderDiv, HeaderTitle } from "./MagazineInquiryHeaderForm.styled";
import { useNavigate } from "react-router-dom";
import { confirmMagazineInquiryButtonOnClickHandler } from "utils/api/Magazine/MagazineInquiryAPI";
import { undiscloseMagazineHandler } from "../../../../../utils/api/Magazine/MagazineListAPI";
import { MagazineListType } from "../../../../../types/MagazineList";
import { MagazineListAction } from "../../../../../redux/modules/MagazineListSlice";
import { MagazineInquiryAction } from "../../../../../redux/modules/MagazineInquirySlice";
import { MagazineInquiryListType } from "../../../../../types/MagazineInquiry";

function MagazineInquiryHeader({}) {
  const { checkList, list } = useAppSelector(
    (state) => state.MagazineInquirySlice
  );

  const confirmInquiryButtonOnClickHandler = (seqListDto: number[]) => {
    confirmMagazineInquiryButtonOnClickHandler(seqListDto)
      .then((response) => {
        if (response?.status === 200) {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <HeaderDiv>
      <HeaderTitle>매거진 상담 신청 리스트</HeaderTitle>
      <Button onClick={() => confirmInquiryButtonOnClickHandler(checkList)}>
        상담 완료 하기
      </Button>
      {/*<Button onClick={() => newMagazineButtonOnClickHandler()}>매거진 작성</Button>*/}
    </HeaderDiv>
  );
}

export default MagazineInquiryHeader;
