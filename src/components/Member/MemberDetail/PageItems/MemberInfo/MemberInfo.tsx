import React from "react";
import { UserDetail } from "../../MemberDetailForm";
import { TitleDiv, Table } from "../../MemberDetail.styled";

function MemberInfo({ userData }: { userData: UserDetail }) {
  return (
    <div>
      <TitleDiv>회원 정보</TitleDiv>
      <Table>
        <tbody>
          <tr>
            <td className="title">회원 정보</td>
            <td className="content">{userData.userSeq}</td>
            <td className="title">아이디</td>
            <td className="content">{userData.userId}</td>
          </tr>
          <tr>
            <td className="title">이름</td>
            <td className="content">{userData.userName}</td>
            <td className="title">닉네임</td>
            <td className="content">{userData.userNickName}</td>
          </tr>
          <tr>
            <td className="title">전화번호</td>
            <td className="content">{userData.userPhone}</td>
            <td className="title">이메일</td>
            <td className="content">{userData.userEmail}</td>
          </tr>
          <tr>
            <td className="title">가입일자</td>
            <td className="content">{userData.createdDate}</td>
            <td className="title">회원등급</td>
            <td className="content">{userData.userRating}</td>
          </tr>
          <tr>
            <td className="title">Role</td>
            <td className="content">딜러</td>
            <td className="title">게시글 수</td>
            <td className="content">{userData.postNumber}</td>
          </tr>
          <tr>
            <td className="title">댓글 수</td>
            <td className="content">{userData.commentNumber}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default MemberInfo;
