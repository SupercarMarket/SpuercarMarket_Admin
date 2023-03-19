import React, { useRef } from "react";
import {
  TopWrapper,
  TopLeftWrapper,
  TopRightWrapper,
  TopHideButton,
  TotalTopButton,
} from "./TopBannerForm.styled";

import SearchBarForm from "../../../../Common/SearchBar/SearchBarForm";
import DropDownForm from "../../../../Common/DropDown/DropDownForm";

const TopBannerForm = () => {
  const LiOnClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {};
  const titleRef = useRef<HTMLDivElement>(null);
  const SearchBarInputClickHandler = () => {};
  // 엔터키 입력시
  const SearchBarInputOnKeyDownHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
    }
  };
  const SearchBarInputRef = useRef<HTMLInputElement>(null);
  const isCountCooperation = "00";
  return (
    <TopWrapper>
      <TopLeftWrapper>
        <DropDownForm
          category={"cooperation_list"}
          LiOnClick={LiOnClick}
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
        <TotalTopButton>{`미등록 업체 수 0${isCountCooperation}개`}</TotalTopButton>
      </TopRightWrapper>
    </TopWrapper>
  );
};

export default TopBannerForm;
