import React from 'react'
import { CommunityMainTableWrapper, CommunityTable } from "./CommunityMainTableForm.styled";

import CommunityMainTableHeaderForm from './Header/CommunityMainTableHeaderForm';
import CommunityMainTableBodyForm from './Body/CommunityMainTableBodyForm';

import { CommunityPropsType } from "../../../../../types/CommunityType";

const CommunityMainTableForm = ( { offset, postsPerPage, totalContentsCount } : CommunityPropsType ) => {
  return (
    <CommunityMainTableWrapper>
      <CommunityTable>
        <CommunityMainTableHeaderForm />
        <CommunityMainTableBodyForm
          offset={offset}
          postsPerPage={postsPerPage}
          totalContentsCount={totalContentsCount}
        />
      </CommunityTable>
    </CommunityMainTableWrapper>
  );
}

export default CommunityMainTableForm;