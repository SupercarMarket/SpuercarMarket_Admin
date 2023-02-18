import React, { useState, useEffect } from 'react';
import { Wrapper } from "./ForSaleListForm.styled";

import ForSaleTopBannerForm from './PageItems/TopBanner/ForSaleTopBannerForm';
import ForSaleMainTableForm from './PageItems/Table/ForSaleMainTableForm';

import PaginationForm from '../../Common/Pagination/PaginationForm';

const ForSaleListForm = () => {
  const paginationCount = 10;
  // 페이지당 몇개 그려줄지
  const postsPerPage = 20;
  // 총 길이
  let totalContentsCount = 44;
  // 첫 페이지
  const startPage = 1;
  const [ isPage, setIsPage ] = useState< number >( startPage );
  const offset = ( isPage - 1 ) * postsPerPage;

  useEffect(()=>{
    window.scrollTo( 0, 0 );
  },[ isPage ]);

  return (
    <Wrapper>
      <div style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}>
        <ForSaleTopBannerForm />
        <ForSaleMainTableForm offset={offset} postsPerPage={postsPerPage} totalContentsCount={totalContentsCount} />
        <PaginationForm
          paginationCount={paginationCount}
          postsPerPage={postsPerPage}
          totalContentsCount={totalContentsCount}
          isPage={ isPage }
          setIsPage={ setIsPage }
        />
      </div>
    </Wrapper>
  );
}

export default ForSaleListForm;