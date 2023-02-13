import React from "react";
import styled from "styled-components";
import DealerDetail from "./PageItems/DealerDetail/DealerDetail";
import UserDetail from "./PageItems/UserDetail/UserDetail";
import { User, Dealer, Admin } from "types/MemberType";
import ApproverDetail from "./PageItems/ApproverDetail/ApproverDetail";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;

  div {
    width: 50%;
  }
`;

export const TitleDiv = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #1e1e20;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;

  .title {
    background: #f7f7f8;
    border-radius: 4px;
  }
  .content {
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
    width: 150px;
    height: 100px;
  }
`;

function DealerInfo() {
  const userData: User = {
    _id: 1,
    userid: "abcdefg",
    username: "곽은주",
    nickname: "슈퍼카마켓슈퍼카마켓",
    phone: "010-0000-0000",
    email: "0000000@gmail.com",
    signupDate: "2022-10-18",
    class: "1",
    role: "일반",
    postNumber: "123",
    replyNumber: "456",
    isBanned: false,
  };

  const dealerData: Dealer = {
    userSeq: 1,
    comName: "슈퍼카마켓상사",
    comPhone: "02-0000-0000",
    comAddress: "경기도 성남시 분당구 판교역로 166 (우)13529",
    guildName: "슈퍼카마켓조합",
    dlrNum: "11-123-12345",
    dlrEmployeeCardFront: "",
    dlrEmployeeCardBack: "",
    dlrProfileImage: "",
    comment: "기타기타기타",
    regAdmin: "",
  };

  const approverData: Admin = {
    _id: 1,
    ProfileImg: "",
    adminId: "abcedfg",
    adminName: "이름",
    adminNickname: "닉네임",
    email: "ooo@gmail.com",
    phoneNumber: "010-0000-0000",
    magazineNumber: 5,
  };

  return (
    <div style={{ padding: "40px" }}>
      <Container>
        <DealerDetail dealerData={dealerData} />
        <div>
          <UserDetail userData={userData} />
          <ApproverDetail approverData={approverData} />
        </div>
      </Container>
    </div>
  );
}

export default DealerInfo;
