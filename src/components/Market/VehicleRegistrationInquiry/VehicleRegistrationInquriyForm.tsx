import React from 'react';
import { Wrapper } from "./VehicleRegistrationInquriyForm.styled";
import TopBannerForm from './PageItems/TopBanner/TopBannerForm';
import VehicleMainTableForm from './PageItems/Table/VehicleMainTableForm';

const VehicleRegistrationInquriyForm = () => {
  return (
    <Wrapper>
      <TopBannerForm />
      <VehicleMainTableForm />
    </Wrapper>
  )
}

export default VehicleRegistrationInquriyForm;