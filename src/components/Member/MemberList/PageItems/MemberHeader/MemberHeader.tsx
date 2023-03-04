import React from "react";
import styled from "styled-components";
import { Button } from "../../../styles/buttonStyles";

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
  doCheckedBan: React.MouseEventHandler<HTMLButtonElement>;
  userTotal: number;
  userBanned: number;
  userOut: number;
};

function MemberHeader({ doCheckedBan, userTotal, userBanned, userOut }: UserHeaderProps) {
  return (
    <HeaderDiv>
      <Button onClick={doCheckedBan}>회원 차단하기</Button>
      <Button disabled>총 회원 수 {userTotal}명</Button>
      <Button disabled>차단 {userBanned}명</Button>
      <Button disabled>탈퇴 {userOut}명</Button>
    </HeaderDiv>
  );
}

export default MemberHeader;
