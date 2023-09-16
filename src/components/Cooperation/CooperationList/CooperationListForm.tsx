import { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store/rootReducer";
import {
  getCooperationList,
  CooperationAction,
} from "redux/modules/CooperationSlice";
import TopBannerForm from "./PageItems/TopBanner/TopBannerForm";
import CooperationMainTableForm from "./PageItems/Table/CooperationMainTableForm";
import PaginationForm from "../../Common/Pagination/PaginationForm";
import { Wrapper } from "./CooperationListForm.styled";

const CooperationListForm = () => {
  // 페이지당 몇개 그려줄지
  const postsPerPage = 20;
  // 총 길이
  let totalContentsCount = 21;
  // 첫 페이지
  const startPage = 1;
  const [isPage, setIsPage] = useState<number>(startPage);
  const offset = (isPage - 1) * postsPerPage;

  const { isLoading, filter, keyword, currentPage, totalPages } =
    useAppSelector((state) => state.CooperationSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(CooperationAction.setCooperationListCurrentPage({ isPage }));

    if (isPage === currentPage) {
      dispatch(
        getCooperationList({
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
      <TopBannerForm />
      {!isLoading ? (
        <>
          <CooperationMainTableForm
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
        </>
      ) : (
        <div>조회 중입니다.</div>
      )}
    </Wrapper>
  );
};

export default CooperationListForm;
