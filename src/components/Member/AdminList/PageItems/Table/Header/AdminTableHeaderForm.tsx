import React from "react";
import { AdminTableHeader, AdminTableHeaderRowSpan } from "./AdminTableHeaderForm.styled";

const AdminTableHeaderForm = () => {
    return (
        <AdminTableHeader>
            <tr>
                <AdminTableHeaderRowSpan style={{ width: "12.5%" }}>프로필 사진</AdminTableHeaderRowSpan>
                <AdminTableHeaderRowSpan style={{ width: "12.5%" }}>닉네임</AdminTableHeaderRowSpan>
                <AdminTableHeaderRowSpan style={{ width: "12.5%" }}>이메일</AdminTableHeaderRowSpan>
                <AdminTableHeaderRowSpan style={{ width: "12.5%" }}>전화번호</AdminTableHeaderRowSpan>
                <AdminTableHeaderRowSpan style={{ width: "12.5%" }}>작성한 메거진</AdminTableHeaderRowSpan>
                <AdminTableHeaderRowSpan style={{ width: "12.5%" }}>수정하기</AdminTableHeaderRowSpan>
                <AdminTableHeaderRowSpan style={{ width: "12.5%" }}>차단하기</AdminTableHeaderRowSpan>
                <AdminTableHeaderRowSpan>비밀번호 초기화</AdminTableHeaderRowSpan>
            </tr>
        </AdminTableHeader>
    );
};

export default AdminTableHeaderForm;
