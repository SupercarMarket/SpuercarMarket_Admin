import React from "react";
import {
  MarketTableHeader,
  MarketTableHeaderNoSpan,
  MarketTableHeaderRowSpan,
  MarketCheckBoxWrapper,
  MarketInputCheckBox,
  MarketLabelCheckBox,
} from "./ForSaleTableHeaderForm.styled";

const TableHeaderText = ["번호", "차종", "제목", "매물 상태", "등록 일자"];

const ForSaleTableHeaderForm = () => {
  return (
    <MarketTableHeader>
      <tr>
        <MarketTableHeaderRowSpan text={""}>
          <MarketCheckBoxWrapper>
            <MarketInputCheckBox id="header_check" />
            <MarketLabelCheckBox htmlFor="header_check" />
          </MarketCheckBoxWrapper>
        </MarketTableHeaderRowSpan>
        {TableHeaderText.map((item) => {
          return (
            <MarketTableHeaderRowSpan text={item} key={item}>
              {item}
            </MarketTableHeaderRowSpan>
          );
        })}
        {["딜러 회원번호", "딜러 아이디"].map((item) => {
          return (
            <MarketTableHeaderNoSpan key={item}>{item}</MarketTableHeaderNoSpan>
          );
        })}
        <MarketTableHeaderRowSpan text={"hide"}>
          숨기기
        </MarketTableHeaderRowSpan>
      </tr>
      <tr>
        {["딜러 이름", "딜러 닉네임"].map((item) => {
          return (
            <MarketTableHeaderNoSpan key={item}>{item}</MarketTableHeaderNoSpan>
          );
        })}
      </tr>
    </MarketTableHeader>
  );
};

export default ForSaleTableHeaderForm;
