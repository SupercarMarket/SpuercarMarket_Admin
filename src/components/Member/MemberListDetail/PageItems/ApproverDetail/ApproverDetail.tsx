import React, { useState } from "react";
import { TitleDiv, Table } from "../../DealerDetailForm";
import { Button } from "../../../styles/buttonStyles";

import { Admin } from "types/MemberType";

function ApproverDetail({ approverData }: { approverData: Admin }) {
  return (
    <div>
      <TitleDiv>딜러 정보</TitleDiv>
      <Table>
        <tbody>
          <tr>
            <td className="title">아이디</td>
            <td className="content">{approverData.adminId}</td>
          </tr>
          <tr>
            <td className="title">이름</td>
            <td className="content">{approverData.adminName}</td>
          </tr>
          <tr>
            <td className="title">닉네임</td>
            <td className="content">{approverData.adminNickname}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ApproverDetail;
