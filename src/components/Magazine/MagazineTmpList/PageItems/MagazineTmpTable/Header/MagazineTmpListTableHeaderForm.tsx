import React from "react";
import { MagazineListTableHeader, MagazineListTableHeaderRowSpan, MagazineListCheckBoxWrapper, MagazineListInputCheckBox, MagazineListLabelCheckBox } from "./MagazineTmpListTableHeaderForm.styled";
import { useAppSelector, useAppDispatch } from "store/rootReducer";
import { MagazineTmpAction } from "redux/modules/MagazineTmpSlice";

const MagazineTmpListTableHeaderForm = () => {
    const { allChecked } = useAppSelector((state) => state.MagazineTmpSlice);
    const dispatch = useAppDispatch();
    const allCheckBoxClickHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.checked);
        dispatch(MagazineTmpAction.setMagazineListAllChecked({ allChecked: event.currentTarget.checked }));
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
                <MagazineListTableHeaderRowSpan style={{ width: "10%" }}>수정하기</MagazineListTableHeaderRowSpan>
                <MagazineListTableHeaderRowSpan style={{ width: "10%" }}>삭제하기</MagazineListTableHeaderRowSpan>
            </tr>
        </MagazineListTableHeader>
    );
};

export default MagazineTmpListTableHeaderForm;
