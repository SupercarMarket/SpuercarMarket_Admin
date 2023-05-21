import { Fragment, useRef } from "react";
import {
  BodyButton,
  BodyContent,
  CheckBoxWrapper,
  InputCheckBox,
  LabelCheckBox,
  Tbody,
} from "./TableBodyForm.styled";

import {
  CooperationPropsType,
  TypeOfBusiness,
} from "../../../../../../types/CooperationType";
import { CooperationAction } from "redux/modules/CooperationSlice";
import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { useNavigate } from "react-router";
import ClientAxios from "../../../../../../utils/api/AxiosAPI/ClientAxios";

const TableBodyForm = ({}: CooperationPropsType) => {
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

  //숨기기 / 숨기기 취소
  const hidePartnershipHandler = async (id: number, isAppear: boolean) => {
    if (isAppear) {
      await ClientAxios.post(`/partnerships/hide/${id}`)
        .then((response) => {
          if (response.status === 200) {
            alert("[완료]");
            // eslint-disable-next-line no-restricted-globals
            location.reload();
          }
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      await ClientAxios.post(`/partnerships/unHide/${id}`)
        .then((response) => {
          if (response.status === 200) {
            alert("[완료]");
            // eslint-disable-next-line no-restricted-globals
            location.reload();
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <Tbody key={"cooperation-uuid"}>
      {list.map((item, index) => {
        return (
          <Fragment key={item.brdSeq}>
            <tr
              onClick={() => cooperationDetailOnClickHandler(item.brdSeq)}
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
                    checked={!!checkList.includes(item.brdSeq)}
                  />
                  <LabelCheckBox htmlFor={item.brdSeq.toString()} />
                </CheckBoxWrapper>
              </BodyContent>
              <BodyContent rowSpan={2}>
                {String(item.brdSeq.toString()).padStart(7, "0")}
              </BodyContent>
              <BodyContent colSpan={2}>{item.companyName}</BodyContent>
              <BodyContent>{TypeOfBusiness[item.category]}</BodyContent>
              <BodyContent>
                평일 {item.workingTime.split("-")[0]}:00 ~{" "}
                {item.workingTime.split("-")[1]}:00
              </BodyContent>
              <BodyContent>{item.wiredNumber}</BodyContent>
              <BodyContent
                rowSpan={2}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <BodyButton
                  onClick={() =>
                    hidePartnershipHandler(item.brdSeq, item.isAppear)
                  }
                >
                  {item.isAppear ? "숨기기" : "숨기기 취소"}
                </BodyButton>
              </BodyContent>
            </tr>
            <tr
              onClick={() => cooperationDetailOnClickHandler(item.brdSeq)}
              style={{ cursor: "pointer" }}
            >
              <BodyContent>{item.representative}</BodyContent>
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
