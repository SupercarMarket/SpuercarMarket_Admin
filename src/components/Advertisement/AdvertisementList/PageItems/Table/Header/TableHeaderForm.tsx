import React from "react";
import {
  CheckBoxWrapper,
  InputCheckBox,
  LabelCheckBox,
  TableHeader,
  TableHeaderRowSpan,
  Thead,
} from "./TableHeaderForm.styled";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../store/rootReducer";
import { AdvertisementAction } from "../../../../../../redux/modules/AdvertisementSlice";

const TableHeaderForm = () => {
  const { allChecked } = useAppSelector((state) => state.AdvertisementSlice);
  const dispatch = useAppDispatch();
  const allCheckBoxClickHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      AdvertisementAction.setAdvertisementListAllChecked({
        allChecked: event.target.checked,
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
              checked={allChecked}
            />
            <LabelCheckBox htmlFor="header_check" />
          </CheckBoxWrapper>
        </TableHeaderRowSpan>
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
  );
};

export default TableHeaderForm;
