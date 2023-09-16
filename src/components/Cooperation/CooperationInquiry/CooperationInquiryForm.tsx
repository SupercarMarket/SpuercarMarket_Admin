import React, { useEffect, useState } from "react";
import { Wrapper } from "./CooperationInquiryForm.styled";
import TopBannerForm from "./PageItems/TopBanner/TopBannerForm";
import CooperationInquiryMainTableForm from "./PageItems/Table/CooperationInquriyMainTableForm";
import PaginationForm from "../../Common/Pagination/PaginationForm";
import {
  CooperationAction,
  getCooperationInquiryList,
} from "../../../redux/modules/CooperationSlice";
import { useAppDispatch, useAppSelector } from "../../../store/rootReducer";

const CooperationInquiryForm = () => {
  const [init, setInit] = useState<boolean>(false);
  const paginationCount = 10;
  // 페이지당 몇개 그려줄지
  const postsPerPage = 20;
  // 총 길이
  let totalContentsCount = 21;
  // 첫 페이지
  const startPage = 1;
  const [isPage, setIsPage] = useState<number>(startPage);
  const offset = (isPage - 1) * postsPerPage;

  const { isLoading, filter, keyword, currentPage, totalElements, totalPages } =
    useAppSelector((state) => state.CooperationSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(CooperationAction.setCooperationListCurrentPage({ isPage }));

    if (isPage === currentPage) {
      dispatch(
        getCooperationInquiryList({
          filter: filter as string,
          keyword: keyword as string,
          page: isPage,
        })
      );
    }

    setIsPage(() => currentPage);
  }, [isPage, currentPage, dispatch, init]);

  return (
    <Wrapper>
      <TopBannerForm setInit={setInit} />
      <CooperationInquiryMainTableForm
        offset={offset}
        postsPerPage={postsPerPage}
        totalContentsCount={totalContentsCount}
      />
      <PaginationForm
        paginationCount={totalPages}
        postsPerPage={postsPerPage}
        totalContentsCount={totalContentsCount}
        isPage={isPage}
        setIsPage={setIsPage}
      />
    </Wrapper>
  );
};

export default CooperationInquiryForm;
