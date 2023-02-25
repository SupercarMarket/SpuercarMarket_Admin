import React from "react";
import styled from "styled-components";
import DealerInfo from "./PageItems/DealerInfo/DealerInfo";
import UserInfo from "./PageItems/MemberInfo/MemberInfo";
import ApproverInfo from "./PageItems/ApproverInfo/ApproverInfo";
import { Member, Dealer, Admin } from "types/MemberType";

import { Container } from "./MemberDetail.styled";

function MemberDetail() {
  const userData: Member = {
    userSeq: 1,
    userId: "abcdefg",
    userName: "곽은주",
    userNickName: "슈퍼카마켓슈퍼카마켓",
    userPhone: "010-0000-0000",
    userEmail: "0000000@gmail.com",
    createdDate: "2022-10-18",
    userRating: "1",
    isDealer: true,
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
        <DealerInfo dealerData={dealerData} />
        <div>
          <UserInfo userData={userData} />
          <ApproverInfo approverData={approverData} />
        </div>
      </Container>
    </div>
  );
}

export default MemberDetail;
