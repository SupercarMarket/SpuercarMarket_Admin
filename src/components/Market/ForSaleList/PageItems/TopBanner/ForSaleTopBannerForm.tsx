import React, { useRef } from 'react'
import { TopWrapper, TopLeftWrapper, TopRightWrapper, TopHideButton, TotalTopButton } from "./ForSaleTopBannerForm.styled";

import SearchBarForm from '../../../../Common/SearchBar/SearchBarForm';
import DropDownForm from '../../../../Common/DropDown/DropDownForm';

import { MarketListDropDownMap } from "../../../../../types/DropDownType";

const ForSaleTopBannerForm = () => {
    const isCountSeller = "00";
    let filter = '';
    let keyword = '';
    // DropDown이 눌릴 때 textContent 값 가져오기
    const LiOnClickHandler = ( event : React.MouseEvent<HTMLLIElement, MouseEvent> ) => {
      console.log(MarketListDropDownMap[ event.currentTarget.textContent as string]);
      filter = MarketListDropDownMap[ event.currentTarget.textContent as string];
    };

    const SearchBarInputRef = useRef<HTMLInputElement>( null );
    // ref로 접근하여 버튼 눌렸을 때 ref 값 가져오기
    const SearchBarInputClickHandler = () => {
      console.log( SearchBarInputRef.current?.value );
      keyword = SearchBarInputRef.current?.value as string;
    }

    const SearchBarInputOnKeyDownHandler = ( event : React.KeyboardEvent<HTMLInputElement> ) => {
      if( event.key === 'Enter' ){
        SearchBarInputClickHandler();
      }
    };

    return (
      <TopWrapper>
        <TopLeftWrapper>
          <DropDownForm
            category={"market_list"}
            LiOnClick={(event) => LiOnClickHandler(event)}
          />
          <SearchBarForm
            SearchBarInputRef={SearchBarInputRef}
            SearchBarOnClick={SearchBarInputClickHandler}
            SearchBarInputOnKeyDown={SearchBarInputOnKeyDownHandler}
          />
        </TopLeftWrapper>
        <TopRightWrapper>
          <TopHideButton>숨기기</TopHideButton>
          <TopHideButton>삭제하기</TopHideButton>
          <TotalTopButton>{`총 매물 개수 0${isCountSeller}개`}</TotalTopButton>
        </TopRightWrapper>
      </TopWrapper>
    );
}

export default ForSaleTopBannerForm;