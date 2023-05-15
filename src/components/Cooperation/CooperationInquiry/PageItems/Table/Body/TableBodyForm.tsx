import React, { Fragment, useRef } from "react";
import {
  Tbody,
  BodyButton,
  BodyContent,
  CheckBoxWrapper,
  InputCheckBox,
  LabelCheckBox,
} from "./TableBodyForm.styled";
import { CooperationPropsType } from "../../../../../../types/CooperationType";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../store/rootReducer";
import { CooperationAction } from "../../../../../../redux/modules/CooperationSlice";
import { useNavigate } from "react-router";

const TableBodyForm = ({
  offset,
  postsPerPage,
  totalContentsCount,
}: CooperationPropsType) => {
  const inputCheckTypeRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { inquiryList, inquiryCheckList } = useAppSelector(
    (state) => state.CooperationSlice
  );
  // 항목 체크 박스 셋업
  const userCheckBoxClickHandler = (brdSeq: number, isChecked: boolean) => {
    dispatch(
      CooperationAction.setCooperationInquiryListEachChecked({
        brdSeq,
        isChecked,
      })
    );
  };

  const inputCheckOnClickHandler = () => {
    console.log(inputCheckTypeRef.current?.checked);
  };

  const inputCheckOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    userCheckBoxClickHandler(parseInt(event.target.id), event.target.checked);
  };

  return (
    <Tbody key={"cooperationInquiry-uuid"}>
      {inquiryList.map((item, index) => {
        return (
          <Fragment key={item.brdSeq}>
            <tr>
              <BodyContent rowSpan={2}>
                <CheckBoxWrapper>
                  <InputCheckBox
                    id={item.brdSeq.toString()}
                    ref={inputCheckTypeRef}
                    onClick={inputCheckOnClickHandler}
                    onChange={(event) => {
                      inputCheckOnChangeHandler(event);
                    }}
                    checked={!!inquiryCheckList.includes(item.brdSeq)}
                  />
                  <LabelCheckBox htmlFor={item.brdSeq.toString()} />
                </CheckBoxWrapper>
              </BodyContent>
              <BodyContent colSpan={2}>{item.companyName}</BodyContent>
              <BodyContent>{item.category}</BodyContent>
              <BodyContent>
                평일 {item.workingTime.split("-")[0]}:00 ~
                {item.workingTime.split("-")[1]}:00
              </BodyContent>
              <BodyContent>{item.wiredNumber}</BodyContent>
              <BodyContent rowSpan={2}>
                <BodyButton>업체 등록</BodyButton>
              </BodyContent>
            </tr>
            <tr>
              <BodyContent>{item.representative}</BodyContent>
              <BodyContent>{item.address}</BodyContent>
              <BodyContent>{item.treatedItem}</BodyContent>
              <BodyContent>{item.website}</BodyContent>
              <BodyContent>{item.phoneNumber}</BodyContent>
            </tr>
          </Fragment>
        );
      })}
    </Tbody>
  );
};

export default TableBodyForm;
