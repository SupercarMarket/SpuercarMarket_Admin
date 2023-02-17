import React from 'react'
import DropDownForm from '../../../../Common/DropDown/DropDownForm';
import SearchBarForm from '../../../../Common/SearchBar/SearchBarForm';
import { TopBannerWrapper, TopBannerLeftWrapper, TopBannerButton } from "./TopBannerForm.styled";

const TopBannerForm = () => {
  return (
    <>
      <TopBannerWrapper>
        <TopBannerLeftWrapper>
          <DropDownForm category={"market_list"} />
          <SearchBarForm />
        </TopBannerLeftWrapper>
        <TopBannerButton>신규 등록 문의 000건</TopBannerButton>
      </TopBannerWrapper>
    </>
  );
}

export default TopBannerForm;