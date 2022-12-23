import React from 'react'
import { TopWrapper, TopLeftWrapper, TopRightWrapper, TopHideButton, TotalTopButton } from "./CommunityTopBannerForm.styled";

import SearchBarForm from '../../../../Common/SearchBar/SearchBarForm';
import DropDownForm from '../../../../Common/DropDown/DropDownForm';

const CommunityTopBannerForm = () => {
    const isCountSeller = "00";
    return (
      <TopWrapper>
        <TopLeftWrapper>
          <DropDownForm category={"community_list"} />
          <SearchBarForm />
        </TopLeftWrapper>
        <TopRightWrapper>
          <TopHideButton>숨기기</TopHideButton>
          <TotalTopButton>{`총 게시물 수 0${isCountSeller}개`}</TotalTopButton>
        </TopRightWrapper>
      </TopWrapper>
    );
}

export default CommunityTopBannerForm;