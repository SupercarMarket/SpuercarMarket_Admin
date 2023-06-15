import React, { useRef } from "react";
import {
  MagazineListTableBody,
  MagazineListTableBodyRowSpan,
  MagazineListCheckBoxWrapper,
  MagazineListInputCheckBox,
  MagazineLiseLabelCheckBox,
} from "./MagazineInquiryListTableBodyForm.styled";

import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { useNavigate } from "react-router";
import { MagazineInquiryAction } from "../../../../../../redux/modules/MagazineInquirySlice";

const MagazineInquiryListTableBodyForm = () => {
  const inputCheckTypeRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { list, checkList } = useAppSelector(
    (state) => state.MagazineInquirySlice
  );

  const inputCheckOnClickHandler = () => {
    console.log(inputCheckTypeRef.current?.checked);
  };

  // 항목 체크 박스 셋업
  const magazineCheckBoxClickHandler = (brdSeq: number, isChecked: boolean) => {
    dispatch(
      MagazineInquiryAction.setMagazineListEachChecked({ brdSeq, isChecked })
    );
  };

  const inputCheckOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    magazineCheckBoxClickHandler(
      parseInt(event.target.id),
      event.target.checked
    );
  };

  return (
    <MagazineListTableBody key={`uuid`}>
      {list.map((magazine, index) => {
        return (
          <React.Fragment key={magazine.brdSeq}>
            <tr>
              <MagazineListTableBodyRowSpan>
                <MagazineListCheckBoxWrapper>
                  <MagazineListInputCheckBox
                    id={magazine.brdSeq.toString()}
                    ref={inputCheckTypeRef}
                    onClick={inputCheckOnClickHandler}
                    onChange={(event) => {
                      inputCheckOnChangeHandler(event);
                    }}
                    checked={!!checkList.includes(magazine.brdSeq)}
                    disabled={false}
                  />
                  <MagazineLiseLabelCheckBox
                    htmlFor={magazine.brdSeq.toString()}
                  />
                </MagazineListCheckBoxWrapper>
              </MagazineListTableBodyRowSpan>
              <MagazineListTableBodyRowSpan>
                {magazine.title}
              </MagazineListTableBodyRowSpan>
              <MagazineListTableBodyRowSpan>
                {magazine.userName}
              </MagazineListTableBodyRowSpan>
              <MagazineListTableBodyRowSpan>
                {magazine.userId}
              </MagazineListTableBodyRowSpan>
              <MagazineListTableBodyRowSpan>
                {magazine.userPhone}
              </MagazineListTableBodyRowSpan>
              <MagazineListTableBodyRowSpan>
                {magazine.status}
              </MagazineListTableBodyRowSpan>
            </tr>
          </React.Fragment>
        );
      })}
    </MagazineListTableBody>
  );
};

export default MagazineInquiryListTableBodyForm;
