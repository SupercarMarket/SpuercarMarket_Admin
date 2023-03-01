import {useAppSelector} from "../../../../../store/rootReducer";
import {
    MemberContent,
    MemberHeader,
    MemberInfoWrapper,
    MemeberTable
} from "./MemberInfoTableForm.styled";
import PageTitle from "../../../../Common/PageTitle/PageTitle";
import React from "react";

interface userRatingType {
    [ key : string ] : string
};

const userRating : userRatingType = {
    "1" : "브론즈",
    "2" : "실버",
    "3" : "골드",
    "4" : "플레티넘",
    "5" : "다이아"
}

const MemberInfoTableForm = () => {
    const { detailItem } = useAppSelector( state => state.EtcInquirySlice );
    return (
        <>
            <MemberInfoWrapper>
                <PageTitle title={"회원 정보"} />
                <MemeberTable>
                    <tbody>
                    <tr>
                        <MemberHeader>회원번호</MemberHeader>
                        <MemberContent>{String( detailItem?.userSeq ).padStart( 7, '0' )}</MemberContent>
                        <MemberHeader>아이디</MemberHeader>
                        <MemberContent>{ detailItem?.userId}</MemberContent>
                    </tr>
                    <tr>
                        <MemberHeader>이름</MemberHeader>
                        <MemberContent>{detailItem?.userName}</MemberContent>
                        <MemberHeader>닉네임</MemberHeader>
                        <MemberContent>{detailItem?.userNickName}</MemberContent>
                    </tr>
                    <tr>
                        <MemberHeader>전화번호</MemberHeader>
                        <MemberContent>{detailItem?.userPhone}</MemberContent>
                        <MemberHeader>이메일</MemberHeader>
                        <MemberContent>{ detailItem?.userEmail}</MemberContent>
                    </tr>
                    <tr>
                        <MemberHeader>가입일자</MemberHeader>
                        <MemberContent>{detailItem?.createdDate.split("T")[0]}</MemberContent>
                        <MemberHeader>회원등급</MemberHeader>
                        <MemberContent>{ userRating[ detailItem?.userRating as string ] }</MemberContent>
                    </tr>
                    <tr>
                        <MemberHeader>Role</MemberHeader>
                        <MemberContent>일반</MemberContent>
                        <MemberHeader>게시글 수</MemberHeader>
                        <MemberContent>{ String( detailItem?.postCount ).padStart(3, '0')}개</MemberContent>
                    </tr>
                    <tr>
                        <MemberHeader>댓글 수</MemberHeader>
                        <MemberContent>{ String( detailItem?.commentCount ).padStart( 3, '0' ) }개</MemberContent>
                    </tr>
                    </tbody>
                </MemeberTable>
            </MemberInfoWrapper>
        </>
    );
}

export default MemberInfoTableForm