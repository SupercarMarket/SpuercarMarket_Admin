import React, { useState, useEffect } from "react";

import MemberTable from "./PageItems/MemberTable/MemberTable";
import Pagination from "../commons/Pagination";
import MemberSearchForm from "./PageItems/MemberSearchForm/MemberSearchForm";
import MemberHeader from "./PageItems/MemberHeader/MemberHeader";

// import { Member } from "types/MemberType";
import axios from "axios";

export type MemberInList = {
  userSeq: number;
  userId: string;
  userName: string;
  userRating: string;
  grade: number;
  nickname: string;
  email: string;
  phone: string;
  signUpdate: string;
  postNumber: number;
  commentNumber: number;
  isDealer: boolean;
  isBanned: boolean;
  isDeleted: boolean;
};

function MemberListForm() {
  const [userNumber, setUserNumber] = useState(0);
  const [userBanned, setUserBanned] = useState(0);
  const [userOut, setUserOut] = useState(0);
  const [userList, setUserList] = useState<MemberInList[]>([]);
  const [checkedList, setCheckedList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectFilter, setSelectFilter] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [isEntireDate, setIsEntireDate] = useState(true);
  const [startDate, setStartDate] = useState(new Date(new Date().setMonth(new Date().getMonth() - 1)));
  const [endDate, setEndDate] = useState(new Date());
  const [selectClass, setSelectClass] = useState("0");
  const [selectRating, setSelectRating] = useState<string[]>([]);

  const getMemberListData = (targetPage: number = 1) => {
    axios
      .get("/super-admin/v1/member", {
        headers: {
          ACCESS_TOKEN: process.env.REACT_APP_TOKEN,
          REFRESH_TOKEN: process.env.REACT_APP_R_TOKEN,
        },
        // params: {
        //   filter: selectFilter !== "all" ? selectFilter : null,
        //   keyword: searchText !== "" ? searchText : null,
        //   page: targetPage,
        // },
      })
      .then((response) => {
        console.log("success");
        setUserList(response.data.list);
        setUserNumber(50);
        setUserBanned(10);
        setUserOut(15);
      })
      .catch((err) => {
        console.log("fail");
        // setUserNumber(50);
        // setUserBanned(0);
        // const userData: Member[] = Array(50)
        //   .fill(0)
        //   .map((_, i) => ({
        //     userSeq: i + 1,
        //     userId: "abcdefg",
        //     userName: "곽은주",
        //     userNickName: "슈퍼카마켓슈퍼카마켓",
        //     userPhone: "010-0000-0000",
        //     userEmail: "0000000@gmail.com",
        //     createdDate: "2022-10-18",
        //     userRating: "1",
        //     isDealer: true,
        //     postNumber: "123",
        //     replyNumber: "456",
        //     isBanned: false,
        //   }));
        // setUserList(userData);
        // setUserOut(0);
      });
  };

  useEffect(() => {
    getMemberListData();
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
      <MemberSearchForm
        selectFilter={selectFilter}
        setSelectFilter={setSelectFilter}
        searchText={searchText}
        setSearchText={setSearchText}
        isEntireDate={isEntireDate}
        setIsEntireDate={setIsEntireDate}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        selectClass={selectClass}
        setSelectClass={setSelectClass}
        selectRating={selectRating}
        setSelectRating={setSelectRating}
      />
      <MemberHeader doCheckedBan={doCheckedBan} userNumber={userNumber} userBanned={userBanned} userOut={userOut} />
      <MemberTable userList={userList} doBan={doBan} cancelBan={cancelBan} checkedList={checkedList} setCheckedList={setCheckedList} changeClass={changeClass} />
      <Pagination total={userList.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default MemberListForm;
