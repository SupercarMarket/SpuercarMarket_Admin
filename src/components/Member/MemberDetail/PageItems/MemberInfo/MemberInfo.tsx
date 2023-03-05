import React from "react";
import { TitleDiv, Table } from "../../MemberDetailForm.styled";
import { useAppSelector } from "store/rootReducer";

const ratingTable: { [key: string]: string } = {
    "1": "브론즈",
    "2": "실버",
    "3": "골드",
    "4": "플레티넘",
    "5": "다이아",
};

function MemberInfo() {
    const { detailItem } = useAppSelector((state) => state.MemberSlice);

    return (
        <div>
            <TitleDiv>회원 정보</TitleDiv>
            <Table>
                <tbody>
                    <tr style={{ height: "53px" }}>
                        <td className="title" style={{ width: "15%" }}>
                            회원 정보
                        </td>
                        <td className="content" style={{ width: "35%" }}>
                            {detailItem?.dlrSeq.toString().padStart(7, "0")}
                        </td>
                        <td className="title" style={{ width: "15%" }}>
                            아이디
                        </td>
                        <td className="content">{detailItem?.userId}</td>
                    </tr>
                    <tr style={{ height: "53px" }}>
                        <td className="title">이름</td>
                        <td className="content">{detailItem?.userName}</td>
                        <td className="title">닉네임</td>
                        <td className="content">{detailItem?.userNickName}</td>
                    </tr>
                    <tr style={{ height: "53px" }}>
                        <td className="title">전화번호</td>
                        <td className="content">{detailItem?.userPhone}</td>
                        <td className="title">이메일</td>
                        <td className="content">{detailItem?.userEmail}</td>
                    </tr>
                    <tr style={{ height: "53px" }}>
                        <td className="title">가입일자</td>
                        <td className="content">{detailItem?.createdDate.toString().split("T")[0]}</td>
                        <td className="title">회원등급</td>
                        <td className="content">{ratingTable[detailItem?.userRating]}</td>
                    </tr>
                    <tr style={{ height: "53px" }}>
                        <td className="title">Role</td>
                        <td className="content">딜러</td>
                        <td className="title">게시글 수</td>
                        <td className="content">{detailItem?.postCount}</td>
                    </tr>
                    <tr style={{ height: "53px" }}>
                        <td className="title">댓글 수</td>
                        <td className="content">{detailItem?.commentCount}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default MemberInfo;
