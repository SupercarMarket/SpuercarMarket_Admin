import React from 'react'
import SearchBarForm from '../../../../Common/SearchBar/SearchBarForm';
import { Wrapper, RightWrapper, BannerButton, BannerInfoButton } from "./TopBannerForm.styled";

const TopBanner = () => {
  return (
    <Wrapper>
        <SearchBarForm />
        <RightWrapper>
            <BannerButton>광고 등록</BannerButton>
            <BannerButton>선택 항목 종료</BannerButton>
            <BannerInfoButton>총 광고 수 000개</BannerInfoButton>
        </RightWrapper>
    </Wrapper>
  )
}

export default TopBanner