import React, {useRef} from "react";
import {
    CommunityThead,
    CommunityTableHeader,
    CommunityCheckBoxWrapper,
    CommunityInputCheckBox,
    CommunityLabelCheckBox,
} from "./CommnunityMainTableHeaderForm.styled";
import SmallDropDownForm from "../../../../../Common/SmallDropDown/SmallDropDownForm";
import {CommunityAction} from "../../../../../../redux/modules/CommunitySlice";
import {useAppDispatch} from "../../../../../../store/rootReducer";

const CommunityMainTableHeaderForm = () => {
    const dispatch = useAppDispatch();
    const LiOnClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const clickedCategory = event.currentTarget.textContent as string;
        console.log(clickedCategory)
        // setCategory(clickedCategory);
        dispatch(CommunityAction.setCommunityCategory({clickedCategory}))
    };


    const ref = useRef<HTMLDivElement>(null);
    return (
        <CommunityThead>
            <tr>
                <CommunityTableHeader
                    rowSpan={2}
                    style={{height: "80px", width: "80px"}}
                >
                    <CommunityCheckBoxWrapper>
                        <CommunityInputCheckBox id="checkbox_header"/>
                        <CommunityLabelCheckBox htmlFor="checkbox_header"/>
                    </CommunityCheckBoxWrapper>
                </CommunityTableHeader>
                <CommunityTableHeader rowSpan={2}>번호</CommunityTableHeader>
                <CommunityTableHeader rowSpan={2}>
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <span style={{marginBottom: "8px"}}>카테고리</span>
                        <SmallDropDownForm
                            category="community_list_category"
                            titleRef={ref}
                            LiOnClick={(event)=>LiOnClick(event)}
                        />
                    </div>
                </CommunityTableHeader>
                <CommunityTableHeader rowSpan={2} style={{width: "560px"}}>
                    제목
                </CommunityTableHeader>
                <CommunityTableHeader>작성자 회원번호</CommunityTableHeader>
                <CommunityTableHeader>작성자 아이디</CommunityTableHeader>
                <CommunityTableHeader rowSpan={2}>등록 일자</CommunityTableHeader>
                <CommunityTableHeader rowSpan={2}>숨기기</CommunityTableHeader>
                <CommunityTableHeader rowSpan={2}>삭제하기</CommunityTableHeader>
            </tr>
            <tr>
                <CommunityTableHeader>작성자 이름</CommunityTableHeader>
                <CommunityTableHeader>작성자 닉네임</CommunityTableHeader>
            </tr>
        </CommunityThead>
    );
};

export default CommunityMainTableHeaderForm;
