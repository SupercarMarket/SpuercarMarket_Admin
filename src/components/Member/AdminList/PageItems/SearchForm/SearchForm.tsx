import React, { useEffect, useRef, useState } from "react";
import { TopWrapper, TopLeftWrapper, TopRightWrapper, TotalTopButton } from "./SearchForm.styled";
import SearchBarForm from "components/Common/SearchBar/SearchBarForm";
import { AdminAction, getAdminList } from "redux/modules/AdminSlice";
import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { AdminListDropDownMap, AdminListSwitchDropDownMap } from "types/DropDownType";
import DropDownForm from "components/Common/DropDown/DropDownForm";
import NewAdminModalForm from "../NewAdminModal/NewAdminModalForm";

type searchDataInterface = { filter: string; keyword: string };

function SearchForm() {
    const dispatch = useAppDispatch();
    const { filter, keyword, totalCount } = useAppSelector((state) => state.AdminSlice);

    const [searchData, setSearchData] = useState<searchDataInterface>({
        filter: filter,
        keyword: keyword,
    });

    useEffect(() => {
        if (keyword && SearchBarInputRef.current) {
            SearchBarInputRef.current.value = keyword as string;
        }
        if (filter && DropDownTitleRef.current) {
            DropDownTitleRef.current.textContent = AdminListSwitchDropDownMap[filter as string];
        }
    }, []);

    // DropDown이 눌릴 때 textContent 값 가져오기
    const DropDownTitleRef = useRef<HTMLSpanElement>(null);
    const LiOnClickHandler = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        let selectedfilter = AdminListDropDownMap[event.currentTarget.textContent as string];
        setSearchData({ ...searchData, filter: selectedfilter });
    };

    // ref로 접근하여 버튼 눌렸을 때 ref 값 가져오기
    const SearchBarInputRef = useRef<HTMLInputElement>(null);
    const SearchBarInputClickHandler = () => {
        let inputKeyword = SearchBarInputRef.current?.value as string;
        if (!inputKeyword) {
            alert("검색어를 입력하세요");
            return;
        }
        setSearchData({ ...searchData, keyword: inputKeyword });
        dispatch(
            AdminAction.setAdminListSearchData({
                filter: searchData.filter as string,
                keyword: inputKeyword as string,
                page: 1,
            })
        );
        dispatch(getAdminList({ filter: filter as string, keyword: inputKeyword as string, page: 1 }));
    };

    // 엔터키 입력시
    const SearchBarInputOnKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            SearchBarInputClickHandler();
        }
    };

    return (
        <TopWrapper>
            <TopLeftWrapper>
                <DropDownForm category="member_admin" LiOnClick={(event) => LiOnClickHandler(event)} titleRef={DropDownTitleRef} />
                <SearchBarForm SearchBarInputRef={SearchBarInputRef} SearchBarOnClick={SearchBarInputClickHandler} SearchBarInputOnKeyDown={SearchBarInputOnKeyDownHandler} />
            </TopLeftWrapper>
            <TopRightWrapper>
                <NewAdminModalForm />
                <TotalTopButton totalCount={totalCount}>{`등록된 관리자 수 ${String(totalCount.toString()).padStart(3, "0")}명`}</TotalTopButton>
            </TopRightWrapper>
        </TopWrapper>
    );
}

export default SearchForm;
