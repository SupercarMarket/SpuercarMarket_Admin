import React from "react";
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
  const isCountCooperation = "00";
  return (
    <TopWrapper>
      <TopLeftWrapper>
        <DropDownForm category={"cooperation_list"} />
        <SearchBarForm />
      </TopLeftWrapper>
      <TopRightWrapper>
        <TopHideButton>선택 항목 숨기기</TopHideButton>
        <TotalTopButton>{`총 업체 수 0${isCountCooperation}개`}</TotalTopButton>
      </TopRightWrapper>
    </TopWrapper>
  );
};

export default TopBannerForm;
