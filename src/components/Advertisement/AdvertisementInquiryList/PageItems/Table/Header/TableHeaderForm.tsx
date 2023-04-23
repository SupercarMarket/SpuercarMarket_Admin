import React from "react";
import {
  CheckBoxWrapper,
  InputCheckBox,
  LabelCheckBox,
  TableHeader,
  Thead,
} from "./TableHeaderForm.styled";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../store/rootReducer";
import { AdvertisementAction } from "../../../../../../redux/modules/AdvertisementSlice";
import { TableHeaderRowSpan } from "../../../../AdvertisementList/PageItems/Table/Header/TableHeaderForm.styled";

const TableHeaderForm = () => {
  const { inquiryAllChecked } = useAppSelector(
    (state) => state.AdvertisementSlice
  );
  const dispatch = useAppDispatch();
  const allCheckBoxClickHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      AdvertisementAction.setAdvertisementInquiryListAllChecked({
        inquiryAllChecked: event.target.checked,
      })
    );
  };
  return (
    <Thead>
      <tr>
        <TableHeaderRowSpan rowSpan={2} style={{ width: "80px" }}>
          <CheckBoxWrapper>
            <InputCheckBox
              id="header_check"
              onChange={(event) => allCheckBoxClickHandler(event)}
              checked={inquiryAllChecked}
            />
            <LabelCheckBox htmlFor="header_check" />
          </CheckBoxWrapper>
        </TableHeaderRowSpan>
        <TableHeader rowSpan={2}>회원번호</TableHeader>
        <TableHeader colSpan={2}>아이디</TableHeader>
        <TableHeader>전화번호</TableHeader>
        <TableHeader>제목</TableHeader>
        <TableHeader rowSpan={2}>상태</TableHeader>
      </tr>
      <tr>
        <TableHeader>이름</TableHeader>
        <TableHeader>닉네임</TableHeader>
        <TableHeader>이메일</TableHeader>
        <TableHeader>내용</TableHeader>
      </tr>
    </Thead>
  );
};

export default TableHeaderForm;
