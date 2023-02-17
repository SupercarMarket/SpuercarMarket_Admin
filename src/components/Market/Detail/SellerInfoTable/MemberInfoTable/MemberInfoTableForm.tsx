import React from 'react'
import PageTitle from '../../../../Common/PageTitle/PageTitle'
import { MemberInfoWrapper, MemeberTable, MemberHeader, MemberContent } from "./MemberInfoTableForm.styled";

const MemberInfoTableForm = () => {
  return (
    <>
    <MemberInfoWrapper>
          <PageTitle title={"회원 정보"} />
          <MemeberTable>
            <tbody>
              <tr>
                <MemberHeader>회원번호</MemberHeader><MemberContent>0000000</MemberContent><MemberHeader>아이디</MemberHeader><MemberContent>abcdefg</MemberContent>
              </tr>
              <tr>
                <MemberHeader>이름</MemberHeader><MemberContent>테스트</MemberContent><MemberHeader>닉네임</MemberHeader><MemberContent>슈퍼카마켓슈퍼카마켓</MemberContent>
              </tr>
              <tr>
                <MemberHeader>전화번호</MemberHeader><MemberContent>010-0000-0000</MemberContent><MemberHeader>아이디</MemberHeader><MemberContent>000000000000@gmail.com</MemberContent>
              </tr>
              <tr>
                <MemberHeader>가입일자</MemberHeader><MemberContent>2022-12-12</MemberContent><MemberHeader>회원등급</MemberHeader><MemberContent>브론즈</MemberContent>
              </tr>
              <tr>
                <MemberHeader>Role</MemberHeader><MemberContent>일반</MemberContent><MemberHeader>게시글 수</MemberHeader><MemberContent>000개</MemberContent>
              </tr>
              <tr>
                <MemberHeader>댓글 수</MemberHeader><MemberContent>000개</MemberContent>
              </tr>
            </tbody>
          </MemeberTable>
        </MemberInfoWrapper>
    </>
  )
}

export default MemberInfoTableForm