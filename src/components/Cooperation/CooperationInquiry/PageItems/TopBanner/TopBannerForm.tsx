import React, { useEffect, useRef, useState } from "react";
import {
  TopHideButton,
  TopLeftWrapper,
  TopRightWrapper,
  TopWrapper,
  TotalTopButton,
} from "./TopBannerForm.styled";

import SearchBarForm from "../../../../Common/SearchBar/SearchBarForm";
import DropDownForm from "../../../../Common/DropDown/DropDownForm";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../store/rootReducer";
import {
  CooperationAction,
  getCooperationInquiryList,
} from "../../../../../redux/modules/CooperationSlice";
import { CooperationListDropDownMap } from "../../../../../types/DropDownType";

interface Props {
  setInit: (init: boolean) => void;
}

const TopBannerForm = ({ setInit }: Props) => {
  let Likeyword = "";
  const SearchBarInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<string>();

  const { inquiryCheckList, totalElements, keyword } = useAppSelector(
    (state) => state.CooperationSlice
  );
  const titleRef = useRef<HTMLDivElement>(null);

  const LiOnClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setFilter(
      CooperationListDropDownMap[
        event.currentTarget.textContent as string
      ] as string
    );

    if (
      (CooperationListDropDownMap[
        event.currentTarget.textContent as string
      ] as string) === "ALL"
    ) {
      setInit(true);
    }
  };

  useEffect(() => {
    if (keyword && SearchBarInputRef.current) {
      SearchBarInputRef.current.value = keyword as string;
    }
  }, []);

  // ref로 접근하여 버튼 눌렸을 때 ref 값 가져오기
  const SearchBarInputClickHandler = () => {
    Likeyword = SearchBarInputRef.current?.value as string;
    dispatch(
      CooperationAction.setCooperationListKeyword({ keyword: Likeyword })
    );
    if (!Likeyword) {
      alert("검색어를 입력하세요");
      return;
    }
    dispatch(
      getCooperationInquiryList({
        filter: filter as string,
        keyword: Likeyword as string,
        page: 1,
      })
    );
  };
  // 엔터키 입력시
  const SearchBarInputOnKeyDownHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      SearchBarInputClickHandler();
    }
  };

  return (
    <TopWrapper>
      <TopLeftWrapper>
        <DropDownForm
          category={"cooperation_list"}
          LiOnClick={(event) => LiOnClick(event)}
          titleRef={titleRef}
        />
        <SearchBarForm
          SearchBarInputRef={SearchBarInputRef}
          SearchBarOnClick={SearchBarInputClickHandler}
          SearchBarInputOnKeyDown={SearchBarInputOnKeyDownHandler}
        />
      </TopLeftWrapper>
      <TopRightWrapper>
        <TopHideButton>선택 항목 업체 등록</TopHideButton>
        <TotalTopButton>{`문의 업체 수 ${totalElements}개`}</TotalTopButton>
      </TopRightWrapper>
    </TopWrapper>
  );
};

export default TopBannerForm;
