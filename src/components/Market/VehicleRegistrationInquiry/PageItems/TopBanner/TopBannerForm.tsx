import React, { useRef, useEffect } from 'react'
import DropDownForm from '../../../../Common/DropDown/DropDownForm';
import SearchBarForm from '../../../../Common/SearchBar/SearchBarForm';
import { TopBannerWrapper, TopBannerLeftWrapper, TopBannerButton } from "./TopBannerForm.styled";
import { useAppDispatch, useAppSelector } from '../../../../../store/rootReducer';
import { MarketListDropDownMap, MarketListSwitchDropDownMap } from '../../../../../types/DropDownType';
import { ForSaleListAction, getForSaleInquiryList } from '../../../../../redux/modules/ForSaleInquirySlice';

const TopBannerForm = () => {
  let LiFilter = '';
  let LiKeyword = '';
  const dispatch = useAppDispatch();
  const { totalCount, filter, keyword } = useAppSelector( state => state.ForSaleListSlice );
  const SearchBarInputRef = useRef<HTMLInputElement>( null );

  // 페이지 뒤로가기 시에 TopBanner 값을 유지하기 위해 사용
  useEffect(()=>{
    console.log( filter, keyword );
    if( keyword && SearchBarInputRef.current ){
      SearchBarInputRef.current.value = keyword as string;
    }
    if( filter && DropDownTitleRef.current ){
      DropDownTitleRef.current.textContent = MarketListSwitchDropDownMap[ filter as string ];
    }
  },[]);

  const LiOnClickHandler = ( event : React.MouseEvent<HTMLLIElement, MouseEvent> ) => {
    LiFilter = MarketListDropDownMap[ event.currentTarget.textContent as string];
    dispatch( ForSaleListAction.setForSaleListFilter( {filter : LiFilter}) );
  };

  const SearchBarInputOnClickHandler = () => {
    LiKeyword = SearchBarInputRef.current?.value as string;
      dispatch( ForSaleListAction.setForSaleListKeyword({keyword:LiKeyword}));
      if( !LiKeyword ){
          alert("검색어를 입력하세요");
          return;
      }
      dispatch( getForSaleInquiryList({ filter : filter as string, keyword : LiKeyword as string, page : 1 }) );
  }
  
  const SearchBarInputOnKeyDownHandler = ( event : React.KeyboardEvent<HTMLInputElement>) => {
    if( event.key === 'Enter' ){
      SearchBarInputOnClickHandler();
    }
  }

  const DropDownTitleRef = useRef<HTMLSpanElement>( null );


  return (
    <>
      <TopBannerWrapper>
        <TopBannerLeftWrapper>
          <DropDownForm category={"market_list"} LiOnClick={ event => LiOnClickHandler( event )} titleRef={DropDownTitleRef}/>
          <SearchBarForm
            SearchBarInputRef={SearchBarInputRef}
            SearchBarOnClick={() => SearchBarInputOnClickHandler()}
            SearchBarInputOnKeyDown={SearchBarInputOnKeyDownHandler}
          />
        </TopBannerLeftWrapper>
        <TopBannerButton totalCount={totalCount}>신규 등록 문의 {String( totalCount ).padStart( 3, '0')}건</TopBannerButton>
      </TopBannerWrapper>
    </>
  );
}

export default TopBannerForm;