import React, { useState, useEffect } from "react";

import DealerInquiryTable from "./PageItems/Table/DealerInquiryTableForm";
import SearchForm from "./PageItems/SearchForm/SearchForm";
import { Wrapper } from "./DealerInquiryList.styled";
import PaginationForm from "components/Common/Pagination/PaginationForm";

import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { DealerInquiryAction, getDealerInquiryList } from "redux/modules/DealerInquirySlice";
import { dealerAcceptHandler } from "utils/api/Member/DealerInquiryAPI";

function DealerInquiryListForm() {
    const paginationCount = 10;
    // 페이지당 몇개 그려줄지
    const postsPerPage = 20;
    // 첫 페이지
    const startPage = 1;
    const [isPage, setIsPage] = useState<number>(startPage);
    const offset = (isPage - 1) * postsPerPage;

    const { isLoading, filter, keyword, currentPage, totalCount } = useAppSelector((state) => state.DealerInquirySlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(DealerInquiryAction.setDealerInquiryListCurrentPage({ isPage }));
        if (isPage === currentPage) {
            dispatch(
                getDealerInquiryList({
                    filter: filter as string,
                    keyword: keyword as string,
                    page: isPage,
                })
            );
        }
        setIsPage(() => currentPage);
    }, [isPage, currentPage, dispatch]);

    const registerDealerHandler = (userSeq: number) => {
        dealerAcceptHandler(userSeq)
            .then((response) => {
                if (response?.status === 200) {
                    dispatch(getDealerInquiryList({ filter: filter, keyword: keyword, page: currentPage }));
                    dispatch(DealerInquiryAction.setDealerInquiryListCount({ totalCount: totalCount - 1 }));
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Wrapper>
            <SearchForm />
            {!isLoading ? <DealerInquiryTable offset={offset} postsPerPage={postsPerPage} totalContentsCount={totalCount} registerDealerHandler={registerDealerHandler} /> : <div>조회 중입니다.</div>}
            <PaginationForm paginationCount={paginationCount} postsPerPage={postsPerPage} totalContentsCount={totalCount} isPage={isPage} setIsPage={setIsPage} />
        </Wrapper>
    );
}
export default DealerInquiryListForm;
