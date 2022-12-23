import React from 'react'
import PageTitle from '../../../../Common/PageTitle/PageTitle'
import { MemberInfoWrapper, MemeberTable } from "./MemberInfoTableForm.styled";
import { TableHeader, TableContent } from "../../EtcListDetailForm.styled";

const MemberInfoTableForm = () => {
  return (
    <>
      <MemberInfoWrapper>
        <PageTitle title={"회원 정보"} />
        <MemeberTable>
          <tbody>
            <tr>
              <TableHeader>회원번호</TableHeader>
              <TableContent>0000000</TableContent>
              <TableHeader>아이디</TableHeader>
              <TableContent>abcdefg</TableContent>
            </tr>
            <tr>
              <TableHeader>이름</TableHeader>
              <TableContent>테스트</TableContent>
              <TableHeader>닉네임</TableHeader>
              <TableContent>슈퍼카마켓슈퍼카마켓</TableContent>
            </tr>
            <tr>
              <TableHeader>전화번호</TableHeader>
              <TableContent>010-0000-0000</TableContent>
              <TableHeader>이메일</TableHeader>
              <TableContent>000000000000@gmail.com</TableContent>
            </tr>
            <tr>
              <TableHeader>가입일자</TableHeader>
              <TableContent>2022-12-12</TableContent>
              <TableHeader>최근접속시간</TableHeader>
              <TableContent>2022-12-23 00:00</TableContent>
            </tr>
            <tr>
              <TableHeader>회원등급</TableHeader>
              <TableContent>브론즈</TableContent>
              <TableHeader>Role</TableHeader>
              <TableContent>일반</TableContent>
            </tr>
            <tr>
              <TableHeader>게시글 수</TableHeader>
              <TableContent>000개</TableContent>
              <TableHeader>댓글 수</TableHeader>
              <TableContent>000개</TableContent>
            </tr>
          </tbody>
        </MemeberTable>
      </MemberInfoWrapper>
    </>
  );
}

export default MemberInfoTableForm