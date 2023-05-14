import React, {useEffect, useRef, useState} from "react";

import {CommunityAction, setCommunityHideCancel, setCommunityHide, deleteCommunity} from "redux/modules/CommunitySlice";
import {useAppDispatch, useAppSelector} from "store/rootReducer";
import {useNavigate} from "react-router";
import {
    CommunityTbody,
    CommunityTableContent,
    CommunityButton,
    CommunityTableBodyClamp,
    CommunityCheckBoxWrapper,
    CommunityInputCheckBox,
    CommunityLabelCheckBox,
} from "./CommunityMainTableBodyForm.styled";

import {CommunityPropsType} from "../../../../../../types/CommunityType";

const CommunityMainTableBodyForm = ({
                                        offset,
                                        postsPerPage,
                                        totalContentsCount,
                                    }: CommunityPropsType) => {
    const inputCheckTypeRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {list} = useAppSelector((state) => state.CommunitySlice);

    // 항목 체크 박스 셋업
    const userCheckBoxClickHandler = (brdSeq: number, isChecked: boolean) => {
        dispatch(
            CommunityAction.setCommunityListEachChecked({brdSeq, isChecked})
        );
    };

    const inputCheckOnClickHandler = () => {
        console.log(inputCheckTypeRef.current?.checked);
    };

    const hideOnClickHandler = (id: number, isHide: boolean) => {
        if (isHide) {
            dispatch(
                setCommunityHideCancel([{id}])
            )
        } else {
            dispatch(
                setCommunityHide([{id}])
            )
        }
    };

    const deleteOnClickHandler = (id: number) => {
        dispatch(
            deleteCommunity({id})
        )
    };

    const inputCheckOnChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        userCheckBoxClickHandler(parseInt(event.target.id), event.target.checked);
    };

    // 제휴업체 디테일로 넘어가기
    const cooperationDetailOnClickHandler = (brdSeq: number) => {
        navigate(`/community/${brdSeq}`);
    };
    // console.log("확인중 : " + srnNum);

    return (
        <CommunityTbody>
            {list
                .map((data, index) => {
                    return (
                        <React.Fragment key={index}>
                            <tr>
                                <CommunityTableContent rowSpan={2}>
                                    <CommunityCheckBoxWrapper>
                                        <CommunityInputCheckBox id="checkbox_body"/>
                                        <CommunityLabelCheckBox htmlFor="checkbox_body"/>
                                    </CommunityCheckBoxWrapper>
                                </CommunityTableContent>
                                <CommunityTableContent rowSpan={2}>
                                    {data.id}
                                </CommunityTableContent>
                                <CommunityTableContent rowSpan={2}>
                                    {data.category}
                                </CommunityTableContent>
                                <CommunityTableContent
                                    rowSpan={2}
                                    style={{textAlign: "left", padding: "19px 16px"}}
                                >
                                    <CommunityTableBodyClamp>
                                        {data.title}
                                    </CommunityTableBodyClamp>
                                </CommunityTableContent>
                                <CommunityTableContent>{data.user.id}</CommunityTableContent>
                                <CommunityTableContent>{data.user.userId}</CommunityTableContent>
                                <CommunityTableContent rowSpan={2}>
                                    {data.createdDate.split("T")[0]}
                                </CommunityTableContent>
                                <CommunityTableContent rowSpan={2}>
                                    <CommunityButton
                                        onClick={() => hideOnClickHandler(data.id, data.isHide)}>{data.isHide ? "숨기기 취소" : "숨기기"}</CommunityButton>
                                </CommunityTableContent>
                                <CommunityTableContent rowSpan={2}>
                                    <CommunityButton
                                        onClick={() => deleteOnClickHandler(data.id)}>삭제하기</CommunityButton>
                                </CommunityTableContent>
                            </tr>
                            <tr>
                                <CommunityTableContent>{data.user.name}</CommunityTableContent>
                                <CommunityTableContent>
                                    {data.user.nickname}
                                </CommunityTableContent>
                            </tr>
                        </React.Fragment>
                    );
                })}
            {/* <tr>
        <CommunityTableContent rowSpan={2}>
          <CommunityCheckBoxWrapper>
            <CommunityInputCheckBox id="checkbox_body" />
            <CommunityLabelCheckBox htmlFor="checkbox_body" />
          </CommunityCheckBoxWrapper>
        </CommunityTableContent>
        <CommunityTableContent rowSpan={2}>0000000</CommunityTableContent>
        <CommunityTableContent rowSpan={2}>내 차 자랑</CommunityTableContent>
        <CommunityTableContent rowSpan={2} style={{ textAlign:"left", padding:"19px 16px"}}>
          <CommunityTableBodyClamp>
            제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
          </CommunityTableBodyClamp>
        </CommunityTableContent>
        <CommunityTableContent>0000000</CommunityTableContent>
        <CommunityTableContent>abcdegf</CommunityTableContent>
        <CommunityTableContent rowSpan={2}>2022-12-23</CommunityTableContent>
        <CommunityTableContent rowSpan={2}>
          <CommunityButton>숨기기</CommunityButton>
        </CommunityTableContent>
      </tr>
      <tr>
        <CommunityTableContent>작성자</CommunityTableContent>
        <CommunityTableContent>슈퍼카마켓슈퍼카마켓</CommunityTableContent>
      </tr> */}
        </CommunityTbody>
    );
};

export default CommunityMainTableBodyForm;
