import React from "react";
import PageTitle from "../../../../../Common/PageTitle/PageTitle";
import {
  MemberInfoWrapper,
  MemeberTable,
  MemberHeader,
  MemberContent,
} from "./MemberInfoTableForm.styled";

import { useAppSelector } from "../../../../../../store/rootReducer";

interface userRatingType {
  [key: string]: string;
}

const userRating: userRatingType = {
  "1": "브론즈",
  "2": "실버",
  "3": "골드",
  "4": "플레티넘",
  "5": "다이아",
};

const MemberInfoTableForm = () => {
  const { inquiryDetailItem } = useAppSelector(
    (state) => state.ForSaleListSlice
  );
  return (
    <>
      <MemberInfoWrapper>
        <PageTitle title={"회원 정보"} />
        <MemeberTable>
          <tbody>
            <tr>
              <MemberHeader>회원번호</MemberHeader>
              <MemberContent>
                {String(inquiryDetailItem?.dealerInfo.dlrSeq).padStart(7, "0")}
              </MemberContent>
              <MemberHeader>아이디</MemberHeader>
              <MemberContent>
                {inquiryDetailItem?.dealerInfo.userId}
              </MemberContent>
            </tr>
            <tr>
              <MemberHeader>이름</MemberHeader>
              <MemberContent>
                {inquiryDetailItem?.dealerInfo.userName}
              </MemberContent>
              <MemberHeader>닉네임</MemberHeader>
              <MemberContent>
                {inquiryDetailItem?.dealerInfo.userNickName}
              </MemberContent>
            </tr>
            <tr>
              <MemberHeader>전화번호</MemberHeader>
              <MemberContent>
                {inquiryDetailItem?.dealerInfo.userPhone}
              </MemberContent>
              <MemberHeader>이메일</MemberHeader>
              <MemberContent>
                {inquiryDetailItem?.dealerInfo.userEmail}
              </MemberContent>
            </tr>
            <tr>
              <MemberHeader>가입일자</MemberHeader>
              <MemberContent>
                {inquiryDetailItem?.dealerInfo.createdDate.split("T")[0]}
              </MemberContent>
              <MemberHeader>회원등급</MemberHeader>
              <MemberContent>
                {[inquiryDetailItem?.dealerInfo.userRating as string]}
              </MemberContent>
            </tr>
            <tr>
              <MemberHeader>Role</MemberHeader>
              <MemberContent>일반</MemberContent>
              <MemberHeader>게시글 수</MemberHeader>
              <MemberContent>
                {String(inquiryDetailItem?.dealerInfo.postCount).padStart(
                  3,
                  "0"
                )}
                개
              </MemberContent>
            </tr>
            <tr>
              <MemberHeader>댓글 수</MemberHeader>
              <MemberContent>
                {String(inquiryDetailItem?.dealerInfo.commentCount).padStart(
                  3,
                  "0"
                )}
                개
              </MemberContent>
            </tr>
          </tbody>
        </MemeberTable>
      </MemberInfoWrapper>
    </>
  );
};

export default MemberInfoTableForm;
