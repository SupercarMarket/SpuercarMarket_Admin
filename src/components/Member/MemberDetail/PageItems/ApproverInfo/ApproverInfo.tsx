import React from "react";
import { TitleDiv, Table } from "../../MemberDetail.styled";

import { AdminDetail } from "../../MemberDetailForm";

function ApproverDetail({ approverData }: { approverData: AdminDetail }) {
  return (
    <div>
      <TitleDiv>딜러 정보</TitleDiv>
      <Table>
        <tbody>
          <tr>
            <td className="title">닉네임</td>
            <td className="content">{approverData.regAdminNickName}</td>
          </tr>
          <tr>
            <td className="title">이메일</td>
            <td className="content">{approverData.regAdminEmail}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ApproverDetail;
