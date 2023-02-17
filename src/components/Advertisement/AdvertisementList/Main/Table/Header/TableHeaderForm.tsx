import React from 'react'
import {
  Thead,
  TableHeader,
  TableHeaderButton,
  CheckBoxWrapper,
  InputCheckBox,
  LabelCheckBox,
  SmallCategoryWrapper
} from "./TableHeaderForm.styled";
import SmallDropDownForm from '../../../../../Common/SmallDropDown/SmallDropDownForm';

const TableHeaderForm = () => {
  return (
    <Thead>
      <tr>
        <TableHeader rowSpan={2} style={{ width: "80px", height: "80px" }}>
          <CheckBoxWrapper>
            <InputCheckBox id="checkbox_header" />
            <LabelCheckBox htmlFor="checkbox_header" />
          </CheckBoxWrapper>
        </TableHeader>
        <TableHeader rowSpan={2}>광고등록번호</TableHeader>
        <TableHeader>업체명</TableHeader>
        <TableHeader rowSpan={2} style={{ width : "240px" }}>
            <SmallCategoryWrapper>
                <span style={{ marginBottom:"8px" }}>광고 위치</span>
                <SmallDropDownForm category='advertisement_position' />
            </SmallCategoryWrapper>
        </TableHeader>
        <TableHeader style={{ width : "320px" }}>URL</TableHeader>
        <TableHeader>시작 일시</TableHeader>
        <TableHeader>단가</TableHeader>
        <TableHeader rowSpan={2}>
            <SmallCategoryWrapper>
                <span style={{ marginBottom:"8px" }}>노출 여부</span>
                <SmallDropDownForm category='advertisement_show'/>
            </SmallCategoryWrapper>
        </TableHeader>
        <TableHeader rowSpan={2}>노출 여부 변경</TableHeader>
      </tr>
      <tr>
        <TableHeader>유형</TableHeader>
        <TableHeader>이미지 파일</TableHeader>
        <TableHeader>종료 일시</TableHeader>
        <TableHeader>총액</TableHeader>
      </tr>
    </Thead>
  );
}

export default TableHeaderForm