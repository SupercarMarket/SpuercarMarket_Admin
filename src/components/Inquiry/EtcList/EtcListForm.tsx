import React, { useState } from 'react'
import { Wrapper } from './EtcListForm.styled';
import TopBannerForm from './PageItems/TopBanner/TopBannerForm';
import EtcListMainTableForm from './PageItems/Table/EtcListMainTableForm';
import PaginationForm from '../../Common/Pagination/PaginationForm';

const EtcListForm = () => {
  const paginationCount = 10;
  // 페이지당 몇개 그려줄지
  const postsPerPage = 20;
  // 총 길이
  let totalContentsCount = 21;
  // 첫 페이지
  const startPage = 1;
  const [ isPage, setIsPage ] = useState< number >( startPage );
  const offset = ( isPage - 1 ) * postsPerPage;

  return (
    <Wrapper>
      <TopBannerForm />
      <EtcListMainTableForm
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

export default EtcListForm