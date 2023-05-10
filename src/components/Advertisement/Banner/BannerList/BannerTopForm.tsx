import React, { useEffect, useRef } from "react";
import {
    TopWrapper,
    TopLeftWrapper,
    TopRightWrapper,
    TopProgressButton,
    TotalTopButton,
} from "./BannerTopForm.styled";
import DropDownForm from "../../../Common/DropDown/DropDownForm";
import SearchBarForm from "../../../Common/SearchBar/SearchBarForm";
import { useNavigate } from "react-router";
interface Props {
    checked: number[];
    setKeyword: (keyword: string) => void;
    deleteBanner: (v: number[]) => void;
}
const BannerTopForm = ({ checked, setKeyword, deleteBanner }: Props) => {
    const navigate = useNavigate();
    const SearchBarInputRef = useRef<HTMLInputElement>(null);

    const SearchBarInputClickHandler = () => {
        const keyword = SearchBarInputRef.current?.value as string;
        if (!keyword) {
            alert("검색어를 입력하세요");
            return;
        }
        setKeyword(keyword);
    };
    const SearchBarInputOnKeyDownHandler = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            SearchBarInputClickHandler();
        }
    };
    const deleteClickHandler = () => {
        console.log(checked);
        deleteBanner(checked);
        // if (checkList.length == 0) {
        //     return;
        // }
        // dispatch(setEtcInquiryProgress({checkList}));
    };
    const addClickHandler = () => {
        navigate("/banner/create");
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
                <TopProgressButton onClick={deleteClickHandler}>
                    선택 항목 삭제하기
                </TopProgressButton>
                <TopProgressButton onClick={addClickHandler}>
                    배너 등록
                </TopProgressButton>
            </TopRightWrapper>
        </TopWrapper>
    );
};

export default BannerTopForm;
