import React from 'react'
import {
  TableHeader,
  Thead,
  CheckBoxWrapper,
  InputCheckBox,
  LabelCheckBox,
} from "./TableHeaderForm.styled";

const TableHeaderForm = () => {
  return (
    <Thead>
      <tr>
        <TableHeader rowSpan={2} style={{width:"80px", height:"80px"}}>
          <CheckBoxWrapper>
            <InputCheckBox id="checkbox_header"/>
            <LabelCheckBox htmlFor="checkbox_header"/>
          </CheckBoxWrapper>
        </TableHeader>
        <TableHeader rowSpan={2}>번호</TableHeader>
        <TableHeader colSpan={2} style={{ width:"560px"}}>업체명</TableHeader>
        <TableHeader>업종</TableHeader>
        <TableHeader>업무 시간</TableHeader>
        <TableHeader>전화번호</TableHeader>
        <TableHeader rowSpan={2}>숨기기</TableHeader>
      </tr>
      <tr>
        <TableHeader>대표자</TableHeader>
        <TableHeader>주소</TableHeader>
        <TableHeader>취급 품목</TableHeader>
        <TableHeader>홈페이지</TableHeader>
        <TableHeader>휴대폰 번호</TableHeader>
      </tr>
    </Thead>
  )
}

export default TableHeaderForm