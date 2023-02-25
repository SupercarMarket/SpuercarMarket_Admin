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
            <td>프로필 사진</td>
            <td>닉네임</td>
            <td>이메일</td>
            <td>전화번호</td>
            <td>작성한 매거진</td>
            <td>수정하기</td>
            <td>차단하기</td>
            <td>비밀번호 초기화</td>
          </tr>
        </thead>
        <tbody>
          {adminList.map((admin) => (
            <React.Fragment key={admin._id}>
              <tr>
                <td>{admin.ProfileImg}</td>
                <td>{admin.adminNickname}</td>
                <td>{admin.adminEmail}</td>
                <td>{admin.adminPhone}</td>
                <td>{admin.magazineNumber}</td>
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
