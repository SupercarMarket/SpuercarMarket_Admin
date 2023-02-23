import React, { useState, useEffect } from 'react';
import { Wrapper } from "./ForSaleListForm.styled";

import ForSaleTopBannerForm from './PageItems/TopBanner/ForSaleTopBannerForm';
import ForSaleMainTableForm from './PageItems/Table/ForSaleMainTableForm';

import PaginationForm from '../../Common/Pagination/PaginationForm';
import { getMarketList, MarketAction } from "../../../redux/modules/MarketSlice";
import { useAppDispatch, useAppSelector } from '../../../store/rootReducer'; 

const ForSaleListForm = () => {
  const paginationCount = 10;
  // 페이지당 몇개 그려줄지
  const postsPerPage = 20;
  // 첫 페이지
  const startPage = 1;
  const [ isPage, setIsPage ] = useState< number >( startPage );
  const offset = ( isPage - 1 ) * postsPerPage;

  const { isLoading, filter, keyword, currentPage, totalCount } = useAppSelector( state => state.MarketSlice );
  const dispatch = useAppDispatch();

  useEffect(()=>{
    window.scrollTo( 0, 0 );
    dispatch( MarketAction.setMarketListCurrentPage( {isPage}) );
    if( isPage === currentPage ){
      dispatch( getMarketList({ filter : filter as string, keyword : (keyword as string), page : isPage }) );
    }
    setIsPage( () => currentPage );
  },[ isPage, currentPage, dispatch ]);
  
  return (
    <Wrapper>
      <div style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}>
        <ForSaleTopBannerForm />
        { !isLoading ? (
          <>
            <ForSaleMainTableForm
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
        ) :(
          <div>조회 중입니다.</div>
        )}
      </div>
    </Wrapper>
  );
}

export default ForSaleListForm;