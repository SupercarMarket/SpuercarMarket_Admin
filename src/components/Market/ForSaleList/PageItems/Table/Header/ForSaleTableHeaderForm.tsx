import React, { useEffect } from "react";
import {
  MarketTableHeader,
  MarketTableHeaderRowSpan,
  MarketCheckBoxWrapper,
  MarketInputCheckBox,
  MarketLabelCheckBox,
} from "./ForSaleTableHeaderForm.styled";
import { MarketAction } from "../../../../../../redux/modules/MarketSlice";
import { useAppSelector, useAppDispatch } from "../../../../../../store/rootReducer";

const ForSaleTableHeaderForm = () => {
  const { allChecked } = useAppSelector( state => state.MarketSlice );
  const dispatch = useAppDispatch();
  const allCheckBoxClickHandler = ( event : React.ChangeEvent<HTMLInputElement> ) => {
    dispatch( MarketAction.setMarketListAllChecked( { allChecked : event.target.checked } ) );
  };

  return (
    <MarketTableHeader>
      <tr>
        <MarketTableHeaderRowSpan rowSpan={2} style={{width:"80px"}}>
          <MarketCheckBoxWrapper>
            <MarketInputCheckBox id="header_check" onChange={ event => allCheckBoxClickHandler( event )} checked={ allChecked }/>
            <MarketLabelCheckBox htmlFor="header_check" />
          </MarketCheckBoxWrapper>
        </MarketTableHeaderRowSpan>
        <MarketTableHeaderRowSpan rowSpan={2}>번호</MarketTableHeaderRowSpan>
        <MarketTableHeaderRowSpan rowSpan={2}>차종</MarketTableHeaderRowSpan>
        <MarketTableHeaderRowSpan rowSpan={2} style={{width:"240px"}}>제목</MarketTableHeaderRowSpan>
        <MarketTableHeaderRowSpan rowSpan={2}>매물 상태</MarketTableHeaderRowSpan>
        <MarketTableHeaderRowSpan rowSpan={2}>등록 일자</MarketTableHeaderRowSpan>
        
        {["딜러 회원번호", "딜러 아이디"].map((item) => {
          return (
            <MarketTableHeaderRowSpan key={item}>{item}</MarketTableHeaderRowSpan>
          );
        })}
        <MarketTableHeaderRowSpan rowSpan={2}>
          숨기기
        </MarketTableHeaderRowSpan>
        <MarketTableHeaderRowSpan rowSpan={2}>
          삭제하기
        </MarketTableHeaderRowSpan>
      </tr>
      <tr>
        {["딜러 이름", "딜러 닉네임"].map((item) => {
          return (
            <MarketTableHeaderRowSpan key={item}>{item}</MarketTableHeaderRowSpan>
          );
        })}
      </tr>
    </MarketTableHeader>
  );
};

export default ForSaleTableHeaderForm;
