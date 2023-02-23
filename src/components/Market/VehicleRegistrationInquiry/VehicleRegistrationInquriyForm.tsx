import React, { useState, useEffect } from 'react';
import { Wrapper } from "./VehicleRegistrationInquriyForm.styled";
import TopBannerForm from './PageItems/TopBanner/TopBannerForm';
import VehicleMainTableForm from './PageItems/Table/VehicleMainTableForm';

import PaginationForm from '../../Common/Pagination/PaginationForm';
import { useAppSelector, useAppDispatch } from '../../../store/rootReducer'; 
import { getForSaleInquiryList, ForSaleListAction } from '../../../redux/modules/ForSaleInquirySlice';

const VehicleRegistrationInquriyForm = () => {
  // 한 화면에 보여줄 최대 페이지 수
  const paginationCount = 10;
  // 페이지당 몇개 그려줄지
  const postsPerPage = 20;
  // 첫 페이지
  const startPage = 1;
  // 총 게시물 수 테스트 변수
  // const totalListCount = 21;
  const [ isPage, setIsPage ] = useState< number >( startPage );
  const offset = ( isPage - 1 ) * postsPerPage;

  const { isLoading, filter, keyword ,totalCount, currentPage } = useAppSelector( state => state.ForSaleListSlice );
  const dispatch = useAppDispatch();

  useEffect(()=>{
    window.scrollTo( 0, 0 );
    dispatch( ForSaleListAction.setForSaleListCurrentPage( { isPage } ) );
    if( isPage === currentPage ){
      dispatch( getForSaleInquiryList({ filter, keyword, page : currentPage}))
    }
    setIsPage( () => currentPage );
  },[ isPage, currentPage, dispatch ]);

  return (
    <Wrapper>
      <TopBannerForm />
      { !isLoading ? (
        <>
          <VehicleMainTableForm
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
    </Wrapper>
  );
}

export default VehicleRegistrationInquriyForm;