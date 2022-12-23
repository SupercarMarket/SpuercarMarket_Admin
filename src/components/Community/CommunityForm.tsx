import React from 'react'
import { Wrapper } from "./CommunityForm.styled";
import CommunityTopBannerForm from './PageItems/TopBanner/CommunityTopBannerForm';
import CommunityMainTableForm from './PageItems/Table/CommunityMainTableForm';

const CommunityForm = () => {
  return (
    <Wrapper>
      <CommunityTopBannerForm />
      <CommunityMainTableForm />
    </Wrapper>
  )
}

export default CommunityForm;