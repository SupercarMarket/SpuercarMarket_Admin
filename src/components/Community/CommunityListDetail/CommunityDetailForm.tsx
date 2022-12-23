import React from 'react'
import { CommunityInfoWrapper } from "./CommunityDetailForm.styled";
import DealerInfoTableForm from './Table/DealeInfoTable/DealerInfoTableForm';
import MemberInfoTableForm from './Table/MemberInfoTable/MemberInfoTableForm';

const CommunityDetailForm = () => {
  const isDealer = true;
  return (
    <CommunityInfoWrapper>
      { isDealer && <DealerInfoTableForm /> }
      <MemberInfoTableForm />
    </CommunityInfoWrapper>
  )
}

export default CommunityDetailForm;