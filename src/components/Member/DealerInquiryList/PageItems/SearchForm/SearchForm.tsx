import React, { useEffect, useRef, useState } from "react";
import { TopWrapper, TopLeftWrapper, TopRightWrapper, TotalTopButton } from "./SearchForm.styled";
import SearchBarForm from "components/Common/SearchBar/SearchBarForm";
import { DealerInquiryAction, getDealerInquiryList } from "redux/modules/DealerInquirySlice";
import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { DealerInquiryListDropDownMap, DealerInquiryListSwitchDropDownMap } from "types/DropDownType";
import DropDownForm from "components/Common/DropDown/DropDownForm";

type searchDataInterface = { filter: string; keyword: string };

function SearchForm() {
    const dispatch = useAppDispatch();
    const { filter, keyword, totalCount } = useAppSelector((state) => state.DealerInquirySlice);

    const [searchData, setSearchData] = useState<searchDataInterface>({
        filter: filter,
        keyword: keyword,
    });

    useEffect(() => {
        if (keyword && SearchBarInputRef.current) {
            SearchBarInputRef.current.value = keyword as string;
        }
        if (filter && DropDownTitleRef.current) {
            DropDownTitleRef.current.textContent = DealerInquiryListSwitchDropDownMap[filter as string];
        }
    }, []);

    // DropDown이 눌릴 때 textContent 값 가져오기
    const DropDownTitleRef = useRef<HTMLSpanElement>(null);
    const LiOnClickHandler = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        let selectedfilter = DealerInquiryListDropDownMap[event.currentTarget.textContent as string];
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
            DealerInquiryAction.setDealerInquiryListSearchData({
                filter: searchData.filter as string,
                keyword: inputKeyword as string,
                page: 1,
            })
        );
        dispatch(getDealerInquiryList({ filter: filter as string, keyword: inputKeyword as string, page: 1 }));
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
                <DropDownForm category="member_dealer" LiOnClick={(event) => LiOnClickHandler(event)} titleRef={DropDownTitleRef} />
                <SearchBarForm SearchBarInputRef={SearchBarInputRef} SearchBarOnClick={SearchBarInputClickHandler} SearchBarInputOnKeyDown={SearchBarInputOnKeyDownHandler} />
            </TopLeftWrapper>
            <TopRightWrapper>
                <TotalTopButton totalCount={totalCount}>{`신규 등록 문의 ${String(totalCount.toString()).padStart(3, "0")}개`}</TotalTopButton>
            </TopRightWrapper>
        </TopWrapper>
    );
}

export default SearchForm;
