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
  registerDealer: React.MouseEventHandler<HTMLButtonElement>;
  registerRequest: number;
};

function UserHeader({ registerDealer, registerRequest }: UserHeaderProps) {
  return (
    <HeaderDiv>
      <Button onClick={registerDealer}>딜러 등록</Button>
      <Button disabled>신규 등록 문의 {registerRequest}건</Button>
    </HeaderDiv>
  );
}

export default UserHeader;
