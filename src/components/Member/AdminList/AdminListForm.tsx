import React, { useState, useEffect } from "react";

import { Admin } from "types/MemberType";
import SearchForm from "./PageItems/SearchForm/SearchForm";
import Pagination from "../commons/Pagination";
import AdminHeader from "./PageItems/Table/AdminHeader";
import AdminTable from "./PageItems/Table/AdminTable";

import { TableHeader } from "../DealerInquiryList/DealerInquiryList.styled";

import axios from "axios";

function AdminListForm() {
  const [adminNumber, setAdminNumber] = useState(0);
  const [adminList, setAdminList] = useState<Admin[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectFilter, setSelectFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  const getAdminList = (targetPage: number = 1) => {
    axios
      .get("/super-admin/v1/admin", {
        headers: {
          ACCESS_TOKEN: process.env.REACT_APP_TOKEN,
          REFRESH_TOKEN: process.env.REACT_APP_R_TOKEN,
        },
      })
      .then((response) => {
        console.log("success");
        const resData = response.data;
        setAdminList(resData.list);
        setAdminNumber(resData.totalCount);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  // userList axios 만들어서 PaginationTable 로 Props 전달
  useEffect(() => {
    getAdminList();
  }, []);

  return (
    <div style={{ padding: "40px", width: "100%" }}>
      <TableHeader>
        <SearchForm selectFilter={selectFilter} setSelectFilter={setSelectFilter} searchText={searchText} setSearchText={setSearchText} getAdminList={getAdminList} />
        <AdminHeader adminCount={adminNumber} />
      </TableHeader>
      <AdminTable adminList={adminList} />
      <Pagination total={adminList.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default AdminListForm;
