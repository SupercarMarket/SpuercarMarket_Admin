import React, { useEffect, useState } from "react";
import MemberInfo from "../MemberDetail/PageItems/MemberInfo/MemberInfo";
import DealerInfo from "../MemberDetail/PageItems/DealerInfo/DealerInfo";
// import { Member, Dealer } from "types/MemberType";

import { UserDetail, DealerDetail } from "../MemberDetail/MemberDetailForm";

import { Container } from "../MemberDetail/MemberDetail.styled";

import axios from "axios";
import ApproveRejectForm from "./PageItems/ApproveReject/ApproveRejectForm";

function DealerInquiryDetailForm() {
  const [dealerDetailData, setDealerDetailData] = useState<DealerDetail>();
  const [memberDetailData, setMemberDetailData] = useState<UserDetail>();
  useEffect(() => {
    axios
      .get("/super-admin/v1/inquiry?category=dealer&dlrSeq=1", {
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
          comAddress: rawData.comAddress,
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
      })
      .catch((error) => {
        console.log("fail");
      });
  }, []);
  // const userData: UserDetail = {
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

  return (
    <div style={{ padding: "40px" }}>
      {dealerDetailData && (
        <Container>
          <div>
            <DealerInfo dealerData={dealerDetailData!} />
            <ApproveRejectForm dlrSeq={memberDetailData!.userSeq} />
          </div>
          <MemberInfo userData={memberDetailData!} />
        </Container>
      )}
    </div>
  );
}

export default DealerInquiryDetailForm;
