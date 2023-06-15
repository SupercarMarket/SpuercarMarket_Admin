import React, { useState, useEffect } from "react";

import PaginationForm from "components/Common/Pagination/PaginationForm";

import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { Wrapper } from "./MagazineInquiryListForm.styled";
import { getMagazineInquiryList } from "redux/modules/MagazineInquirySlice";
import MagazineInquiryHeader from "./PageItems/Header/MagazineInquiryHeaderForm";
import MagazineInquiryListTable from "./PageItems/Table/MagazineInquiryListTableForm";
import { MagazineTmpAction } from "../../../redux/modules/MagazineTmpSlice";

function MagazineTmpListForm() {
  // 페이지당 몇개 그려줄지
  const postsPerPage = 20;
  // 첫 페이지
  const startPage = 1;
  const [isPage, setIsPage] = useState<number>(startPage);
  const offset = (isPage - 1) * postsPerPage;

  const { isLoading, currentPage, totalCount, totalPages } = useAppSelector(
    (state) => state.MagazineInquirySlice
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(MagazineTmpAction.setMagazineListCurrentPage({ isPage }));
    if (isPage === currentPage) {
      dispatch(
        getMagazineInquiryList({
          page: isPage,
        })
      );
    }
    setIsPage(() => currentPage);
  }, [isPage, currentPage, dispatch]);

  return (
    <Wrapper>
      <MagazineInquiryHeader />
      {!isLoading ? (
        <>
          <MagazineInquiryListTable />
        </>
      ) : (
        <div>조회중입니다.</div>
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

export default MagazineTmpListForm;
