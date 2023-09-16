import React, { useState, useEffect } from "react";

import SearchForm from "./PageItems/SearchForm/SearchForm";
import { Wrapper } from "./AdminListForm.styled.ts";
import PaginationForm from "components/Common/Pagination/PaginationForm";

import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { AdminAction, getAdminList } from "redux/modules/AdminSlice";
import AdminTableForm from "./PageItems/Table/AdminTableForm";

function AdminListForm() {
  // 페이지당 몇개 그려줄지
  const postsPerPage = 20;
  // 첫 페이지
  const startPage = 1;
  const [isPage, setIsPage] = useState<number>(startPage);
  const offset = (isPage - 1) * postsPerPage;

  const { isLoading, filter, keyword, currentPage, totalCount, totalPages } =
    useAppSelector((state) => state.AdminSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(AdminAction.setAdminListCurrentPage({ isPage }));
    if (isPage === currentPage) {
      dispatch(
        getAdminList({
          filter: filter as string,
          keyword: keyword as string,
          page: currentPage,
        })
      );
    }
    setIsPage(() => currentPage);
  }, [isPage, currentPage, dispatch]);

  return (
    <Wrapper>
      <SearchForm />
      {!isLoading ? (
        <AdminTableForm
          offset={offset}
          postsPerPage={postsPerPage}
          totalContentsCount={totalCount}
        />
      ) : (
        <div>조회 중입니다.</div>
      )}
      <PaginationForm
        paginationCount={totalPages}
        postsPerPage={postsPerPage}
        totalContentsCount={totalCount}
        isPage={isPage}
        setIsPage={setIsPage}
      />
    </Wrapper>
  );
}
export default AdminListForm;
