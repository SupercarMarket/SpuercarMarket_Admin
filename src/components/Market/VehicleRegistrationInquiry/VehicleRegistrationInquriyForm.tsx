import React, { useState, useEffect } from 'react';
import { Wrapper } from "./VehicleRegistrationInquriyForm.styled";
import TopBannerForm from './PageItems/TopBanner/TopBannerForm';
import VehicleMainTableForm from './PageItems/Table/VehicleMainTableForm';

import PaginationForm from '../../Common/Pagination/PaginationForm';

const VehicleRegistrationInquriyForm = () => {
  // 한 화면에 보여줄 최대 페이지 수
  const paginationCount = 10;
  // 페이지당 몇개 그려줄지
  const postsPerPage = 20;
  // 총 길이
  let totalContentsCount = 21;
  // 첫 페이지
  const startPage = 1;
  const [ isPage, setIsPage ] = useState< number >( startPage );
  const offset = ( isPage - 1 ) * postsPerPage;

  useEffect(()=>{
    window.scrollTo( 0, 0 );
  },[ isPage ]);

  return (
    <Wrapper>
      <TopBannerForm />
      <VehicleMainTableForm
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
    </Wrapper>
  );
}

export default VehicleRegistrationInquriyForm;