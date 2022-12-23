import React from 'react'
import {
  TopWrapper,
  TopLeftWrapper,
  TopRightWrapper,
  TopHideButton,
  TotalTopButton,
} from "./TopBannerForm.styled";

import SearchBarForm from "../../../../Common/SearchBar/SearchBarForm";

const TopBannerForm = () => {
  const isCountCooperation = "00";
  return (
    <TopWrapper>
      <TopLeftWrapper>
        <SearchBarForm />
      </TopLeftWrapper>
      <TopRightWrapper>
        <TopHideButton>선택 항목 완료</TopHideButton>
        <TotalTopButton>{`미완료 문의 0${isCountCooperation}개`}</TotalTopButton>
      </TopRightWrapper>
    </TopWrapper>
  )
}

export default TopBannerForm