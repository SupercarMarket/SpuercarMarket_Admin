import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Admin } from "types/MemberType";
import SearchForm from "./PageItems/SearchForm/SearchForm";
import Pagination from "../commons/Pagination";
import AdminHeader from "./PageItems/Table/AdminHeader";
import AdminTable from "./PageItems/Table/AdminTable";

function AdminListForm() {
  const [adminNumber, setAdminNumber] = useState(0);
  const [adminList, setAdminList] = useState<Admin[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // userList axios 만들어서 PaginationTable 로 Props 전달
  useEffect(() => {
    const adminListData: Admin[] = Array(50)
      .fill(0)
      .map((_, i) => ({
        _id: i + 1,
        ProfileImg: "",
        adminId: "아이디",
        adminName: "이름",
        adminNickname: "슈퍼카마켓슈퍼카마켓",
        email: "ooo@gmail.com",
        phoneNumber: "010-0000-0000",
        magazineNumber: 5,
      }));

    setAdminNumber(adminListData.length);
    setAdminList(adminListData);
  }, []);

  return (
    <div>
      <SearchForm />
      <AdminHeader />
      <AdminTable adminList={adminList} />
      <Pagination total={adminList.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default AdminListForm;
