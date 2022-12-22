import React from 'react';
import {
  VehicleMainTableWrapper,
  VehicleSaleInfoTable
} from "./VehicleMainTableForm.styled";
import VehicleMainTableHeaderForm from './Header/VehicleMainTableHeaderForm';
import VehicleMainTableBodyForm from './Body/VehicleMainTableBodyForm';

const VehicleMainTableForm = () => {
  return (
    <VehicleMainTableWrapper>
      <VehicleSaleInfoTable>
        {/* 헤더 */}
        <VehicleMainTableHeaderForm />
        {/* 바디 */}
        <VehicleMainTableBodyForm />
      </VehicleSaleInfoTable>
    </VehicleMainTableWrapper>
  )
}

export default VehicleMainTableForm;