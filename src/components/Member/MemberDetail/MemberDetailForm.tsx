import React, { useEffect, useState } from "react";
import DealerInfo from "./PageItems/DealerInfo/DealerInfo";
import UserInfo from "./PageItems/MemberInfo/MemberInfo";
import ApproverInfo from "./PageItems/ApproverInfo/ApproverInfo";

import axios from "axios";

import { Container } from "./MemberDetail.styled";

export type UserDetail = {
  userSeq: number;
  userId: string;
  userName: string;
  userNickName: string;
  userEmail: string;
  userPhone: string;
  userRating: number;
  createdDate: string;
  postNumber: number;
  commentNumber: number;
};

export type DealerDetail = {
  comName: string;
  comPhone: string;
  comAddress: string;
  guildName: string;
  dlrNum: string;
  dlrEmployeeCardFront: string;
  dlrEmployeeCardBack: string;
  dlrProfileImage: string;
  comment: string;
};

export type AdminDetail = {
  regAdminNickName: string;
  regAdminEmail: string;
};

function MemberDetail() {
  const [dealerDetailData, setDealerDetailData] = useState<DealerDetail>();
  const [memberDetailData, setMemberDetailData] = useState<UserDetail>();
  const [adminDetailData, setAdminDetailData] = useState<AdminDetail>();
  useEffect(() => {
    axios
      .get("/super-admin/v1/member/1", {
        headers: {
          ACCESS_TOKEN: process.env.REACT_APP_TOKEN,
          REFRESH_TOKEN: process.env.REACT_APP_R_TOKEN,
        },
      })
      .then((response) => {
        console.log("success");
        console.log(response.data);
        const rawData = response.data.data;
        setDealerDetailData({
          comName: rawData.comName,
          comPhone: rawData.comPhone,
          comAddress: rawData.comAdress,
          guildName: rawData.guildName,
          dlrNum: rawData.dlrNum,
          dlrEmployeeCardFront: rawData.dlrEmployeeCardFront,
          dlrEmployeeCardBack: rawData.dlrEmployeeCardBack,
          dlrProfileImage: rawData.dlrProfileImage,
          comment: rawData.comment,
        });
        setMemberDetailData({
          userSeq: rawData.dlrSeq,
          userId: rawData.userId,
          userName: rawData.userName,
          userNickName: rawData.userNickName,
          userEmail: rawData.userEmail,
          userPhone: rawData.userPhone,
          userRating: parseInt(rawData.userRating),
          createdDate: rawData.createdDate,
          postNumber: rawData.postCount,
          commentNumber: rawData.commentCount,
        });
        setAdminDetailData({
          regAdminNickName: rawData.regAdmin,
          regAdminEmail: rawData.regAdminEmail,
        });
      })
      .catch((error) => {
        console.log("fail");
      });
  }, []);

  // const userData: Member = {
  //   userSeq: 1,
  //   userId: "abcdefg",
  //   userName: "곽은주",
  //   userNickName: "슈퍼카마켓슈퍼카마켓",
  //   userPhone: "010-0000-0000",
  //   userEmail: "0000000@gmail.com",
  //   createdDate: "2022-10-18",
  //   userRating: 1,
  //   isDealer: true,
  //   postNumber: 123,
  //   commentNumber: 456,
  //   isBanned: false,
  //   isDelete: false,
  // };

  // const dealerData: Dealer = {
  //   userSeq: 1,
  //   comName: "슈퍼카마켓상사",
  //   comPhone: "02-0000-0000",
  //   comAddress: "경기도 성남시 분당구 판교역로 166 (우)13529",
  //   guildName: "슈퍼카마켓조합",
  //   dlrNum: "11-123-12345",
  //   dlrEmployeeCardFront: "",
  //   dlrEmployeeCardBack: "",
  //   dlrProfileImage: "",
  //   comment: "기타기타기타",
  //   regAdmin: "",
  // };

  // const approverData: Admin = {
  //   _id: 1,
  //   ProfileImg: "",
  //   adminId: "abcedfg",
  //   adminName: "이름",
  //   adminNickname: "닉네임",
  //   adminEmail: "ooo@gmail.com",
  //   adminPhone: "010-0000-0000",
  //   magazineNumber: 5,
  // };

  return (
    <div style={{ padding: "40px" }}>
      {dealerDetailData && (
        <Container>
          <DealerInfo dealerData={dealerDetailData!} />
          <div>
            <UserInfo userData={memberDetailData!} />
            <ApproverInfo approverData={adminDetailData!} />
          </div>
        </Container>
      )}
    </div>
  );
}

export default MemberDetail;
