import React, { useRef } from "react";
import {
    MagazineListTableBody,
    MagazineListTableBodyRowSpan,
    MagazineListCheckBoxWrapper,
    MagazineListInputCheckBox,
    MagazineLiseLabelCheckBox,
    MagazineListTableBodyButton,
} from "./MagazineTmpListTableBodyForm.styled";

import { MagazineTmpAction } from "redux/modules/MagazineTmpSlice";
import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { useNavigate } from "react-router";

import { MagazineListTableProps } from "../MagazineTmpListTableForm";

const MagazineTmpListTableBodyForm = ({ offset, postsPerPage, totalContentsCount, deleteButtonOnClickHandler }: MagazineListTableProps) => {
    const inputCheckTypeRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { list, checkList } = useAppSelector((state) => state.MagazineTmpSlice);

    const inputCheckOnClickHandler = () => {
        console.log(inputCheckTypeRef.current?.checked);
    };

    // 항목 체크 박스 셋업
    const magazineCheckBoxClickHandler = (brdSeq: number, isChecked: boolean) => {
        dispatch(MagazineTmpAction.setMagazineListEachChecked({ brdSeq, isChecked }));
    };

    const inputCheckOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        magazineCheckBoxClickHandler(parseInt(event.target.id), event.target.checked);
    };

    // 매거진 디테일로 넘어가기
    const magazineModifyOnClickHandler = (id: number) => {
        navigate(`/magazinetmp/editor`, { state: { id: id } });
    };

    return (
        <MagazineListTableBody key={`uuid`}>
            {list.slice(offset, offset + postsPerPage).map((magazine, index) => {
                return (
                    <React.Fragment key={magazine.id}>
                        <tr>
                            <MagazineListTableBodyRowSpan>
                                <MagazineListCheckBoxWrapper>
                                    <MagazineListInputCheckBox
                                        id={magazine.id.toString()}
                                        ref={inputCheckTypeRef}
                                        onClick={inputCheckOnClickHandler}
                                        onChange={(event) => {
                                            inputCheckOnChangeHandler(event);
                                        }}
                                        checked={checkList.includes(magazine.id) ? true : false}
                                        disabled={false}
                                    />
                                    <MagazineLiseLabelCheckBox htmlFor={magazine.id.toString()} />
                                </MagazineListCheckBoxWrapper>
                            </MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>{String(magazine.id.toString()).padStart(7, "0")}</MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>{magazine.title}</MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>{magazine.created}</MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>
                                <MagazineListTableBodyButton onClick={() => magazineModifyOnClickHandler(magazine.id)}>수정하기</MagazineListTableBodyButton>
                            </MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>
                                <MagazineListTableBodyButton onClick={() => deleteButtonOnClickHandler(magazine.id)}>삭제하기</MagazineListTableBodyButton>
                            </MagazineListTableBodyRowSpan>
                        </tr>
                    </React.Fragment>
                );
            })}
        </MagazineListTableBody>
    );
};

export default MagazineTmpListTableBodyForm;
