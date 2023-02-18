import React, { useRef } from 'react'
import DropDownForm from '../../../../Common/DropDown/DropDownForm';
import SearchBarForm from '../../../../Common/SearchBar/SearchBarForm';
import { TopBannerWrapper, TopBannerLeftWrapper, TopBannerButton } from "./TopBannerForm.styled";

const TopBannerForm = () => {
  const SearchBarInputRef = useRef<HTMLInputElement>( null );

  const SearchBarInputOnClickHandler = () => {
    console.log( SearchBarInputRef.current?.value );
  }
  
  const SearchBarInputOnKeyDownHandler = ( event : React.KeyboardEvent<HTMLInputElement>) => {
    console.log( event.key );
  }

  return (
    <>
      <TopBannerWrapper>
        <TopBannerLeftWrapper>
          <DropDownForm category={"market_list"} LiOnClick={() => {}} />
          <SearchBarForm
            SearchBarInputRef={SearchBarInputRef}
            SearchBarOnClick={() => SearchBarInputOnClickHandler()}
            SearchBarInputOnKeyDown={SearchBarInputOnKeyDownHandler}
          />
        </TopBannerLeftWrapper>
        <TopBannerButton>신규 등록 문의 000건</TopBannerButton>
      </TopBannerWrapper>
    </>
  );
}

export default TopBannerForm;