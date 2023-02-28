import React, { useState, useEffect } from 'react'
import { Wrapper } from './EtcInquiryListForm.styled';
import EtcInquiryTopBannerForm from "./PageItems/TopBanner/EtcInquiryTopBannerForm";
import PaginationForm from '../../Common/Pagination/PaginationForm';
import { useAppDispatch, useAppSelector } from '../../../store/rootReducer';
import {EtcInquiryAction, getEtcInquiryList} from "../../../redux/modules/EtcInquirySlice";
import EtcInquiryTableForm from "./PageItems/Table/EtcInquiryTableForm";

const EtcInquiryListForm = () => {
    const paginationCount = 10;
    // 페이지당 몇개 그려줄지
    const postsPerPage = 20;
    // 첫 페이지
    const startPage = 1;
    const [ isPage, setIsPage ] = useState< number >( startPage );
    const offset = ( isPage - 1 ) * postsPerPage;
    const { isLoading, filter, keyword, currentPage, totalCount, list, updated } = useAppSelector( state => state.EtcInquirySlice );
    const dispatch = useAppDispatch();
    useEffect(()=> {
        window.scrollTo(0, 0);
        dispatch(EtcInquiryAction.setEtcInquiryListCurrentPage({isPage}));
        if( isPage === currentPage ){
            dispatch( getEtcInquiryList({ filter : filter as string, keyword : (keyword as string), page : isPage }) );
        }
        setIsPage(() => currentPage);
    },[ updated, isPage, currentPage, dispatch ]);



    return (
        <Wrapper>
            <div style={{width: "100%", marginLeft: "auto", marginRight: "auto"}}>
                <EtcInquiryTopBannerForm/>
                {!isLoading ? (
                    <>
                        <EtcInquiryTableForm
                            offset={offset}
                            postsPerPage={postsPerPage}
                            totalContentsCount={totalCount}
                        />
                        <PaginationForm
                            paginationCount={paginationCount}
                            postsPerPage={postsPerPage}
                            totalContentsCount={totalCount}
                            isPage={isPage}
                            setIsPage={setIsPage}
                        />
                    </>
                ) : (
                    <div>조회 중입니다.</div>
                )}
            </div>
        </Wrapper>
    );
}

export default EtcInquiryListForm