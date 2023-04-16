import React, { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store/rootReducer";
import {
  getCommunityList,
  CommunityAction,
} from "redux/modules/CommunitySlice";
import { Wrapper } from "./CommunityForm.styled";
import CommunityTopBannerForm from "./PageItems/TopBanner/CommunityTopBannerForm";
import CommunityMainTableForm from "./PageItems/Table/CommunityMainTableForm";
import PaginationForm from "../../Common/Pagination/PaginationForm";

const CommunityForm = () => {
  const paginationCount = 10;
  // 페이지당 몇개 그려줄지
  const postsPerPage = 20;
  // 총 길이
  let totalContentsCount = 44;
  // 첫 페이지
  const startPage = 1;
  const [isPage, setIsPage] = useState<number>(startPage);
  const offset = (isPage - 1) * postsPerPage;
  const { isLoading, filter, keyword, currentPage, totalElements } =
    useAppSelector((state) => state.CommunitySlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(CommunityAction.setCommunityListCurrentPage({ isPage }));

    if (isPage === currentPage) {
      dispatch(
        getCommunityList({
          filter: filter as string,
          keyword: keyword as string,
          page: isPage,
        })
      );
    }
    setIsPage(() => currentPage);
  }, [isPage, currentPage, dispatch]);

  return (
    <Wrapper>
      <CommunityTopBannerForm />
      {!isLoading ? (
        <>
          <CommunityMainTableForm
            offset={offset}
            postsPerPage={postsPerPage}
            totalContentsCount={totalContentsCount}
          />
          <PaginationForm
            paginationCount={paginationCount}
            postsPerPage={postsPerPage}
            totalContentsCount={totalContentsCount}
            isPage={isPage}
            setIsPage={setIsPage}
          />
        </>
      ) : (
        <div>조회 중입니다.</div>
      )}
    </Wrapper>
  );
};

export default CommunityForm;
