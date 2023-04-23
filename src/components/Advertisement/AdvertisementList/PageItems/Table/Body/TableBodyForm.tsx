import React, { Fragment, useRef } from "react";
import {
  AdvertisementTableBodyRowSpan,
  BodyButton,
  BodyContent,
  CheckBoxWrapper,
  DisableInputCheckBox,
  InputCheckBox,
  LabelCheckBox,
  TableBodyRowSpan,
  Tbody,
} from "./TableBodyForm.styled";

import { AdvertisementPropsType } from "../../../../../../types/AdvertisementType";
import {
  AdvertisementAction,
  setAdvertisementComplete,
} from "redux/modules/AdvertisementSlice";
import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { useNavigate } from "react-router";

const TableBodyForm = ({}: AdvertisementPropsType) => {
  const inputCheckTypeRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const [isPage, setIsPage] = useState<number>(0);
  const { list, checkList } = useAppSelector(
    (state) => state.AdvertisementSlice
  );

  const closeAdvertisementHandler = (id: number, viewStatus: boolean) => {
    if (!viewStatus) return;
    dispatch(setAdvertisementComplete({ checkList: [id] }));
  };

  // 항목 체크 박스 셋업
  const userCheckBoxClickHandler = (brdSeq: number, isChecked: boolean) => {
    dispatch(
      AdvertisementAction.setAdvertisementListEachChecked({ brdSeq, isChecked })
    );
  };

  const inputCheckOnChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    userCheckBoxClickHandler(id, e.target.checked);
  };

  // 제휴업체 디테일로 넘어가기
  const AdvertisementDetailOnClickHandler = (brdSeq: number) => {
    navigate(`/advertisementlist/${brdSeq}`);
  };

  return (
    <Tbody key={"advertisemet-uuid"}>
      {list.map((item, index) => {
        return (
          <Fragment key={item.id}>
            <tr
              onClick={() => AdvertisementDetailOnClickHandler(item.id)}
              style={{ cursor: "pointer" }}
            >
              <TableBodyRowSpan
                rowSpan={2}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <CheckBoxWrapper>
                  {item.viewStatus ? (
                    <InputCheckBox
                      id={item.id.toString()}
                      ref={inputCheckTypeRef}
                      onChange={(event) => {
                        inputCheckOnChangeHandler(event, item.id);
                      }}
                      checked={!!checkList.includes(item.id)}
                    />
                  ) : (
                    <DisableInputCheckBox />
                  )}

                  <LabelCheckBox htmlFor={item.id.toString()} />
                </CheckBoxWrapper>
              </TableBodyRowSpan>
              <BodyContent rowSpan={2}>
                {" "}
                {String(item.id.toString()).padStart(7, "0")}
              </BodyContent>
              <BodyContent>{item.adTitle}</BodyContent>
              {/*<BodyContent>{TypeOfBusiness[item.category]}</BodyContent>*/}
              <BodyContent rowSpan={2}>{item.adPage}</BodyContent>
              <BodyContent>{item.url}</BodyContent>

              <BodyContent rowSpan={2}>
                {item.viewDate.map((i, v) => {
                  return v % 2 == 0 ? (
                    <span key={v}>{i}, </span>
                  ) : (
                    <span key={v}>
                      {i} <br />
                    </span>
                  );
                })}
              </BodyContent>
              <BodyContent rowSpan={2}>{item.pricePerMonth} 원</BodyContent>
              <BodyContent rowSpan={2}>
                {item.viewStatus ? "진행 중" : "종료"}
              </BodyContent>
              <AdvertisementTableBodyRowSpan
                rowSpan={2}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                {item.viewStatus ? (
                  <BodyButton
                    onClick={() =>
                      closeAdvertisementHandler(item.id, item.viewStatus)
                    }
                  >
                    종료
                  </BodyButton>
                ) : (
                  <BodyButton>종료됨</BodyButton>
                )}
              </AdvertisementTableBodyRowSpan>
            </tr>
            <tr
              onClick={() => AdvertisementDetailOnClickHandler(item.id)}
              style={{ cursor: "pointer" }}
            >
              <BodyContent>{item.adType}</BodyContent>
              <BodyContent>{item.imageName}</BodyContent>
              {/*<BodyContent rowSpan={2}>*/}
              {/*  <BodyButton onClick={temp}>임시확인</BodyButton>*/}
              {/*</BodyContent>*/}
              {/*<BodyContent>{item.treatedItem}</BodyContent>*/}
              {/*<BodyContent style={{ cursor: "pointer" }}>*/}
              {/*  <a href={item.website}>{item.website}</a>*/}
              {/*</BodyContent>*/}
              {/*<BodyContent>{item.phoneNumber}</BodyContent>*/}
            </tr>
          </Fragment>
        );
      })}
    </Tbody>
  );
};

export default TableBodyForm;
