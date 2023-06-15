import React from "react";
import {
  MagazineListCheckBoxWrapper,
  MagazineListInputCheckBox,
  MagazineListLabelCheckBox,
  MagazineListTableHeader,
  MagazineListTableHeaderRowSpan,
} from "./MagazineInquiryListTableHeaderForm.styled";
import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { MagazineInquiryAction } from "../../../../../../redux/modules/MagazineInquirySlice";

const MagazineInquiryListTableHeaderForm = () => {
  const { allChecked } = useAppSelector((state) => state.MagazineInquirySlice);
  const dispatch = useAppDispatch();
  const allCheckBoxClickHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.currentTarget.checked);
    dispatch(
      MagazineInquiryAction.setMagazineListAllChecked({
        allChecked: event.currentTarget.checked,
      })
    );
  };

  return (
    <MagazineListTableHeader>
      <tr>
        <MagazineListTableHeaderRowSpan rowSpan={2} style={{ width: "5%" }}>
          <MagazineListCheckBoxWrapper>
            <MagazineListInputCheckBox
              id="header_check"
              onChange={(event) => allCheckBoxClickHandler(event)}
              checked={allChecked}
            />
            <MagazineListLabelCheckBox htmlFor="header_check" />
          </MagazineListCheckBoxWrapper>
        </MagazineListTableHeaderRowSpan>
        <MagazineListTableHeaderRowSpan>
          상담 매거진 제목
        </MagazineListTableHeaderRowSpan>
        <MagazineListTableHeaderRowSpan style={{ width: "15%" }}>
          상담 신청 유저 이름
        </MagazineListTableHeaderRowSpan>
        <MagazineListTableHeaderRowSpan style={{ width: "15%" }}>
          상담 신청 유저 ID
        </MagazineListTableHeaderRowSpan>
        <MagazineListTableHeaderRowSpan style={{ width: "15%" }}>
          상담 신청 유저 전화 번호
        </MagazineListTableHeaderRowSpan>
        <MagazineListTableHeaderRowSpan style={{ width: "15%" }}>
          상담 상태
        </MagazineListTableHeaderRowSpan>
      </tr>
    </MagazineListTableHeader>
  );
};

export default MagazineInquiryListTableHeaderForm;
