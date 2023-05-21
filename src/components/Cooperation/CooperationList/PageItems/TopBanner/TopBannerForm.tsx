import React, { useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/rootReducer";

import {
  CooperationAction,
  getCooperationList,
} from "redux/modules/CooperationSlice";
import {
  CooperationListDropDownMap,
  CooperationListSwitchDropDownMap,
} from "types/DropDownType";

import {
  TopWrapper,
  TopLeftWrapper,
  TopRightWrapper,
  TopHideButton,
  TotalTopButton,
} from "./TopBannerForm.styled";

import SearchBarForm from "../../../../Common/SearchBar/SearchBarForm";
import DropDownForm from "../../../../Common/DropDown/DropDownForm";
import ClientAxios from "../../../../../utils/api/AxiosAPI/ClientAxios";

const TopBannerForm = () => {
  let Lifilter = "";
  let Likeyword = "";
  const DropDownTitleRef = useRef<HTMLSpanElement>(null);
  const SearchBarInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const { totalElements, filter, keyword, checkList } = useAppSelector(
    (state) => state.CooperationSlice
  );

  useEffect(() => {
    if (keyword && SearchBarInputRef.current) {
      SearchBarInputRef.current.value = keyword as string;
    }
    if (filter && DropDownTitleRef.current) {
      DropDownTitleRef.current.textContent =
        CooperationListSwitchDropDownMap[filter as string];
    }
  }, []);

  // DropDown이 눌릴 때 textContent 값 가져오기
  const LiOnClickHandler = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    Lifilter =
      CooperationListDropDownMap[event.currentTarget.textContent as string];
    dispatch(CooperationAction.setCooperationListFilter({ filter: Lifilter }));
  };

  // ref로 접근하여 버튼 눌렸을 때 ref 값 가져오기
  const SearchBarInputClickHandler = () => {
    Likeyword = SearchBarInputRef.current?.value as string;
    dispatch(
      CooperationAction.setCooperationListKeyword({ keyword: Likeyword })
    );
    if (!Likeyword) {
      alert("검색어를 입력하세요");
      return;
    }
    console.log("enter");
    dispatch(
      getCooperationList({
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

  //숨기기 / 숨기기 취소
  const hidePartnershipHandler = async () => {
    await ClientAxios.post(`/partnerships/hide`, checkList)
      .then((response) => {
        if (response.status === 200) {
          alert("[완료]");
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <TopWrapper>
      <TopLeftWrapper>
        <DropDownForm
          category={"cooperation_list"}
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
        <TopHideButton onClick={hidePartnershipHandler}>
          선택 항목 숨기기
        </TopHideButton>
        <TotalTopButton>{`총 업체 수 ${String(
          totalElements.toString()
        ).padStart(3, "0")}개`}</TotalTopButton>
      </TopRightWrapper>
    </TopWrapper>
  );
};

export default TopBannerForm;
