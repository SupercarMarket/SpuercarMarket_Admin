import React, { useState, useEffect } from "react";

import UserTable from "./PageItems/Table/UserTable";
import Pagination from "../commons/Pagination";
import MemberSearchForm from "./PageItems/MemberSearchForm/MemberSearchForm";
import UserHeader from "./PageItems/UserHeader/UserHeader";

import { User } from "types/MemberType";

function MemberListForm() {
  const [userNumber, setUserNumber] = useState(0);
  const [userBanned, setUserBanned] = useState(0);
  const [userOut, setUserOut] = useState(0);
  const [userList, setUserList] = useState<User[]>([]);
  const [checkedList, setCheckedList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // userList axios 만들어서 PaginationTable 로 Props 전달
  useEffect(() => {
    setUserNumber(50);
    setUserBanned(0);
    const userData: User[] = Array(50)
      .fill(0)
      .map((_, i) => ({
        userSeq: i + 1,
        userId: "abcdefg",
        userName: "곽은주",
        userNickName: "슈퍼카마켓슈퍼카마켓",
        userPhone: "010-0000-0000",
        userEmail: "0000000@gmail.com",
        createdDate: "2022-10-18",
        userRating: "1",
        isDealer: true,
        postNumber: "123",
        replyNumber: "456",
        isBanned: false,
      }));
    setUserList(userData);
    setUserOut(0);
  }, []);

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
  const changeClass = (userId: number, changedClass: string) => {
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
      <UserHeader doCheckedBan={doCheckedBan} userNumber={userNumber} userBanned={userBanned} userOut={userOut} />
      <UserTable userList={userList} doBan={doBan} cancelBan={cancelBan} checkedList={checkedList} setCheckedList={setCheckedList} changeClass={changeClass} />
      <Pagination total={userList.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default MemberListForm;
