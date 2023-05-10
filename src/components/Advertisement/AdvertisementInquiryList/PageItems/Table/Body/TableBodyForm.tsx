import React, { Fragment, useRef } from "react";
import {
  AdvertisementInquiryTableBodyButton,
  AdvertisementTableBodyRowSpan,
  BodyContent,
  CheckBoxWrapper,
  InputCheckBox,
  LabelCheckBox,
  Tbody,
} from "./TableBodyForm.styled";

import { AdvertisementPropsType } from "../../../../../../types/AdvertisementType";
import {
  AdvertisementAction,
  setAdvertisementProgress,
} from "redux/modules/AdvertisementSlice";
import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { useNavigate } from "react-router";
import {
  DisableInputCheckBox,
  TableBodyRowSpan,
} from "../../../../AdvertisementList/PageItems/Table/Body/TableBodyForm.styled";

interface List {
  id: number;
  userSeq: number;
  userId: string;
  name: string;
  nickname: string;
  phone: string;
  email: string;
  title: string;
  contents: string;
  confirm: string;
  link: string;
}

const TableBodyForm = ({}: AdvertisementPropsType) => {
  const inputCheckTypeRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const [isPage, setIsPage] = useState<number>(0);
  const { inquiryList, inquiryCheckList } = useAppSelector(
    (state) => state.AdvertisementSlice
  );

  // 항목 체크 박스 셋업
  const userCheckBoxClickHandler = (id: number, isChecked: boolean) => {
    dispatch(
      AdvertisementAction.setAdvertisementInquiryListEachChecked({
        id,
        isChecked,
      })
    );
  };

  const inputCheckOnChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    userCheckBoxClickHandler(id, e.target.checked);
  };

  // 제휴업체 문의 디테일로 넘어가기
  const AdvertisementInquiryDetailOnClickHandler = (brdSeq: number) => {
    navigate(`/advertisementlist/inquiry/${brdSeq}`);
  };
  const progressOnClickHandler = (brdSeq: number, confirm: string) => {
    if (confirm == "Y" || confirm == "N") return;
    dispatch(setAdvertisementProgress({ checkList: [brdSeq] }));
  };

  return (
    <Tbody key={"advertisemetInquiry-uuid"}>
      {inquiryList.map((item: List) => {
        return (
          <Fragment key={item.id}>
            <tr
              onClick={() => AdvertisementInquiryDetailOnClickHandler(item.id)}
              style={{ cursor: "pointer" }}
            >
              <TableBodyRowSpan
                rowSpan={2}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <CheckBoxWrapper>
                  {item.confirm === "R" ? (
                    <InputCheckBox
                      id={item.id.toString()}
                      ref={inputCheckTypeRef}
                      onChange={(event) => {
                        inputCheckOnChangeHandler(event, item.id);
                      }}
                      checked={!!inquiryCheckList.includes(item.id)}
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
              <BodyContent colSpan={2}>{item.userId}</BodyContent>
              {/*<BodyContent>{TypeOfBusiness[item.category]}</BodyContent>*/}
              <BodyContent>{item.phone}</BodyContent>
              <BodyContent>{item.title}</BodyContent>

              <AdvertisementTableBodyRowSpan
                rowSpan={2}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <AdvertisementInquiryTableBodyButton
                  progress={item.confirm}
                  onClick={() => progressOnClickHandler(item.id, item.confirm)}
                >
                  {
                    {
                      Y: "완료됨",
                      N: "반려하기",
                      R: "완료하기",
                    }[item.confirm]
                  }
                </AdvertisementInquiryTableBodyButton>
              </AdvertisementTableBodyRowSpan>
            </tr>
            <tr
              onClick={() => AdvertisementInquiryDetailOnClickHandler(item.id)}
              style={{ cursor: "pointer" }}
            >
              <BodyContent>{item.name}</BodyContent>
              <BodyContent>{item.nickname}</BodyContent>
              <BodyContent>{item.email}</BodyContent>
              <BodyContent>{item.contents}</BodyContent>
            </tr>
          </Fragment>
        );
      })}
    </Tbody>
  );
};

export default TableBodyForm;
