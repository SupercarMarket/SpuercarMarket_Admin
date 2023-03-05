import React, { useState, useEffect } from "react";

import MemberTable from "./PageItems/MemberTable/MemberTable";
import MemberSearchForm from "./PageItems/MemberSearchForm/MemberSearchForm";
import MemberHeader from "./PageItems/MemberHeader/MemberHeader";
import PaginationForm from "components/Common/Pagination/PaginationForm";

import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { MemberAction, getMemberList } from "redux/modules/MemberSlice";

import { Member } from "types/MemberType";

import { getMemberCountInfoHandler } from "utils/api/Member/MemberAPI";

function MemberListForm() {
    const [userTotal, setUserTotal] = useState(0);
    const [userBanned, setUserBanned] = useState(0);
    const [userOut, setUserOut] = useState(0);
    const [userList, setUserList] = useState<Member[]>([]);
    const [checkedList, setCheckedList] = useState([]);

    const paginationCount = 10;
    // 페이지당 몇개 그려줄지
    const postsPerPage = 20;
    // 첫 페이지
    const startPage = 1;
    const [isPage, setIsPage] = useState<number>(startPage);
    const offset = (isPage - 1) * postsPerPage;

    const { isLoading, filter, keyword, allDate, startDate, endDate, role, level, currentPage, totalCount } = useAppSelector((state) => state.MemberSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        getMemberCountInfoHandler()
            .then((response) => {
                setUserTotal(response!.data.userTotal);
                setUserBanned(response!.data.userBanned);
                setUserOut(response!.data.userOut);
            })
            .catch((error) => {
                console.log("fail");
            });
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

    // 회원번호 리스트를 받아 해당 회원들을 차단하는 함수
    const doBan = (banList: number[]) => {
        userList.forEach((user) => (banList.includes(user.userSeq) ? (user.isBanned = true) : user.isBanned));
        setUserList([...userList]);
        setUserBanned(userBanned + banList.length);
    };

    // 회원번호 하나를 받아 해당 회원의 차단을 해제하는 함수
    const cancelBan = (cancelBanUser: number) => {
        userList.forEach((user) => (user.userSeq === cancelBanUser ? (user.isBanned = false) : user.isBanned));
        setUserList([...userList]);
        setUserBanned(userBanned - 1);
    };

    // 체크된 회원들을 차단하는 함수
    const doCheckedBan = () => {
        doBan(checkedList);
        setCheckedList([]);
    };

    // 회원번호와 변경할 회원등급을 받아 회원 등급을 변경하는 함수
    const changeClass = (userId: number, changedClass: number) => {
        userList.forEach((user) => {
            if (user.userSeq === userId && user.userRating !== changedClass) {
                console.log(`user ${userId}'s class changed from ${user.userRating} to ${changedClass}`);
                user.userRating = changedClass;
                setUserList([...userList]);
            }
        });
    };

    return (
        <div style={{ padding: "40px", width: "100%" }}>
            <MemberSearchForm />
            {!isLoading ? (
                <>
                    <MemberHeader doCheckedBanHandler={doCheckedBan} userTotal={userTotal} userBanned={userBanned} userOut={userOut} />
                    <MemberTable offset={offset} postsPerPage={postsPerPage} totalContentsCount={totalCount} />
                </>
            ) : (
                <div>조회중입니다.</div>
            )}
            <PaginationForm paginationCount={paginationCount} postsPerPage={postsPerPage} totalContentsCount={totalCount} isPage={isPage} setIsPage={setIsPage} />
        </div>
    );
}

export default MemberListForm;
