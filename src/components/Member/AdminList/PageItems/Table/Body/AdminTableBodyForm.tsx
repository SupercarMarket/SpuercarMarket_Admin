import React from "react";
import { AdminTableBody, AdminTableBodyRowSpan, AdminTableBodyButton } from "./AdminTableBodyForm.styled";

import { useAppDispatch, useAppSelector } from "store/rootReducer";

import { AdminTableProps } from "../AdminTableForm";
import AdminModifyModalForm from "../../AdminModifyModal/AdminModifyModal";

import { AdminAction, setAdminBlock, setAdminPasswordInit, setAdminUnblock } from "redux/modules/AdminSlice";
import { AdminListType } from "types/AdminList";

const AdminTableBodyForm = ({ offset, postsPerPage, totalContentsCount }: AdminTableProps) => {
    const { list } = useAppSelector((state) => state.AdminSlice);
    const dispatch = useAppDispatch();

    const blockButtonOnClickHandler = (admSeq: number) => {
        dispatch(setAdminBlock({ admSeq: admSeq }));
        let newList: AdminListType[] = [];
        list.forEach((el) => {
            if (el.admSeq === admSeq) {
                newList.push({ ...el, isBlock: true });
            } else {
                newList.push(el);
            }
        });
        dispatch(AdminAction.setAdminList({ list: newList }));
    };

    const unblockButtonOnClickHandler = (admSeq: number) => {
        dispatch(setAdminUnblock({ admSeq: admSeq }));
        let newList: AdminListType[] = [];
        list.forEach((el) => {
            if (el.admSeq === admSeq) {
                newList.push({ ...el, isBlock: false });
            } else {
                newList.push(el);
            }
        });
        dispatch(AdminAction.setAdminList({ list: newList }));
    };

    const passwordInitOnClickHandler = (admSeq: number) => {
        if (window.confirm("비밀번호를 초기화하시겠습니까?")) {
            setAdminPasswordInit({ admSeq: admSeq });
        }
    };

    return (
        <AdminTableBody key={`uuid`}>
            {list.slice(offset, offset + postsPerPage).map((admin, index) => {
                return (
                    <React.Fragment key={admin.admSeq}>
                        <tr>
                            <AdminTableBodyRowSpan>{admin.admProfileImageUrl}</AdminTableBodyRowSpan>
                            <AdminTableBodyRowSpan>{admin.admNickname}</AdminTableBodyRowSpan>
                            <AdminTableBodyRowSpan>{admin.admEmail}</AdminTableBodyRowSpan>
                            <AdminTableBodyRowSpan>{admin.admPhone}</AdminTableBodyRowSpan>
                            <AdminTableBodyRowSpan>{admin.regMagazineCount}</AdminTableBodyRowSpan>
                            <AdminTableBodyRowSpan>
                                <AdminModifyModalForm admSeq={admin.admSeq} admName={admin.admName} admNickname={admin.admNickname} admEmail={admin.admEmail} admPhone={admin.admPhone} />
                            </AdminTableBodyRowSpan>
                            <AdminTableBodyRowSpan>
                                {admin.isBlock ? (
                                    <AdminTableBodyButton onClick={() => unblockButtonOnClickHandler(admin.admSeq)}>차단 해제</AdminTableBodyButton>
                                ) : (
                                    <AdminTableBodyButton onClick={() => blockButtonOnClickHandler(admin.admSeq)}>차단하기</AdminTableBodyButton>
                                )}
                            </AdminTableBodyRowSpan>
                            <AdminTableBodyRowSpan>
                                <AdminTableBodyButton onClick={() => passwordInitOnClickHandler(admin.admSeq)}>비밀번호 초기화</AdminTableBodyButton>
                            </AdminTableBodyRowSpan>
                        </tr>
                    </React.Fragment>
                );
            })}
        </AdminTableBody>
    );
};

export default AdminTableBodyForm;
