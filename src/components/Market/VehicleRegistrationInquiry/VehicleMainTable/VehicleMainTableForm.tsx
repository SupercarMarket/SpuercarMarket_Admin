import React from 'react';
import {
  VehicleMainTableWrapper,
  VehicleSaleInfoTable,
  VehicleSaleTbody,
  VehicleSaleTableContent,
  VehicleSaleButton
} from "./VehicleMainTableForm.styled";
import VehicleMainTableHeaderForm from '../PageItems/Table/Header/VehicleMainTableHeaderForm';
import VehicleMainTableBodyForm from '../PageItems/Table/Body/VehicleMainTableBodyForm';

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