import React from "react";
import { TitleDiv, TableWrapper, TitleCell, ContentCell } from "./MemberInfoTableForm.styled";
import { useAppSelector } from "store/rootReducer";

const ratingTable: { [key: string]: string } = {
    "1": "브론즈",
    "2": "실버",
    "3": "골드",
    "4": "플레티넘",
    "5": "다이아",
};

function MemberInfoTableForm() {
    const { detailItem } = useAppSelector((state) => state.DealerInquirySlice);

    return (
        <div>
            <TitleDiv>회원 정보</TitleDiv>
            <TableWrapper>
                <tbody>
                    <tr style={{ height: "53px" }}>
                        <TitleCell style={{ width: "15%" }}>회원 정보</TitleCell>
                        <ContentCell style={{ width: "35%" }}>{detailItem?.brdSeq.toString().padStart(7, "0")}</ContentCell>
                        <TitleCell style={{ width: "15%" }}>아이디</TitleCell>
                        <ContentCell>{detailItem?.userId}</ContentCell>
                    </tr>
                    <tr style={{ height: "53px" }}>
                        <TitleCell>이름</TitleCell>
                        <ContentCell>{detailItem?.userName}</ContentCell>
                        <TitleCell>닉네임</TitleCell>
                        <ContentCell>{detailItem?.userNickName}</ContentCell>
                    </tr>
                    <tr style={{ height: "53px" }}>
                        <TitleCell>전화번호</TitleCell>
                        <ContentCell>{detailItem?.userPhone}</ContentCell>
                        <TitleCell>이메일</TitleCell>
                        <ContentCell>{detailItem?.userEmail}</ContentCell>
                    </tr>
                    <tr style={{ height: "53px" }}>
                        <TitleCell>가입일자</TitleCell>
                        <ContentCell>{detailItem?.createdDate.toString().split("T")[0]}</ContentCell>
                        <TitleCell>회원등급</TitleCell>
                        <ContentCell>{ratingTable[detailItem?.userRating]}</ContentCell>
                    </tr>
                    <tr style={{ height: "53px" }}>
                        <TitleCell>Role</TitleCell>
                        <ContentCell>딜러</ContentCell>
                        <TitleCell>게시글 수</TitleCell>
                        <ContentCell>{detailItem?.postCount}</ContentCell>
                    </tr>
                    <tr style={{ height: "53px" }}>
                        <TitleCell>댓글 수</TitleCell>
                        <ContentCell colSpan={3}>{detailItem?.commentCount}</ContentCell>
                    </tr>
                </tbody>
            </TableWrapper>
        </div>
    );
}

export default MemberInfoTableForm;
