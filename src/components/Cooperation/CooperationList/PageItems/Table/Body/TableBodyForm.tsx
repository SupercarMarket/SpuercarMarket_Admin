import { useRef, Fragment } from "react";
import {
  Tbody,
  BodyButton,
  BodyContent,
  CheckBoxWrapper,
  InputCheckBox,
  LabelCheckBox,
} from "./TableBodyForm.styled";

import {
  CooperationPropsType,
  TypeOfBusiness,
} from "../../../../../../types/CooperationType";
import { CooperationAction } from "redux/modules/CooperationSlice";
import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { useNavigate } from "react-router";

const TableBodyForm = ({
  offset,
  postsPerPage,
  totalContentsCount,
}: CooperationPropsType) => {
  const inputCheckTypeRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { list, checkList } = useAppSelector((state) => state.CooperationSlice);

  // 항목 체크 박스 셋업
  const userCheckBoxClickHandler = (brdSeq: number, isChecked: boolean) => {
    dispatch(
      CooperationAction.setCooperationListEachChecked({ brdSeq, isChecked })
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

  // 제휴업체 디테일로 넘어가기
  const cooperationDetailOnClickHandler = (brdSeq: number) => {
    navigate(`/cooperationlist/${brdSeq}`);
  };

  return (
    <Tbody key={"cooperation-uuid"}>
      {list.map((item, index) => {
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
                    checked={checkList.includes(item.brdSeq) ? true : false}
                  />
                  <LabelCheckBox htmlFor={item.brdSeq.toString()} />
                </CheckBoxWrapper>
              </BodyContent>
              <BodyContent rowSpan={2}>
                {String(item.brdSeq.toString()).padStart(7, "0")}
              </BodyContent>
              <BodyContent colSpan={2}>{item.companyName}</BodyContent>
              <BodyContent>{TypeOfBusiness[item.category]}</BodyContent>
              <BodyContent>{item.workingTime}</BodyContent>
              <BodyContent>{item.wiredNumber}</BodyContent>
              <BodyContent rowSpan={2}>
                <BodyButton>숨기기</BodyButton>
              </BodyContent>
            </tr>
            <tr>
              <BodyContent>{item.userName}</BodyContent>
              <BodyContent>{item.address}</BodyContent>
              <BodyContent>{item.treatedItem}</BodyContent>
              <BodyContent style={{ cursor: "pointer" }}>
                <a href={item.website}>{item.website}</a>
              </BodyContent>
              <BodyContent>{item.phoneNumber}</BodyContent>
            </tr>
          </Fragment>
        );
      })}
    </Tbody>
  );
};

export default TableBodyForm;
