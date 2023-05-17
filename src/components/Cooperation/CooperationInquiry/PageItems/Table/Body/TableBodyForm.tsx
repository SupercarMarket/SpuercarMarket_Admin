import React, { Fragment, useRef } from "react";
import {
  BodyContent,
  CheckBoxWrapper,
  DisableBodyButton,
  InputCheckBox,
  LabelCheckBox,
  Tbody,
} from "./TableBodyForm.styled";
import { CooperationPropsType } from "../../../../../../types/CooperationType";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../store/rootReducer";
import {
  CooperationAction,
  setPartnershipProgress,
} from "../../../../../../redux/modules/CooperationSlice";
import { useNavigate } from "react-router";
import { BodyButton } from "../../../../CooperationList/PageItems/Table/Body/TableBodyForm.styled";

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

  const inputCheckOnClickHandler = () => {};

  const inputCheckOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    userCheckBoxClickHandler(parseInt(event.target.id), event.target.checked);
  };

  // 제휴업체 문의 디테일로 넘어가기
  const cooperationInquiryDetailOnClickHandler = (brdSeq: number) => {
    navigate(`/cooperationinquirylist/${brdSeq}`);
  };

  const progressOnClickHandler = (brdSeq: string) => {
    dispatch(setPartnershipProgress({ brdSeq: brdSeq as string }));
  };

  return (
    <Tbody key={"cooperationInquiry-uuid"}>
      {inquiryList.map((item, index) => {
        return (
          <Fragment key={item.brdSeq}>
            <tr
              onClick={() =>
                cooperationInquiryDetailOnClickHandler(item.brdSeq)
              }
              style={{ cursor: "pointer" }}
            >
              <BodyContent
                rowSpan={2}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
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
              {item.accepted === "WAITING" ? (
                <BodyContent
                  rowSpan={2}
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >
                  <BodyButton
                    onClick={() =>
                      progressOnClickHandler(item.brdSeq.toString())
                    }
                  >
                    업체 등록
                  </BodyButton>
                </BodyContent>
              ) : (
                <BodyContent
                  rowSpan={2}
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                  style={{ cursor: "auto" }}
                >
                  <DisableBodyButton style={{ cursor: "auto" }}>
                    {item.accepted === "ACCEPTED" ? "등록된 업체" : "반려"}
                  </DisableBodyButton>
                </BodyContent>
              )}
            </tr>
            <tr
              onClick={() =>
                cooperationInquiryDetailOnClickHandler(item.brdSeq)
              }
              style={{ cursor: "pointer" }}
            >
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
