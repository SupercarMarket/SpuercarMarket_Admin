import React, { useRef } from "react";
import {
  TopWrapper,
  TopLeftWrapper,
  TopRightWrapper,
  TopHideButton,
  TotalTopButton,
} from "./CommunityTopBannerForm.styled";

import SearchBarForm from "../../../../Common/SearchBar/SearchBarForm";
import DropDownForm from "../../../../Common/DropDown/DropDownForm";

const CommunityTopBannerForm = () => {
  const ref = useRef<HTMLDivElement>(null);
  const SearchBarInputRef = useRef<HTMLInputElement>(null);
  const LiOnClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {};
  const SearchBarInputClickHandler = () => {};
  // 엔터키 입력시
  const SearchBarInputOnKeyDownHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
    }
  };
  const isCountSeller = "00";
  return (
    <TopWrapper>
      <TopLeftWrapper>
        <DropDownForm
          category={"community_list"}
          titleRef={ref}
          LiOnClick={LiOnClick}
        />
        <SearchBarForm
          SearchBarInputRef={SearchBarInputRef}
          SearchBarOnClick={SearchBarInputClickHandler}
          SearchBarInputOnKeyDown={SearchBarInputOnKeyDownHandler}
        />
      </TopLeftWrapper>
      <TopRightWrapper>
        <TopHideButton>숨기기</TopHideButton>
        <TotalTopButton>{`총 게시물 수 0${isCountSeller}개`}</TotalTopButton>
      </TopRightWrapper>
    </TopWrapper>
  );
};

export default CommunityTopBannerForm;
