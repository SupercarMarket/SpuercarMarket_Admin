import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Dealer } from "types/MemberType";
import UserHeader from "./PageItems/Table/DealerHeader";
import DealerTable from "./PageItems/Table/DealerTable";
import SearchForm from "./PageItems/SearchForm/SearchForm";
import Pagination from "../commons/Pagination";

function DealerList() {
  const [registerRequestNumber, setRegisterRequestNumber] = useState(0);
  const [dealerList, setDealerList] = useState<Dealer[]>([]);
  const [checkedList, setCheckedList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const doRegister = (registerList: number[]) => {
    setDealerList([...dealerList]);
    setRegisterRequestNumber(registerRequestNumber - registerList.length);
  };

  const doCheckedRegister = () => {
    doRegister(checkedList);
    setCheckedList([]);
  };

  // userList axios 만들어서 PaginationTable 로 Props 전달
  useEffect(() => {
    const dealerListData: Dealer[] = Array(50)
      .fill(0)
      .map((_, i) => ({
        _id: i + 1,
        companyName: "슈퍼카마켓상사",
        companyPhone: "02-0000-0000",
        companyAddress: "경기도 성남시 분당구 판교역로 166 (우)13529",
        unionName: "슈퍼카마켓조합",
        dealerNumber: "11-123-12345",
        idCardFront: "",
        idCardBack: "",
        profileImg: "",
        additional: "기타기타기타",
        comment: "",
      }));

    setRegisterRequestNumber(dealerListData.length);
    setDealerList(dealerListData);
  }, []);

  return (
    <div>
      <SearchForm />
      <UserHeader registerDealer={doCheckedRegister} registerRequest={registerRequestNumber} />
      <DealerTable dealerList={dealerList} doRegister={doRegister} checkedList={checkedList} setCheckedList={setCheckedList} />
      <Pagination total={dealerList.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default DealerList;
