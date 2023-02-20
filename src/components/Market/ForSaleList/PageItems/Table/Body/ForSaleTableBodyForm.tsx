import React, { useRef, useEffect, useState } from 'react'
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

import { ForSaleListPropsType } from "../../../../../../types/ForSaleList";

const ForSaleTableBodyForm = ({
  offset,
  postsPerPage,
  totalContentsCount,
}: ForSaleListPropsType) => {
  const inputCheckTypeRef = useRef<HTMLInputElement>(null);
  
  const inputCheckOnClickHandler = () => {
    console.log( inputCheckTypeRef.current?.checked );
  };

  const inputCheckOnChangeHandler = ( event : React.ChangeEvent<HTMLInputElement> ) => {
    console.log( event.target.id, event.target.checked );
  };



  return (
    <MarketTableBody key={`uuid`}>
      { Array( totalContentsCount ).fill( 0 ).slice( offset, offset + postsPerPage ).map( ( _, i ) => {
        return (
          <React.Fragment key={i}>
            <tr>
              <MarketTableBodyRowSpan rowSpan={2}>
                <MarketCheckBoxWrapper>
                  <MarketInputCheckBox
                    id={"body_checkbox" + i}
                    ref={inputCheckTypeRef}
                    onClick={inputCheckOnClickHandler}
                    onChange={(event) => { inputCheckOnChangeHandler( event )}}
                  />
                  <MarketLabelCheckBox htmlFor={"body_checkbox" + i} />
                </MarketCheckBoxWrapper>
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan rowSpan={2}>
                0000000
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan rowSpan={2}>
                스포츠카
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan
                rowSpan={2}
                style={{ textAlign: "left", padding: "8.5px 16px" }}
              >
                <MarketTableBodyClamp>
                  제목제목제목제목제목제목제목제목제목제목제목제목제목제제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </MarketTableBodyClamp>
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan rowSpan={2}>
                판매 완료
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan rowSpan={2}>
                2022-10-16
              </MarketTableBodyRowSpan>
              <MarketTableBodyNoSpan>0000000</MarketTableBodyNoSpan>
              <MarketTableBodyNoSpan>abcgd</MarketTableBodyNoSpan>
              <MarketTableBodyRowSpan rowSpan={2}>
                <MarketTableBodyButton>숨기기 취소</MarketTableBodyButton>
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan rowSpan={2}>
                <MarketTableBodyButton>삭제하기</MarketTableBodyButton>
              </MarketTableBodyRowSpan>
            </tr>
            <tr>
              <MarketTableBodyNoSpan>테스트</MarketTableBodyNoSpan>
              <MarketTableBodyNoSpan>
                슈퍼카마켓슈퍼카마켓
              </MarketTableBodyNoSpan>
            </tr>
          </React.Fragment>
        );
      })}
    </MarketTableBody>
  );
};

export default ForSaleTableBodyForm