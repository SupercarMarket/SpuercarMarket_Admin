import React, { useRef } from "react";
import { MemberTableBody, MemberTableBodyRowSpan, MemberCheckBoxWrapper, MemberInputCheckBox, MemberLabelCheckBox, MemberTableBodyButton } from "./MemberTableBodyForm.styled";

import { MemberListPropsType } from "types/MemberList";
import { MemberAction } from "redux/modules/MemberSlice";
import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { useNavigate } from "react-router";

const classOptions: { [key: string]: string } = {
    "1": "브론즈",
    "2": "실버",
    "3": "골드",
    "4": "플레티넘",
    "5": "다이아",
};

const MemberTableBodyForm = ({ offset, postsPerPage, totalContentsCount }: MemberListPropsType) => {
    const inputCheckTypeRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { list, checkList } = useAppSelector((state) => state.MemberSlice);

    const inputCheckOnClickHandler = () => {
        console.log(inputCheckTypeRef.current?.checked);
    };

    // 항목 체크 박스 셋업
    const userCheckBoxClickHandler = (userSeq: number, isChecked: boolean) => {
        dispatch(MemberAction.setMemberListEachChecked({ userSeq, isChecked }));
    };

    const inputCheckOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        userCheckBoxClickHandler(parseInt(event.target.id), event.target.checked);
    };

    // 숨기기 버튼 동작
    const userHiddenButtonClickHandler = () => {};

    // 매물 디테일로 넘어가기
    const memberDetailOnClickHandler = (brdSeq: number) => {
        // navigate(`/salelist/${brdSeq}`);
    };

    return (
        <MemberTableBody key={`uuid`}>
            {list.slice(offset, offset + postsPerPage).map((user, index) => {
                return (
                    <React.Fragment key={user.userSeq}>
                        <tr>
                            <MemberTableBodyRowSpan rowSpan={2}>
                                <MemberCheckBoxWrapper>
                                    <MemberInputCheckBox
                                        id={user.userSeq.toString()}
                                        ref={inputCheckTypeRef}
                                        onClick={inputCheckOnClickHandler}
                                        onChange={(event) => {
                                            inputCheckOnChangeHandler(event);
                                        }}
                                        checked={checkList.includes(user.userSeq) ? true : false}
                                    />
                                    <MemberLabelCheckBox htmlFor={user.userSeq.toString()} />
                                </MemberCheckBoxWrapper>
                            </MemberTableBodyRowSpan>
                            <MemberTableBodyRowSpan rowSpan={2}>{String(user.userSeq.toString()).padStart(7, "0")}</MemberTableBodyRowSpan>
                            <MemberTableBodyRowSpan colSpan={2}>{user.userId}</MemberTableBodyRowSpan>
                            <MemberTableBodyRowSpan>{user.phone}</MemberTableBodyRowSpan>
                            <MemberTableBodyRowSpan rowSpan={2}>{user.signUpdate.split("T")[0]}</MemberTableBodyRowSpan>
                            <MemberTableBodyRowSpan rowSpan={2}>{user.userRating}</MemberTableBodyRowSpan>
                            <MemberTableBodyRowSpan rowSpan={2}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                                        {user.isDealer === true ? (
                                            <>
                                                딜러
                                                <MemberTableBodyButton id={user.userSeq.toString()}>정보</MemberTableBodyButton>
                                            </>
                                        ) : (
                                            <>일반</>
                                        )}
                                    </div>
                                </div>
                            </MemberTableBodyRowSpan>
                            <MemberTableBodyRowSpan>{user.postNumber}</MemberTableBodyRowSpan>
                            <MemberTableBodyRowSpan rowSpan={2}>
                                {user.isBanned ? <MemberTableBodyButton>차단 풀기</MemberTableBodyButton> : <MemberTableBodyButton>회원 차단</MemberTableBodyButton>}
                            </MemberTableBodyRowSpan>
                        </tr>
                        <tr>
                            <MemberTableBodyRowSpan style={{ cursor: "pointer" }}>{user.userName}</MemberTableBodyRowSpan>
                            <MemberTableBodyRowSpan style={{ cursor: "pointer" }}>{user.nickname}</MemberTableBodyRowSpan>
                            <MemberTableBodyRowSpan style={{ cursor: "pointer" }}>{user.email}</MemberTableBodyRowSpan>
                            <MemberTableBodyRowSpan style={{ cursor: "pointer" }}>{user.commentNumber}</MemberTableBodyRowSpan>
                        </tr>
                    </React.Fragment>
                );
            })}
        </MemberTableBody>
    );
};

export default MemberTableBodyForm;
