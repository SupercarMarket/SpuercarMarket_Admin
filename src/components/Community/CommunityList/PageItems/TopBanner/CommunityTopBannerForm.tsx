import React, {useRef, useState} from "react";
import {
  TopWrapper,
  TopLeftWrapper,
  TopRightWrapper,
  TopHideButton,
  TotalTopButton,
} from "./CommunityTopBannerForm.styled";

import SearchBarForm from "../../../../Common/SearchBar/SearchBarForm";
import DropDownForm from "../../../../Common/DropDown/DropDownForm";
import {CommunityFilterDropDownMap} from "../../../../../types/DropDownType";
import {useAppDispatch, useAppSelector} from "../../../../../store/rootReducer";
import {getCommunityList, setCommunityHide} from "../../../../../redux/modules/CommunitySlice";

const CommunityTopBannerForm = () => {
  const [searchType, setSearchType] = useState<string>();
  let Likeyword = "";
  const SearchBarInputRef = useRef<HTMLInputElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { category, totalElements, checkList } = useAppSelector(
      (state) => state.CommunitySlice
  );
  const FilterLiOnClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setSearchType(CommunityFilterDropDownMap[event.currentTarget.textContent as string])
  };
  const SearchBarInputClickHandler = () => {
    Likeyword = SearchBarInputRef.current?.value as string;
    if (!Likeyword) {
      alert("검색어를 입력하세요");
      return;
    }
    console.log("enter");
    dispatch(
        getCommunityList({
          searchType: searchType as string,
          category: category as string,
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
      SearchBarInputClickHandler()
    }
  };

  // 숨기기
  const hideOnClickHandler = () => {
    dispatch(
        setCommunityHide(checkList)
    )
  };

  return (
    <TopWrapper>
      <TopLeftWrapper>
        <DropDownForm
          category={"community_list"}
          titleRef={ref}
          LiOnClick={FilterLiOnClick}
        />
        <SearchBarForm
          SearchBarInputRef={SearchBarInputRef}
          SearchBarOnClick={SearchBarInputClickHandler}
          SearchBarInputOnKeyDown={SearchBarInputOnKeyDownHandler}
        />
      </TopLeftWrapper>
      <TopRightWrapper>
        <TopHideButton
          onClick={()=>hideOnClickHandler()}
        >숨기기</TopHideButton>
        <TotalTopButton>{`총 게시물 수 ${totalElements}개`}</TotalTopButton>
      </TopRightWrapper>
    </TopWrapper>
  );
};

export default CommunityTopBannerForm;
