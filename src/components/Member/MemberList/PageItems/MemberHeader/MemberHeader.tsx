import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../../styles/buttonStyles";

import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { getMemberCountInfo } from "redux/modules/MemberSlice";

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 9px;
    padding: 0px;
    margin: 20px 0px;
    justify-content: right;
`;

type UserHeaderProps = {
    doCheckedBanHandler: React.MouseEventHandler<HTMLButtonElement>;
    userTotal: number;
    userBanned: number;
    userOut: number;
};

function MemberHeader({ doCheckedBanHandler }: UserHeaderProps) {
    const { userTotal, userBanned, userOut } = useAppSelector((state) => state.MemberSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getMemberCountInfo());
    }, []);

    const banClickHandler = () => {
        if (window.confirm("숨기기를 실행하시겠습니까?")) {
            alert("숨김 처리 되었습니다.");
        } else {
        }
    };

    return (
        <HeaderDiv>
            <Button onClick={doCheckedBanHandler}>회원 차단하기</Button>
            <Button disabled>총 회원 수 {userTotal}명</Button>
            <Button disabled>차단 {userBanned}명</Button>
            <Button disabled>탈퇴 {userOut}명</Button>
        </HeaderDiv>
    );
}

export default MemberHeader;
