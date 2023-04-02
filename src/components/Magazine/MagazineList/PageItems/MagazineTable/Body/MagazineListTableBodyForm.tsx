import React, { useRef } from "react";
import {
    MagazineListTableBody,
    MagazineListTableBodyRowSpan,
    MagazineListCheckBoxWrapper,
    MagazineListInputCheckBox,
    MagazineLiseLabelCheckBox,
    MagazineListTableBodyButton,
} from "./MagazineListTableBodyForm.styled";

import { MagazineListAction } from "redux/modules/MagazineListSlice";
import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { useNavigate } from "react-router";

import { MagazineListTableProps } from "../MagazineListTableForm";

const MagazineListTableBodyForm = ({ offset, postsPerPage, totalContentsCount, hideButtonOnClickHandler, unhideButtonOnClickHandler, deleteButtonOnClickHandler }: MagazineListTableProps) => {
    const inputCheckTypeRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { list, checkList } = useAppSelector((state) => state.MagazineListSlice);

    const inputCheckOnClickHandler = () => {
        console.log(inputCheckTypeRef.current?.checked);
    };

    // 항목 체크 박스 셋업
    const magazineCheckBoxClickHandler = (id: number, isChecked: boolean) => {
        dispatch(MagazineListAction.setMagazineListEachChecked({ id, isChecked }));
    };

    const inputCheckOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        magazineCheckBoxClickHandler(parseInt(event.target.id), event.target.checked);
    };

    // 매거진 디테일로 넘어가기
    const magazineDetailOnClickHandler = (id: number) => {
        navigate(`/magazinelist/${id.toString()}`, { state: { edit: false } });
    };

    const magazineModifyOnClickHandler = (id: number) => {
        navigate(`/magazinelist/${id.toString()}`, { state: { edit: true } });
    };

    return (
        <MagazineListTableBody key={`uuid`}>
            {list.slice(offset, offset + postsPerPage).map((magazine, index) => {
                return (
                    <React.Fragment key={magazine.id}>
                        <tr onClick={() => magazineDetailOnClickHandler(magazine.id)}>
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
                            <MagazineListTableBodyRowSpan>{magazine.createdDate}</MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>{magazine.likeCount}개</MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>{magazine.cmtCount}개</MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>{magazine.viewCount}개</MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>
                                <MagazineListTableBodyButton onClick={() => magazineModifyOnClickHandler(magazine.id)}>수정하기</MagazineListTableBodyButton>
                            </MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>
                                {magazine.hidden === true ? (
                                    <MagazineListTableBodyButton id={magazine.id.toString()} onClick={() => unhideButtonOnClickHandler(magazine.id)}>
                                        숨기기 취소
                                    </MagazineListTableBodyButton>
                                ) : (
                                    <MagazineListTableBodyButton id={magazine.id.toString()} onClick={() => hideButtonOnClickHandler(magazine.id)}>
                                        숨기기
                                    </MagazineListTableBodyButton>
                                )}
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

export default MagazineListTableBodyForm;
