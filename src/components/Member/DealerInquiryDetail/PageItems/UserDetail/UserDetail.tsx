import React from "react";
import { User } from "types/MemberType";
import { TitleDiv, Table } from "../../DealerInquiryDetailForm";

function UserDetail({ userData }: { userData: User }) {
  return (
    <div>
      <TitleDiv>회원 정보</TitleDiv>
      <Table>
        <tbody>
          <tr>
            <td className="title">회원 정보</td>
            <td className="content">{userData._id}</td>
            <td className="title">아이디</td>
            <td className="content">{userData.userid}</td>
          </tr>
          <tr>
            <td className="title">이름</td>
            <td className="content">{userData.username}</td>
            <td className="title">닉네임</td>
            <td className="content">{userData.nickname}</td>
          </tr>
          <tr>
            <td className="title">전화번호</td>
            <td className="content">{userData.phone}</td>
            <td className="title">이메일</td>
            <td className="content">{userData.email}</td>
          </tr>
          <tr>
            <td className="title">가입일자</td>
            <td className="content">{userData.signupDate}</td>
            <td className="title">회원등급</td>
            <td className="content">{userData.class}</td>
          </tr>
          <tr>
            <td className="title">Role</td>
            <td className="content">{userData.role}</td>
            <td className="title">게시글 수</td>
            <td className="content">{userData.postNumber}</td>
          </tr>
          <tr>
            <td className="title">댓글 수</td>
            <td className="content">{userData.replyNumber}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default UserDetail;
