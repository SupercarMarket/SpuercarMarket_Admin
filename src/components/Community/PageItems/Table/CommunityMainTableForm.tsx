import React from 'react'
import { CommunityMainTableWrapper, CommunityTable } from "./CommunityMainTableForm.styled";

import CommunityMainTableHeaderForm from './Header/CommunityMainTableHeaderForm';
import CommunityMainTableBodyForm from './Body/CommunityMainTableBodyForm';

const CommunityMainTableForm = () => {
  return (
    <CommunityMainTableWrapper>
        <CommunityTable>
            <CommunityMainTableHeaderForm />
            <CommunityMainTableBodyForm />
        </CommunityTable>
    </CommunityMainTableWrapper>
  )
}

export default CommunityMainTableForm;