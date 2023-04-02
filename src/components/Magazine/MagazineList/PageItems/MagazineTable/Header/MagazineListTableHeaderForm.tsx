import React from "react";
import { MagazineListTableHeader, MagazineListTableHeaderRowSpan, MagazineListCheckBoxWrapper, MagazineListInputCheckBox, MagazineListLabelCheckBox } from "./MagazineListTableHeaderForm.styled";
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
        <MagazineListTableHeader>
            <tr>
                <MagazineListTableHeaderRowSpan rowSpan={2} style={{ width: "5%" }}>
                    <MagazineListCheckBoxWrapper>
                        <MagazineListInputCheckBox id="header_check" onChange={(event) => allCheckBoxClickHandler(event)} checked={allChecked} />
                        <MagazineListLabelCheckBox htmlFor="header_check" />
                    </MagazineListCheckBoxWrapper>
                </MagazineListTableHeaderRowSpan>
                <MagazineListTableHeaderRowSpan style={{ width: "10%" }}>번호</MagazineListTableHeaderRowSpan>
                <MagazineListTableHeaderRowSpan>제목</MagazineListTableHeaderRowSpan>
                <MagazineListTableHeaderRowSpan style={{ width: "10%" }}>등록일자</MagazineListTableHeaderRowSpan>
                <MagazineListTableHeaderRowSpan style={{ width: "10%" }}>스크랩 수</MagazineListTableHeaderRowSpan>
                <MagazineListTableHeaderRowSpan style={{ width: "10%" }}>댓글 수</MagazineListTableHeaderRowSpan>
                <MagazineListTableHeaderRowSpan style={{ width: "10%" }}>조회 수</MagazineListTableHeaderRowSpan>
                <MagazineListTableHeaderRowSpan style={{ width: "10%" }}>수정하기</MagazineListTableHeaderRowSpan>
                <MagazineListTableHeaderRowSpan style={{ width: "10%" }}>숨기기</MagazineListTableHeaderRowSpan>
                <MagazineListTableHeaderRowSpan style={{ width: "10%" }}>삭제하기</MagazineListTableHeaderRowSpan>
            </tr>
        </MagazineListTableHeader>
    );
};

export default MagazineListTableHeaderForm;
