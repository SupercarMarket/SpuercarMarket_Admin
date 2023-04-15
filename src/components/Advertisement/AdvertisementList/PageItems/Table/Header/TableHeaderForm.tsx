import React from 'react'
import {CheckBoxWrapper, InputCheckBox, LabelCheckBox, TableHeader, Thead,} from "./TableHeaderForm.styled";

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
        <TableHeader rowSpan={2}>광고등록번호</TableHeader>
        <TableHeader>업체명</TableHeader>
        <TableHeader rowSpan={2}>광고 위치</TableHeader>
        <TableHeader>URL</TableHeader>
        <TableHeader rowSpan={2}>기간</TableHeader>
        <TableHeader rowSpan={2}>단가</TableHeader>
        <TableHeader rowSpan={2}>노출여부</TableHeader>
        <TableHeader rowSpan={2}>노출 여부 변경</TableHeader>
      </tr>
      <tr>
        <TableHeader>유형</TableHeader>
        <TableHeader>이미지</TableHeader>
      </tr>
    </Thead>
  )
}

export default TableHeaderForm