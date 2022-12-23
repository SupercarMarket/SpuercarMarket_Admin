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
        <TableHeader rowSpan={2}>회원번호</TableHeader>
        <TableHeader colSpan={2} style={{ width:"360px"}}>아이디</TableHeader>
        <TableHeader style={{ width:"200px"}}>전화번호</TableHeader>
        <TableHeader style={{ width:"640px"}}>제목</TableHeader>
        <TableHeader rowSpan={2}>상태</TableHeader>
      </tr>
      <tr>
        <TableHeader>이름</TableHeader>
        <TableHeader>닉네임</TableHeader>
        <TableHeader>이메일</TableHeader>
        <TableHeader>내용</TableHeader>
      </tr>
    </Thead>
  )
}

export default TableHeaderForm