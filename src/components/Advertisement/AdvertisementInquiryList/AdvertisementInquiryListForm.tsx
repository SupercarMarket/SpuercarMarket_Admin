import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "store/rootReducer";
import {
  AdvertisementAction,
  getAdvertisementInquiryList,
} from "redux/modules/AdvertisementSlice";
import TopBannerForm from "./PageItems/TopBanner/TopBannerForm";
import AdvertisementInquiryMainTableForm from "./PageItems/Table/AdvertisementInquiryMainTableForm";
import PaginationForm from "../../Common/Pagination/PaginationForm";
import { Wrapper } from "./AdvertisementInquiryListForm.styled";

const AdvertisementInquiryListForm = () => {
  // 페이지당 몇개 그려줄지
  const postsPerPage = 20;
  // 총 길이
  let totalContentsCount = 21;
  // 첫 페이지
  const startPage = 1;
  const [isPage, setIsPage] = useState<number>(startPage);
  const offset = (isPage - 1) * postsPerPage;

  const { isLoading, keyword, currentPage, updated, totalPages } =
    useAppSelector((state) => state.AdvertisementSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(AdvertisementAction.setAdvertisementListCurrentPage({ isPage }));

    if (isPage === currentPage) {
      dispatch(
        getAdvertisementInquiryList({
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
          <AdvertisementInquiryMainTableForm
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

export default AdvertisementInquiryListForm;
