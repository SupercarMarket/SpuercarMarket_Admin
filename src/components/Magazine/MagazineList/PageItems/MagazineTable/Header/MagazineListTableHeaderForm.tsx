import React from "react";
import { MemberTableHeader, MemberTableHeaderRowSpan, MemberCheckBoxWrapper, MemberInputCheckBox, MemberLabelCheckBox } from "./MagazineListTableHeaderForm.styled";
import { MemberAction } from "redux/modules/MemberSlice";
import { useAppSelector, useAppDispatch } from "store/rootReducer";

const MagazineListTableHeaderForm = () => {
    const { allChecked } = useAppSelector((state) => state.MemberSlice);
    const dispatch = useAppDispatch();
    const allCheckBoxClickHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.checked);
        dispatch(MemberAction.setMemberListAllChecked({ allChecked: event.currentTarget.checked }));
    };

    return (
        <MemberTableHeader>
            <tr>
                <MemberTableHeaderRowSpan rowSpan={2} style={{ width: "5%" }}>
                    <MemberCheckBoxWrapper>
                        <MemberInputCheckBox id="header_check" onChange={(event) => allCheckBoxClickHandler(event)} checked={allChecked} />
                        <MemberLabelCheckBox htmlFor="header_check" />
                    </MemberCheckBoxWrapper>
                </MemberTableHeaderRowSpan>
                <MemberTableHeaderRowSpan rowSpan={2} style={{ width: "10%" }}>
                    회원번호
                </MemberTableHeaderRowSpan>
                <MemberTableHeaderRowSpan colSpan={2} style={{ width: "22.5%" }}>
                    아이디
                </MemberTableHeaderRowSpan>
                <MemberTableHeaderRowSpan style={{ width: "12.5%" }}>전화번호</MemberTableHeaderRowSpan>
                <MemberTableHeaderRowSpan rowSpan={2} style={{ width: "10%" }}>
                    가입일자
                </MemberTableHeaderRowSpan>
                <MemberTableHeaderRowSpan rowSpan={2} style={{ width: "10%" }}>
                    회원등급
                </MemberTableHeaderRowSpan>

                <MemberTableHeaderRowSpan rowSpan={2} style={{ width: "10%" }}>
                    Role
                </MemberTableHeaderRowSpan>
                <MemberTableHeaderRowSpan style={{ width: "10%" }}>게시글 수</MemberTableHeaderRowSpan>
                <MemberTableHeaderRowSpan rowSpan={2} style={{ width: "10%" }}>
                    회원 차단
                </MemberTableHeaderRowSpan>
            </tr>
            <tr>
                <MemberTableHeaderRowSpan style={{ width: "11.25%" }}>이름</MemberTableHeaderRowSpan>
                <MemberTableHeaderRowSpan>닉네임</MemberTableHeaderRowSpan>
                <MemberTableHeaderRowSpan>이메일</MemberTableHeaderRowSpan>
                <MemberTableHeaderRowSpan>댓글 수</MemberTableHeaderRowSpan>
            </tr>
        </MemberTableHeader>
    );
};

export default MagazineListTableHeaderForm;
