import React, { useState } from 'react';
import SearchBarForm from '../Common/SearchBar/SearchBarForm';
import DropDownForm from '../Common/DropDown/DropDownForm';
import {
  Wrapper,
  TopWrapper,
  TopLeftWrapper,
  TopRightWrapper,
  TopHideButton,
  TotalTopButton,
  TableWrapper,
  // Table
  MarketTable,
  MarketTableHeader,
  MarketTableHeaderRowSpan,
  MarketTableHeaderNoSpan,
  MarketTableBody,
  MarketTableBodyRowSpan,
  MarketTableBodyNoSpan,
  MarketTableBodyButton,
  // checkbox
  MarketCheckBoxWrapper,
  MarketInputCheckBox,
  MarketLabelCheckBox,
  MarketTableBodyClamp
} from "./MarketForm.styled";

const TableHeaderText = ["번호", "차종", "제목", "매물 상태", "등록 일자"]

const MarketForm = () => {
  const [ isCountSeller, setIsCountSeller ] = useState<string>('000');
  return (
    <Wrapper>
      <div style={{ width : "100%", marginLeft: "auto", marginRight: "auto" }}>
        <TopWrapper>
          <TopLeftWrapper>
            <DropDownForm category={"market_list"} />
            <SearchBarForm />
          </TopLeftWrapper>
          <TopRightWrapper>
            <TopHideButton>숨기기</TopHideButton>
            <TotalTopButton>{`총 매물 개수 ${isCountSeller}개`}</TotalTopButton>
          </TopRightWrapper>
        </TopWrapper>
        <TableWrapper>
          <MarketTable>
            {/* header 시작 */}
            <MarketTableHeader>
              <tr>
                <MarketTableHeaderRowSpan text={""}>
                  <MarketCheckBoxWrapper>
                    <MarketInputCheckBox id="header_check"/>
                    <MarketLabelCheckBox htmlFor="header_check"/>
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
                    <MarketTableHeaderNoSpan key={item}>
                      {item}
                    </MarketTableHeaderNoSpan>
                  );
                })}
                <MarketTableHeaderRowSpan text={"hide"}>
                  숨기기
                </MarketTableHeaderRowSpan>
              </tr>
              <tr>
                {["딜러 이름", "딜러 닉네임"].map((item) => {
                  return (
                    <MarketTableHeaderNoSpan key={item}>
                      {item}
                    </MarketTableHeaderNoSpan>
                  );
                })}
              </tr>
            </MarketTableHeader>

            {/* body 시작 */}
            { Array.from( {length:20}, ( v, i ) => {
              return (
                <MarketTableBody key={i}>
                  <tr>
                    <MarketTableBodyRowSpan index={0}>
                      <MarketCheckBoxWrapper>
                        <MarketInputCheckBox id={"body_check" + i} />
                        <MarketLabelCheckBox htmlFor={"body_check" + i} />
                      </MarketCheckBoxWrapper>
                    </MarketTableBodyRowSpan>
                    <MarketTableBodyRowSpan index={0}>
                      0000000
                    </MarketTableBodyRowSpan>
                    <MarketTableBodyRowSpan index={0}>
                      스포츠카
                    </MarketTableBodyRowSpan>
                    <MarketTableBodyRowSpan index={3}>
                      <MarketTableBodyClamp>제목제목제목제목제목제목제목제목제목제목제목제목제목제제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목</MarketTableBodyClamp>
                    </MarketTableBodyRowSpan>
                    <MarketTableBodyRowSpan index={0}>
                      판매 완료
                    </MarketTableBodyRowSpan>
                    <MarketTableBodyRowSpan index={0}>
                      2022-10-16
                    </MarketTableBodyRowSpan>
                    <MarketTableBodyNoSpan>0000000</MarketTableBodyNoSpan>
                    <MarketTableBodyNoSpan>abcgd</MarketTableBodyNoSpan>
                    <MarketTableBodyRowSpan index={0}>
                      <MarketTableBodyButton>숨기기 취소</MarketTableBodyButton>
                    </MarketTableBodyRowSpan>
                  </tr>
                  <tr>
                    <MarketTableBodyNoSpan>테스트</MarketTableBodyNoSpan>
                    <MarketTableBodyNoSpan>
                      슈퍼카마켓슈퍼카마켓
                    </MarketTableBodyNoSpan>
                  </tr>
                </MarketTableBody>
              );
            })}
            {/* <MarketTableBody>
              <tr>
                <MarketTableBodyRowSpan index={0}>
                  <MarketCheckBoxWrapper>
                    <MarketInputCheckBox id="header_check1"/>
                    <MarketLabelCheckBox htmlFor="header_check1"/>
                  </MarketCheckBoxWrapper>
                </MarketTableBodyRowSpan>
                <MarketTableBodyRowSpan index={0}>
                  0000000
                </MarketTableBodyRowSpan>
                <MarketTableBodyRowSpan index={0}>
                  스포츠카
                </MarketTableBodyRowSpan>
                <MarketTableBodyRowSpan index={3}>
                  제목제목제목제목제목제목제목제목제목
                </MarketTableBodyRowSpan>
                <MarketTableBodyRowSpan index={0}>
                  판매 완료
                </MarketTableBodyRowSpan>
                <MarketTableBodyRowSpan index={0}>
                  2022-10-16
                </MarketTableBodyRowSpan>
                <MarketTableBodyNoSpan>0000000</MarketTableBodyNoSpan>
                <MarketTableBodyNoSpan>abcgd</MarketTableBodyNoSpan>
                <MarketTableBodyRowSpan index={0}><MarketTableBodyButton>숨기기 취소</MarketTableBodyButton></MarketTableBodyRowSpan>
              </tr>
              <tr>
                <MarketTableBodyNoSpan>테스트</MarketTableBodyNoSpan>
                <MarketTableBodyNoSpan>
                  슈퍼카마켓슈퍼카마켓
                </MarketTableBodyNoSpan>
              </tr>
            </MarketTableBody> */}
          </MarketTable>
        </TableWrapper>
      </div>
    </Wrapper>
  );
}

export default MarketForm;