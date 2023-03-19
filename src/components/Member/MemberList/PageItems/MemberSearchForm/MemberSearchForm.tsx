import React, { useRef, useEffect, useState } from "react";
import DateRangePickerForm from "../DateRangePicker/DateRangePickerForm";
import SearchBarForm from "components/Common/SearchBar/SearchBarForm";
import DropDownForm from "components/Common/DropDown/DropDownForm";

import { MemberListDropDownMap, MemberListSwitchDropDownMap } from "types/DropDownType";

import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { MemberAction, getMemberList } from "redux/modules/MemberSlice";

import { SearchBoxWrapper, SearchBox, RadioBtnWrapper, RadioBtnLabel, CheckBoxWrapper, CheckBoxLabel } from "./MemberSearch.styled";
import { Button } from "components/Member/styles/buttonStyles";

const roleOptions = [
    { value: "", name: "전체" },
    { value: "1", name: "일반" },
    { value: "2", name: "딜러" },
];

const levelOptions = [
    { value: "1", name: "브론즈" },
    { value: "2", name: "실버" },
    { value: "3", name: "골드" },
    { value: "4", name: "플레티넘" },
    { value: "5", name: "다이아" },
];

type searchDataInterface = {
    filter: string;
    keyword: string;
    allDate: boolean;
    startDate: Date;
    endDate: Date;
    role: string;
    level: string[];
    levelAllChecked: boolean;
};

const searchDataInitState: searchDataInterface = {
    filter: "",
    keyword: "",
    allDate: true,
    startDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    endDate: new Date(),
    role: "0",
    level: ["1", "2", "3", "4", "5"],
    levelAllChecked: true,
};

function MemberSearchForm() {
    const dispatch = useAppDispatch();
    const { filter, keyword, allDate, startDate, endDate, role, level, levelAllChecked } = useAppSelector((state) => state.MemberSlice);

    const [searchData, setSearchData] = useState<searchDataInterface>({
        filter: filter as string,
        keyword: keyword as string,
        allDate: allDate as boolean,
        startDate: startDate as Date,
        endDate: endDate as Date,
        role: role as string,
        level: level as string[],
        levelAllChecked: levelAllChecked as boolean,
    });

    useEffect(() => {
        if (searchData.keyword && SearchBarInputRef.current) {
            SearchBarInputRef.current.value = searchData.keyword as string;
        }
        if (searchData.filter && DropDownTitleRef.current) {
            DropDownTitleRef.current.textContent = MemberListSwitchDropDownMap[searchData.filter as string];
        }
    }, []);

    // DropDown이 눌릴 때 textContent 값 가져오기
    const DropDownTitleRef = useRef<HTMLSpanElement>(null);
    const DropDownOnClickHandler = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        let selectedFilter = MemberListDropDownMap[event.currentTarget.textContent as string];
        setSearchData({ ...searchData, filter: selectedFilter });
    };

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

    // Role 선택
    const roleRadioBtnClickHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchData({ ...searchData, role: event.currentTarget.value });
    };

    // Level 선택
    const levelAllCheckedClickHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let checked = event.currentTarget.checked;
        if (checked) {
            setSearchData({ ...searchData, levelAllChecked: checked, level: ["1", "2", "3", "4", "5"] });
        } else {
            setSearchData({ ...searchData, levelAllChecked: checked, level: [] });
        }
    };

    const levelCheckBoxClickHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let currentTarget = event.currentTarget.value;
        let newLevel: string[] = [...searchData.level];
        if (newLevel.indexOf(currentTarget) === -1) {
            newLevel.push(currentTarget);
            newLevel.sort();
        } else {
            newLevel = newLevel.filter((el) => el !== currentTarget);
        }
        if (newLevel.length === levelOptions.length) {
            setSearchData({ ...searchData, levelAllChecked: true, level: newLevel });
        } else if (newLevel.length === 0) {
            setSearchData({ ...searchData, levelAllChecked: false, level: newLevel });
        } else {
            setSearchData({ ...searchData, level: newLevel });
        }
    };

    // ref로 접근하여 버튼 눌렸을 때 ref 값 가져오기
    const SearchBarInputRef = useRef<HTMLInputElement>(null);
    const SearchBarInputClickHandler = () => {
        let inputKeyword = SearchBarInputRef.current?.value as string;
        setSearchData({ ...searchData, keyword: inputKeyword });
        dispatch(
            MemberAction.setMemberListSearchData({
                filter: searchData.filter as string,
                keyword: inputKeyword as string,
                allDate: searchData.allDate as boolean,
                startDate: searchData.startDate as Date,
                endDate: searchData.endDate as Date,
                role: searchData.role as string,
                level: searchData.level as string[],
                page: 1,
            })
        );
        dispatch(
            getMemberList({
                filter: searchData.filter as string,
                keyword: inputKeyword as string,
                allDate: searchData.allDate as boolean,
                startDate: searchData.startDate as Date,
                endDate: searchData.endDate as Date,
                role: searchData.role as string,
                level: searchData.level as string[],
                page: 1,
            })
        );
    };
    // 엔터키 입력시
    const SearchBarInputOnKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            SearchBarInputClickHandler();
        }
    };

    // 검색 초기화
    const resetOnClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setSearchData(searchDataInitState);
        if (SearchBarInputRef.current) {
            SearchBarInputRef.current.value = "";
        }
        if (DropDownTitleRef.current) {
            DropDownTitleRef.current.textContent = "전체"
        }
    };

    return (
        <SearchBoxWrapper>
            <SearchBox>
                <div className="element">
                    <div className="title">검색어</div>
                    <div className="content">
                        <DropDownForm category="member_list" LiOnClick={(event) => DropDownOnClickHandler(event)} titleRef={DropDownTitleRef} />
                        <SearchBarForm SearchBarInputRef={SearchBarInputRef} SearchBarOnClick={SearchBarInputClickHandler} SearchBarInputOnKeyDown={SearchBarInputOnKeyDownHandler} />
                    </div>
                </div>
                <div className="element">
                    <div className="title">가입일자</div>
                    <div className="content">
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px" }}>
                            <input type="checkbox" onChange={allDateOnClickHandler} checked={searchData.allDate} />
                            <span>전체</span>
                        </div>
                        <DateRangePickerForm startDate={searchData.startDate} setStartDate={setStartDate} endDate={searchData.endDate} setEndDate={setEndDate} disabled={searchData.allDate} />
                    </div>
                </div>
                <div className="element">
                    <div className="title">Role</div>
                    <div className="content">
                        <RadioBtnWrapper>
                            {roleOptions.map((option) => (
                                <RadioBtnLabel key={option.value}>
                                    <input type="radio" value={option.value} checked={option.value === searchData.role} onChange={roleRadioBtnClickHandler} />
                                    <span>{option.name}</span>
                                </RadioBtnLabel>
                            ))}
                        </RadioBtnWrapper>
                    </div>
                </div>
                <div className="element">
                    <div className="title">회원등급</div>
                    <div className="content">
                        <CheckBoxWrapper>
                            <CheckBoxLabel>
                                <input type="checkbox" checked={searchData.levelAllChecked} onChange={levelAllCheckedClickHandler} />
                                <span>전체</span>
                            </CheckBoxLabel>
                            {levelOptions.map((option) => (
                                <CheckBoxLabel key={option.value}>
                                    <input type="checkbox" value={option.value} checked={searchData.level.includes(option.value) === true} onChange={levelCheckBoxClickHandler} />
                                    <span>{option.name}</span>
                                </CheckBoxLabel>
                            ))}
                        </CheckBoxWrapper>
                    </div>
                </div>
                <div className="element" style={{ justifyContent: "center" }}>
                    <Button className="brown" onClick={SearchBarInputClickHandler} style={{ width: "120px", height: "44px" }}>
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

export default MemberSearchForm;
