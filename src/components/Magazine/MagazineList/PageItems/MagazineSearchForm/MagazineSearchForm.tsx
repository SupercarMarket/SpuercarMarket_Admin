import React, { useRef, useEffect, useState } from "react";
import DateRangePickerForm from "../DateRangePicker/DateRangePickerForm";
import SearchBarForm from "components/Common/SearchBar/SearchBarForm";
import DropDownForm from "components/Common/DropDown/DropDownForm";

import { useAppDispatch, useAppSelector } from "store/rootReducer";

import { SearchBoxWrapper, SearchBox, RadioBtnWrapper, RadioBtnLabel, CheckBoxWrapper, CheckBoxLabel } from "./MagazineSearch.styled";
import { Button } from "components/Magazine/styles/buttonStyles";
import { getMagazineList, MagazineListAction } from "redux/modules/MagazineListSlice";

type searchDataInterface = {
    keywordAll: string;
    keywordTitle: string;
    allDate: boolean;
    startDate: Date;
    endDate: Date;
};

const searchDataInitState: searchDataInterface = {
    keywordAll: "",
    keywordTitle: "",
    allDate: true,
    startDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    endDate: new Date(),
};

function MagazineSearchForm() {
    const dispatch = useAppDispatch();
    const { keywordAll, keywordTitle, allDate, startDate, endDate } = useAppSelector((state) => state.MagazineListSlice);

    const [searchData, setSearchData] = useState<searchDataInterface>({
        keywordAll: keywordAll as string,
        keywordTitle: keywordTitle as string,
        allDate: allDate as boolean,
        startDate: startDate as Date,
        endDate: endDate as Date,
    });

    useEffect(() => {
        if (searchData.keywordAll && SearchBarInputRefAll.current) {
            SearchBarInputRefAll.current.value = searchData.keywordAll as string;
        }
        if (searchData.keywordTitle && SearchBarInputRefTitle.current) {
            SearchBarInputRefTitle.current.value = searchData.keywordTitle as string;
        }
    }, []);

    // 가입일자 전체 여부 선택
    const allDateOnClickHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchData({ ...searchData, allDate: event.currentTarget.checked });
    };

    // 가입일자 지정 함수
    const setStartDate = (date: Date) => {
        setSearchData({ ...searchData, startDate: date });
    };
    const setEndDate = (date: Date) => {
        setSearchData({ ...searchData, endDate: date });
    };

    // ref로 접근하여 버튼 눌렸을 때 ref 값 가져오기
    const SearchBarInputRefAll = useRef<HTMLInputElement>(null);
    const SearchBarInputRefTitle = useRef<HTMLInputElement>(null);
    const SearchButtonOnClickHandler = () => {
        let inputKeywordAll = SearchBarInputRefAll.current?.value as string;
        let inputKeywordTitle = SearchBarInputRefTitle.current?.value as string;
        setSearchData({ ...searchData, keywordAll: inputKeywordAll, keywordTitle: inputKeywordTitle });
        dispatch(
            MagazineListAction.setMagazineListSearchData({
                keywordAll: inputKeywordAll as string,
                keywordTitle: inputKeywordTitle as string,
                allDate: searchData.allDate as boolean,
                startDate: searchData.startDate as Date,
                endDate: searchData.endDate as Date,
                page: 1,
            })
        );
        dispatch(
            getMagazineList({
                keywordAll: inputKeywordAll as string,
                keywordTitle: inputKeywordTitle as string,
                allDate: searchData.allDate as boolean,
                startDate: searchData.startDate as Date,
                endDate: searchData.endDate as Date,
                page: 1,
            })
        );
    };
    // 엔터키 입력시
    const SearchBarInputOnKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            SearchButtonOnClickHandler();
        }
    };

    // 검색 초기화
    const resetOnClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setSearchData(searchDataInitState);
        if (SearchBarInputRefAll.current) {
            SearchBarInputRefAll.current.value = "";
        }
        if (SearchBarInputRefTitle.current) {
            SearchBarInputRefTitle.current.value = "";
        }
    };

    return (
        <SearchBoxWrapper>
            <SearchBox>
                <div className="element">
                    <div className="title">검색어</div>
                    <div className="content">
                        <span>전체</span>
                        <SearchBarForm SearchBarInputRef={SearchBarInputRefAll} SearchBarOnClick={SearchButtonOnClickHandler} SearchBarInputOnKeyDown={SearchBarInputOnKeyDownHandler} />
                        <span>제목</span>
                        <SearchBarForm SearchBarInputRef={SearchBarInputRefTitle} SearchBarOnClick={SearchButtonOnClickHandler} SearchBarInputOnKeyDown={SearchBarInputOnKeyDownHandler} />
                    </div>
                </div>
                <div className="element">
                    <div className="title">등록 일자</div>
                    <div className="content">
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px" }}>
                            <input type="checkbox" onChange={allDateOnClickHandler} checked={searchData.allDate} />
                            <span>전체</span>
                        </div>
                        <DateRangePickerForm startDate={searchData.startDate} setStartDate={setStartDate} endDate={searchData.endDate} setEndDate={setEndDate} disabled={searchData.allDate} />
                    </div>
                </div>
                <div className="element" style={{ justifyContent: "center" }}>
                    <Button className="brown" onClick={SearchButtonOnClickHandler} style={{ width: "120px", height: "44px" }}>
                        검색
                    </Button>
                    <Button type="reset" onClick={resetOnClickHandler} style={{ width: "120px", height: "44px" }}>
                        초기화
                    </Button>
                </div>
            </SearchBox>
        </SearchBoxWrapper>
    );
}

export default MagazineSearchForm;
