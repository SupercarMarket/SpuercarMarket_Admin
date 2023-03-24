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
    const magazineCheckBoxClickHandler = (brdSeq: number, isChecked: boolean) => {
        dispatch(MagazineListAction.setMagazineListEachChecked({ brdSeq, isChecked }));
    };

    const inputCheckOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        magazineCheckBoxClickHandler(parseInt(event.target.id), event.target.checked);
    };

    // 매거진 디테일로 넘어가기
    const magazineDetailOnClickHandler = (brdSeq: number) => {
        navigate(`/magazinelist/${brdSeq.toString()}`);
    };

    const magazineModifyOnClickHandler = (brdSeq: number) => {
        navigate(`/magazinelist/${brdSeq.toString()}/modify`);
    };

    return (
        <MagazineListTableBody key={`uuid`}>
            {list.slice(offset, offset + postsPerPage).map((magazine, index) => {
                return (
                    <React.Fragment key={magazine.brdSeq}>
                        <tr onClick={() => magazineDetailOnClickHandler(magazine.brdSeq)}>
                            <MagazineListTableBodyRowSpan>
                                <MagazineListCheckBoxWrapper>
                                    <MagazineListInputCheckBox
                                        id={magazine.brdSeq.toString()}
                                        ref={inputCheckTypeRef}
                                        onClick={inputCheckOnClickHandler}
                                        onChange={(event) => {
                                            inputCheckOnChangeHandler(event);
                                        }}
                                        checked={checkList.includes(magazine.brdSeq) ? true : false}
                                        disabled={false}
                                    />
                                    <MagazineLiseLabelCheckBox htmlFor={magazine.brdSeq.toString()} />
                                </MagazineListCheckBoxWrapper>
                            </MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>{String(magazine.brdSeq.toString()).padStart(7, "0")}</MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>{magazine.title}</MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>{magazine.createdDate}</MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>{magazine.likeCount}개</MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>{magazine.cmtCount}개</MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>{magazine.viewCount}개</MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>
                                <MagazineListTableBodyButton onClick={() => magazineModifyOnClickHandler(magazine.brdSeq)}>수정하기</MagazineListTableBodyButton>
                            </MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>
                                {magazine.hidden === true ? (
                                    <MagazineListTableBodyButton id={magazine.brdSeq.toString()} onClick={() => unhideButtonOnClickHandler(magazine.brdSeq)}>
                                        숨기기 취소
                                    </MagazineListTableBodyButton>
                                ) : (
                                    <MagazineListTableBodyButton id={magazine.brdSeq.toString()} onClick={() => hideButtonOnClickHandler(magazine.brdSeq)}>
                                        숨기기
                                    </MagazineListTableBodyButton>
                                )}
                            </MagazineListTableBodyRowSpan>
                            <MagazineListTableBodyRowSpan>
                                <MagazineListTableBodyButton onClick={() => deleteButtonOnClickHandler(magazine.brdSeq)}>삭제하기</MagazineListTableBodyButton>
                            </MagazineListTableBodyRowSpan>
                        </tr>
                    </React.Fragment>
                );
            })}
        </MagazineListTableBody>
    );
};

export default MagazineListTableBodyForm;
