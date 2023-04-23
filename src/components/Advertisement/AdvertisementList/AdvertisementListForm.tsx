import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "store/rootReducer";
import {
  AdvertisementAction,
  getAdvertisementList,
} from "redux/modules/AdvertisementSlice";
import TopBannerForm from "./PageItems/TopBanner/TopBannerForm";
import AdvertisementMainTableForm from "./PageItems/Table/AdvertisementMainTableForm";
import PaginationForm from "../../Common/Pagination/PaginationForm";
import { Wrapper } from "./AdvertisementListForm.styled";

const AdvertisementListForm = () => {
  const paginationCount = 10;
  // 페이지당 몇개 그려줄지
  const postsPerPage = 20;
  // 총 길이
  let totalContentsCount = 21;
  // 첫 페이지
  const startPage = 1;
  const [isPage, setIsPage] = useState<number>(startPage);
  const offset = (isPage - 1) * postsPerPage;

  const { isLoading, filter, keyword, currentPage, updated } = useAppSelector(
    (state) => state.AdvertisementSlice
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(AdvertisementAction.setAdvertisementListCurrentPage({ isPage }));

    if (isPage === currentPage) {
      dispatch(
        getAdvertisementList({
          filter: filter as string,
          keyword: keyword as string,
          page: isPage,
        })
      );
    }

    setIsPage(() => currentPage);
  }, [isPage, currentPage, dispatch, updated]);

  return (
    <Wrapper>
      <TopBannerForm />
      {!isLoading ? (
        <>
          <AdvertisementMainTableForm
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

export default AdvertisementListForm;
