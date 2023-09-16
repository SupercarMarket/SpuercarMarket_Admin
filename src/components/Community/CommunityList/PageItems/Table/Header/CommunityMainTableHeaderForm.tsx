import React, {useRef} from "react";
import {
    CommunityThead,
    CommunityTableHeader,
    CommunityCheckBoxWrapper,
    CommunityInputCheckBox,
    CommunityLabelCheckBox,
} from "./CommnunityMainTableHeaderForm.styled";
import {CommunityAction} from "../../../../../../redux/modules/CommunitySlice";
import {useAppDispatch, useAppSelector} from "../../../../../../store/rootReducer";
import CommunityTableHeaderDropDownForm from "./CommunityTableHeaderDropDownForm";
import { CommunityCategoryDropDownMap } from "types/DropDownType";
import {AdvertisementAction} from "../../../../../../redux/modules/AdvertisementSlice";
import {
    LabelCheckBox
} from "../../../../../Advertisement/AdvertisementList/PageItems/Table/Header/TableHeaderForm.styled";

const CommunityMainTableHeaderForm = () => {
    const { allChecked } = useAppSelector((state) => state.CommunitySlice);
    const dispatch = useAppDispatch();
    const allCheckBoxClickHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        dispatch(
            CommunityAction.setCommunityListAllChecked({
                allChecked: event.target.checked,
            })
        );
    };
    const LiOnClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        dispatch(CommunityAction.setCommunityCategory({clickedCategory : CommunityCategoryDropDownMap[
                event.currentTarget.textContent as string
            ] as string}))
    };

    const ref = useRef<HTMLSpanElement>(null);
    return (
        <CommunityThead>
            <tr>
                <CommunityTableHeader
                    rowSpan={2}
                    style={{height: "80px", width: "80px"}}
                >
                    <CommunityCheckBoxWrapper>
                        <CommunityInputCheckBox
                            id="checkbox_header"
                            onChange={(event) => allCheckBoxClickHandler(event)}
                            checked={allChecked}
                        />
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
                        <CommunityTableHeaderDropDownForm
                            category={"community_list_category"}
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
