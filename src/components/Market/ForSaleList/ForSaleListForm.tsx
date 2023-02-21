import React, { useState, useEffect } from 'react';
import { Wrapper } from "./ForSaleListForm.styled";

import ForSaleTopBannerForm from './PageItems/TopBanner/ForSaleTopBannerForm';
import ForSaleMainTableForm from './PageItems/Table/ForSaleMainTableForm';

import PaginationForm from '../../Common/Pagination/PaginationForm';
import { getMarketList } from "../../../redux/modules/MarketSlice";
import { useAppDispatch, useAppSelector } from '../../../store/rootReducer'; 

const ForSaleListForm = () => {
  const paginationCount = 10;
  // 페이지당 몇개 그려줄지
  const postsPerPage = 20;
  // 총 길이
  let totalContentsCount = 1;
  // 첫 페이지
  const startPage = 1;
  const [ isPage, setIsPage ] = useState< number >( startPage );
  const offset = ( isPage - 1 ) * postsPerPage;

  const { isLoading, filter, keyword, totalCount } = useAppSelector( state => state.MarketSlice );
  const dispatch = useAppDispatch();

  useEffect(()=>{
    window.scrollTo( 0, 0 );
  },[ isPage ]);

  useEffect(()=>{
      dispatch( getMarketList({ filter : filter as string, keyword : (keyword as string), page : isPage }) );
  }, [  ]);

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