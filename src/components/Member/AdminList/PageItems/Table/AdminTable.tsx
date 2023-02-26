import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../styles/buttonStyles";
import { Admin } from "types/MemberType";
import AdminModifyModal from "../AdminModifyModal/AdminModifyModal";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  thead {
    background: #f7f7f8;
    border-radius: 4px;
  }
  tbody {
    background: #ffffff;
    border-radius: 4px;
  }
  td {
    height: 40px;
    border: 1px solid lightgray;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #1e1e20;
    text-align: center;
    vertical-align: middle;
  }

  img {
    width: 100px;
  }
`;

type tableProps = {
  adminList: Admin[];
};

function AdminTable({ adminList }: tableProps) {
  return (
    <div className="table">
      <Table>
        <thead>
          <tr>
            <td style={{ width: "12.5%" }}>프로필 사진</td>
            <td style={{ width: "12.5%" }}>닉네임</td>
            <td style={{ width: "12.5%" }}>이메일</td>
            <td style={{ width: "12.5%" }}>전화번호</td>
            <td style={{ width: "12.5%" }}>작성한 매거진</td>
            <td style={{ width: "12.5%" }}>수정하기</td>
            <td style={{ width: "12.5%" }}>차단하기</td>
            <td style={{ width: "12.5%" }}>비밀번호 초기화</td>
          </tr>
        </thead>
        <tbody>
          {adminList.map((admin) => (
            <React.Fragment key={admin.admSeq}>
              <tr>
                <td>{admin.admProfileImageUrl}</td>
                <td>{admin.admName}</td>
                <td>{admin.admEmail}</td>
                <td>{admin.admPhone}</td>
                <td>{admin.regMagazineCount}</td>
                <td>
                  <AdminModifyModal adminData={admin} />
                </td>
                <td>
                  <Button>차단하기</Button>
                </td>
                <td>
                  <Button>비밀번호 초기화</Button>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminTable;
