import React, { useState, useEffect } from "react";

import MemberTableForm from "./PageItems/MemberTable/MemberTable";
import MemberSearchForm from "./PageItems/MemberSearchForm/MemberSearchForm";
import MemberHeader from "./PageItems/MemberHeader/MemberHeader";
import PaginationForm from "components/Common/Pagination/PaginationForm";

import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { MemberAction, getMemberList } from "redux/modules/MemberSlice";
import { MemberListType } from "types/MemberList";

function MemberListForm() {
    const paginationCount = 10;
    // 페이지당 몇개 그려줄지
    const postsPerPage = 20;
    // 첫 페이지
    const startPage = 1;
    const [isPage, setIsPage] = useState<number>(startPage);
    const offset = (isPage - 1) * postsPerPage;

    const { isLoading, filter, keyword, allDate, startDate, endDate, role, level, currentPage, totalCount, userBanned, list, checkList } = useAppSelector((state) => state.MemberSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(MemberAction.setMemberListCurrentPage({ isPage }));
        if (isPage === currentPage) {
            dispatch(
                getMemberList({
                    filter: filter as string,
                    keyword: keyword as string,
                    allDate: allDate as boolean,
                    startDate: startDate as Date,
                    endDate: endDate as Date,
                    role: role as string,
                    level: level as string[],
                    page: isPage,
                })
            );
        }
        setIsPage(() => currentPage);
    }, [isPage, currentPage, dispatch]);

    // 체크 리스트를 받아 해당 회원들을 차단하는 함수
    const banCheckedMembersHandler = (banMemberList: number[]) => {
        // 차단된 회원 정보를 수정
        let newList: MemberListType[] = [];
        list.forEach((user) => {
            let thisUser = { ...user };
            if (banMemberList.includes(thisUser.userSeq)) {
                thisUser.isBanned = true;
            }
            newList.push(thisUser);
        });
        dispatch(MemberAction.setMemberList({ list: newList }));
        dispatch(MemberAction.setMemberCountBanned({ userBanned: userBanned + banMemberList.length }));
        // 차단된 회원 체크 해제
        let newCheckList: number[] = [...checkList];
        newCheckList = newCheckList.filter((el) => !banMemberList.includes(el));
        dispatch(MemberAction.setMemberListCheckedList({ checkList: newCheckList }));
    };

    // 회원번호 하나를 받아 해당 회원의 차단을 해제하는 함수
    const unbanMemberHandler = (userSeq: number) => {
        let newList: MemberListType[] = [];
        list.forEach((user) => {
            let thisUser = { ...user };
            if (userSeq === thisUser.userSeq) {
                thisUser.isBanned = false;
            }
            newList.push(thisUser);
        });
        dispatch(MemberAction.setMemberList({ list: newList }));
        dispatch(MemberAction.setMemberCountBanned({ userBanned: userBanned - 1 }));
    };

    // 단일 회원을 차단하는 함수
    const banMemberHandler = (userSeq: number) => {
        banCheckedMembersHandler([userSeq]);
    };

    return (
        <div style={{ padding: "40px", width: "100%" }}>
            <MemberSearchForm />
            <MemberHeader doCheckedBanHandler={banCheckedMembersHandler} />
            {!isLoading ? (
                <>
                    <MemberTableForm offset={offset} postsPerPage={postsPerPage} totalContentsCount={totalCount} banMemberHandler={banMemberHandler} unbanMemberHandler={unbanMemberHandler} />
                </>
            ) : (
                <div>조회중입니다.</div>
            )}
            <PaginationForm paginationCount={paginationCount} postsPerPage={postsPerPage} totalContentsCount={totalCount} isPage={isPage} setIsPage={setIsPage} />
        </div>
    );
}

export default MemberListForm;
