import React from "react";
import styled from "styled-components";
import { Button } from "../../../styles/buttonStyles";
import NewAdminModal from "../NewAdminModal/NewAdminModal";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;
  padding: 0px;
  margin: 20px 0px;
  justify-content: right;
`;

function AdminHeader() {
  return (
    <HeaderDiv>
      <NewAdminModal />
      <Button disabled>등록된 관리자 000명</Button>
    </HeaderDiv>
  );
}

export default AdminHeader;
