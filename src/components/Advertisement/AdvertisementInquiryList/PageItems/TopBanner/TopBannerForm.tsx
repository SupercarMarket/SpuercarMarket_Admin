import React, {useEffect, useRef} from "react";
import {useAppDispatch, useAppSelector} from "store/rootReducer";

import {AdvertisementAction, getAdvertisementInquiryList,} from "redux/modules/AdvertisementSlice";

import {TopHideButton, TopLeftWrapper, TopRightWrapper, TopWrapper, TotalTopButton,} from "./TopBannerForm.styled";

import SearchBarForm from "../../../../Common/SearchBar/SearchBarForm";

const TopBannerForm = () => {
  let Likeyword = "";
  const SearchBarInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const { totalElements, keyword, inquiryList } = useAppSelector(
    (state) => state.AdvertisementSlice
  );

  useEffect(() => {
    if (keyword && SearchBarInputRef.current) {
      SearchBarInputRef.current.value = keyword as string;
    }

  }, []);


  // ref로 접근하여 버튼 눌렸을 때 ref 값 가져오기
  const SearchBarInputClickHandler = () => {
    Likeyword = SearchBarInputRef.current?.value as string;
    dispatch(
        AdvertisementAction.setAdvertisementListKeyword({ keyword: Likeyword })
    );
    if (!Likeyword) {
      alert("검색어를 입력하세요");
      return;
    }
    console.log("enter");
    dispatch(
        getAdvertisementInquiryList({
        keyword: Likeyword as string,
        page: 1,
      })
    );
  };
  // 엔터키 입력시
  const SearchBarInputOnKeyDownHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      SearchBarInputClickHandler();
    }
  };


  return (
    <TopWrapper>
      <TopLeftWrapper>
        <SearchBarForm
          SearchBarInputRef={SearchBarInputRef}
          SearchBarOnClick={SearchBarInputClickHandler}
          SearchBarInputOnKeyDown={SearchBarInputOnKeyDownHandler}
        />
      </TopLeftWrapper>
      <TopRightWrapper>
        <TopHideButton>선택 항목 종료하기</TopHideButton>
        <TotalTopButton>{`총 문의 수 ${String(
          totalElements?totalElements.toString():""
        ).padStart(3, "0")}개`}</TotalTopButton>
      </TopRightWrapper>
    </TopWrapper>
  );
};

export default TopBannerForm;
