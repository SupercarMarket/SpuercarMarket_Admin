import React, { useState, useEffect } from "react";

import MemberTable from "./PageItems/MemberTable/MemberTable";
import Pagination from "../commons/Pagination";
import MemberSearchForm from "./PageItems/MemberSearchForm/MemberSearchForm";
import MemberHeader from "./PageItems/MemberHeader/MemberHeader";

import { Member } from "types/MemberType";

import { getMemberCountInfoHandler } from "utils/api/Member/MemberAPI";

function MemberListForm() {
  const [userTotal, setUserTotal] = useState(0);
  const [userBanned, setUserBanned] = useState(0);
  const [userOut, setUserOut] = useState(0);
  const [userList, setUserList] = useState<Member[]>([]);
  const [checkedList, setCheckedList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectFilter, setSelectFilter] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [isEntireDate, setIsEntireDate] = useState(true);
  const [startDate, setStartDate] = useState(new Date(new Date().setMonth(new Date().getMonth() - 1)));
  const [endDate, setEndDate] = useState(new Date());
  const [selectClass, setSelectClass] = useState("0");
  const [selectRating, setSelectRating] = useState<string[]>([]);
  // const paginationCount = 10;
  // // 페이지당 몇개 그려줄지
  // const postsPerPage = 20;
  // // 첫 페이지
  // const startPage = 1;
  // const [ isPage, setIsPage ] = useState< number >( startPage );
  // const offset = ( isPage - 1 ) * postsPerPage;

  // const { isLoading, filter, keyword, currentPage, totalCount } = useAppSelector( state => state.MarketSlice );
  // const dispatch = useAppDispatch();

  // useEffect(()=>{
  //   window.scrollTo( 0, 0 );
  //   dispatch( MarketAction.setMarketListCurrentPage( {isPage}) );
  //   if( isPage === currentPage ){
  //     dispatch( getMarketList({ filter : filter as string, keyword : (keyword as string), page : isPage }) );
  //   }
  //   setIsPage( () => currentPage );
  // },[ isPage, currentPage, dispatch ]);

  useEffect(() => {
    getMemberCountInfoHandler()
      .then((response) => {
        setUserTotal(response!.data.userTotal);
        setUserBanned(response!.data.userBanned);
        setUserOut(response!.data.userOut);
      })
      .catch((error) => {
        console.log("fail");
      });
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
      <MemberHeader doCheckedBan={doCheckedBan} userTotal={userTotal} userBanned={userBanned} userOut={userOut} />
      <MemberTable userList={userList} doBan={doBan} cancelBan={cancelBan} checkedList={checkedList} setCheckedList={setCheckedList} changeClass={changeClass} />
      <Pagination total={userList.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default MemberListForm;
