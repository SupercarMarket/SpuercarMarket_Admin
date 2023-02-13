import React, { useState, useEffect } from "react";

import { Dealer } from "types/MemberType";
import DealerTableHeaderForm from "./PageItems/Table/DealerTableHeaderForm";
import DealerInquiryTable from "./PageItems/Table/DealerInquiryTableForm";
import SearchForm from "./PageItems/SearchForm/SearchForm";
import Pagination from "../commons/Pagination";
import axios from "axios";
import { TableHeader } from "./DealerInquiryList.styled";

function DealerInquiryListForm() {
  const [registerRequestNumber, setRegisterRequestNumber] = useState(0);
  const [dealerList, setDealerList] = useState<Dealer[]>([]);
  const [checkedList, setCheckedList] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [selectFilter, setSelectFilter] = useState<string>("all");
  const [searchText, setSearchText] = useState<string>("");

  const getDealerInquiryData = (targetPage: number = 1) => {
    axios
      .get("/super-admin/v1/inquiry/dealer", {
        headers: {
          ACCESS_TOKEN: process.env.REACT_APP_TOKEN,
          REFRESH_TOKEN: process.env.REACT_APP_R_TOKEN,
        },
        params: {
          filter: selectFilter !== "all" ? selectFilter : null,
          keyword: searchText !== "" ? searchText : null,
          page: targetPage,
        },
      })
      .then((response) => {
        console.log("success");
        const dealerListData: Dealer[] = response.data.list;
        setRegisterRequestNumber(response.data.totalCount);
        setDealerList(dealerListData);
      })
      .catch((err) => {
        console.log("fail");
        console.log(err);
        const dealerListData: Dealer[] = Array(50)
          .fill(0)
          .map((_, i) => ({
            userSeq: i + 1,
            comName: "슈퍼카마켓상사",
            comPhone: "02-0000-0000",
            comAddress: "경기도 성남시 분당구 판교역로 166 (우)13529",
            guildName: "슈퍼카마켓조합",
            dlrNum: "11-123-12345",
            dlrEmployeeCardFront: "",
            dlrEmployeeCardBack: "",
            dlrProfileImage: "",
            comment: "기타기타기타",
            regAdmin: "",
          }));
        setRegisterRequestNumber(dealerListData.length);
        setDealerList(dealerListData);
      });
  };

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
    getDealerInquiryData();
  }, []);

  return (
    <div style={{ padding: "40px", width: "100%" }}>
      <TableHeader>
        <SearchForm selectFilter={selectFilter} setSelectFilter={setSelectFilter} searchText={searchText} setSearchText={setSearchText} getDealerInquiryData={getDealerInquiryData} />
        <DealerTableHeaderForm registerDealer={doCheckedRegister} registerRequest={registerRequestNumber} />
      </TableHeader>
      <DealerInquiryTable dealerList={dealerList} doRegister={doRegister} checkedList={checkedList} setCheckedList={setCheckedList} />
      <Pagination total={dealerList.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default DealerInquiryListForm;
