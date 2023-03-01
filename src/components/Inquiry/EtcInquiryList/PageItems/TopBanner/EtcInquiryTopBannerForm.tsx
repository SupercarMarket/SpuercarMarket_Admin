import React, {useEffect, useRef} from "react";
import {TopWrapper, TopLeftWrapper, TopRightWrapper, TopProgressButton, TotalTopButton} from "./EtcInquiryTopBannerForm.styled"
import SearchBarForm from "../../../../Common/SearchBar/SearchBarForm";
import {EtcInquiryAction, getEtcInquiryList, setEtcInquiryProgress} from "../../../../../redux/modules/EtcInquirySlice";
import {useAppDispatch, useAppSelector} from "../../../../../store/rootReducer";
import {EtcInquiryListDropDownMap, EtcInquiryListSwitchDropDownMap} from "../../../../../types/DropDownType";
import DropDownForm from "../../../../Common/DropDown/DropDownForm";
const EtcInquiryTopBannerForm = () => {
    let Lifilter = '';
    let Likeyword = '';
    const dispatch = useAppDispatch();
    const { progressCount, filter, keyword, checkList } = useAppSelector( state => state.EtcInquirySlice );

    useEffect(()=>{
        if( keyword && SearchBarInputRef.current){
            SearchBarInputRef.current.value = keyword as string;
        }
        if( filter && DropDownTitleRef.current ){
            DropDownTitleRef.current.textContent = EtcInquiryListSwitchDropDownMap[filter as string ] ;
        }
    },[]);
    // DropDown이 눌릴 때 textContent 값 가져오기
    const LiOnClickHandler = ( event : React.MouseEvent<HTMLLIElement, MouseEvent> ) => {
        Lifilter = EtcInquiryListDropDownMap[ event.currentTarget.textContent as string];
        dispatch( EtcInquiryAction.setEtcInquiryListFilter( {filter : Lifilter}) );
    };

    const SearchBarInputRef = useRef<HTMLInputElement>( null );
    const DropDownTitleRef = useRef<HTMLSpanElement>( null );
    // ref로 접근하여 버튼 눌렸을 때 ref 값 가져오기
    const SearchBarInputClickHandler = () => {
        Likeyword = SearchBarInputRef.current?.value as string;
        dispatch( EtcInquiryAction.setEtcInquiryListKeyword({keyword:Likeyword}));
        if( !Likeyword ){
            alert("검색어를 입력하세요");
            return;
        }
        dispatch( getEtcInquiryList({ filter : filter as string, keyword : Likeyword as string, page : 1 }) );
    }
    // 엔터키 입력시
    const SearchBarInputOnKeyDownHandler = ( event : React.KeyboardEvent<HTMLInputElement> ) => {
        if( event.key === 'Enter' ){
            SearchBarInputClickHandler();
        }
    };
    const progressClickHandler = () => {
        if (checkList.length == 0) {
            return;
        }
        dispatch(setEtcInquiryProgress({checkList}));
    };
    return (
      <TopWrapper>
          <TopLeftWrapper>
              <DropDownForm
                  category={"etcInquiry_list"}
                  LiOnClick={(event) => LiOnClickHandler(event)}
                  titleRef={DropDownTitleRef}
              />
              <SearchBarForm
                  SearchBarInputRef={SearchBarInputRef}
                  SearchBarOnClick={SearchBarInputClickHandler}
                  SearchBarInputOnKeyDown={SearchBarInputOnKeyDownHandler}
              />
          </TopLeftWrapper>
          <TopRightWrapper>
            <TopProgressButton onClick={progressClickHandler}>선택 항목 완료</TopProgressButton>
              <TotalTopButton progressCount={progressCount}>{`미완료 문의 ${ String(progressCount.toString()).padStart(3, '0')}개`}</TotalTopButton>
          </TopRightWrapper>

      </TopWrapper>
    );
}

export default EtcInquiryTopBannerForm;