import React, { useRef, useEffect } from "react";
import {
  TopWrapper,
  TopLeftWrapper,
  TopRightWrapper,
  TopHideButton,
  TotalTopButton,
} from "./ForSaleTopBannerForm.styled";

import SearchBarForm from "../../../../Common/SearchBar/SearchBarForm";
import DropDownForm from "../../../../Common/DropDown/DropDownForm";

import {
  MarketListDropDownMap,
  MarketListSwitchDropDownMap,
} from "../../../../../types/DropDownType";

import {
  MarketAction,
  getMarketList,
  hideMarketList,
} from "../../../../../redux/modules/MarketSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../store/rootReducer";
import ClientAxios from "../../../../../utils/api/AxiosAPI/ClientAxios";

const ForSaleTopBannerForm = () => {
  let Lifilter = "";
  let Likeyword = "";
  const dispatch = useAppDispatch();
  const { totalCount, filter, keyword, checkList } = useAppSelector(
    (state) => state.MarketSlice
  );

  useEffect(() => {
    if (keyword && SearchBarInputRef.current) {
      SearchBarInputRef.current.value = keyword as string;
    }
    if (filter && DropDownTitleRef.current) {
      DropDownTitleRef.current.textContent =
        MarketListSwitchDropDownMap[filter as string];
    }
  }, []);

  // DropDown이 눌릴 때 textContent 값 가져오기
  const LiOnClickHandler = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    Lifilter = MarketListDropDownMap[event.currentTarget.textContent as string];
    dispatch(MarketAction.setMarketListFilter({ filter: Lifilter }));
  };

  const SearchBarInputRef = useRef<HTMLInputElement>(null);
  // ref로 접근하여 버튼 눌렸을 때 ref 값 가져오기
  const SearchBarInputClickHandler = () => {
    Likeyword = SearchBarInputRef.current?.value as string;
    dispatch(MarketAction.setMarketListKeyword({ keyword: Likeyword }));
    if (!Likeyword) {
      alert("검색어를 입력하세요");
      return;
    }
    dispatch(
      getMarketList({
        filter: filter as string,
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

  const hideClickHandler = () => {
    if (window.confirm("숨기기를 실행하시겠습니까?")) {
      dispatch(hideMarketList(checkList));
    } else {
    }
  };

  const deleteClickHandler = async () => {
    if (window.confirm("삭제하시겠습니까?")) {
      await ClientAxios.post(`/product/delete/all`, checkList)
        .then((response) => {
          if (response.status === 200) {
            alert("[삭제 완료]");
            // eslint-disable-next-line no-restricted-globals
            location.reload();
          }
        })
        .catch((error) => {
          alert(error);
        });
    } else {
    }
  };

  const DropDownTitleRef = useRef<HTMLSpanElement>(null);

  return (
    <TopWrapper>
      <TopLeftWrapper>
        <DropDownForm
          category={"market_list"}
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
        <TopHideButton onClick={hideClickHandler}>숨기기</TopHideButton>
        <TopHideButton onClick={deleteClickHandler}>삭제하기</TopHideButton>
        <TotalTopButton totalCount={totalCount}>{`총 매물 개수 ${String(
          totalCount.toString()
        ).padStart(3, "0")}개`}</TotalTopButton>
      </TopRightWrapper>
    </TopWrapper>
  );
};

export default ForSaleTopBannerForm;
