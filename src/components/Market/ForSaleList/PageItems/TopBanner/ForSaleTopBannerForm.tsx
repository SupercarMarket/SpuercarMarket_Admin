import React from 'react'
import { TopWrapper, TopLeftWrapper, TopRightWrapper, TopHideButton, TotalTopButton } from "./ForSaleTopBannerForm.styled";

import SearchBarForm from '../../../../Common/SearchBar/SearchBarForm';
import DropDownForm from '../../../../Common/DropDown/DropDownForm';

const ForSaleTopBannerForm = () => {
    const isCountSeller = "00";
    return (
      <TopWrapper>
        <TopLeftWrapper>
          <DropDownForm category={"market_list"} />
          <SearchBarForm />
        </TopLeftWrapper>
        <TopRightWrapper>
          <TopHideButton>숨기기</TopHideButton>
          <TotalTopButton>{`총 매물 개수 0${isCountSeller}개`}</TotalTopButton>
        </TopRightWrapper>
      </TopWrapper>
    );
}

export default ForSaleTopBannerForm;