import React from 'react'
import {
  MarketTableBody,
  MarketTableBodyRowSpan,
  MarketCheckBoxWrapper,
  MarketInputCheckBox,
  MarketLabelCheckBox,
  MarketTableBodyClamp,
  MarketTableBodyNoSpan,
  MarketTableBodyButton
} from "./ForSaleTableBodyForm.styled";

const ForSaleTableBodyForm = () => {
  return (
    <MarketTableBody key={`uuid`}>
      <tr>
        <MarketTableBodyRowSpan index={0}>
          <MarketCheckBoxWrapper>
            <MarketInputCheckBox id={"body_check3"} />
            <MarketLabelCheckBox htmlFor={"body_check3"} />
          </MarketCheckBoxWrapper>
        </MarketTableBodyRowSpan>
        <MarketTableBodyRowSpan index={0}>0000000</MarketTableBodyRowSpan>
        <MarketTableBodyRowSpan index={0}>스포츠카</MarketTableBodyRowSpan>
        <MarketTableBodyRowSpan index={3}>
          <MarketTableBodyClamp>
            제목제목제목제목제목제목제목제목제목제목제목제목제목제제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
          </MarketTableBodyClamp>
        </MarketTableBodyRowSpan>
        <MarketTableBodyRowSpan index={0}>판매 완료</MarketTableBodyRowSpan>
        <MarketTableBodyRowSpan index={0}>2022-10-16</MarketTableBodyRowSpan>
        <MarketTableBodyNoSpan>0000000</MarketTableBodyNoSpan>
        <MarketTableBodyNoSpan>abcgd</MarketTableBodyNoSpan>
        <MarketTableBodyRowSpan index={0}>
          <MarketTableBodyButton>숨기기 취소</MarketTableBodyButton>
        </MarketTableBodyRowSpan>
      </tr>
      <tr>
        <MarketTableBodyNoSpan>테스트</MarketTableBodyNoSpan>
        <MarketTableBodyNoSpan>슈퍼카마켓슈퍼카마켓</MarketTableBodyNoSpan>
      </tr>
    </MarketTableBody>
  );
}

export default ForSaleTableBodyForm