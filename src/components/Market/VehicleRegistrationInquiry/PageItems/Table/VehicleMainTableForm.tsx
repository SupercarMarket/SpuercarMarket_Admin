import React from 'react';
import {
  VehicleMainTableWrapper,
  VehicleSaleInfoTable
} from "./VehicleMainTableForm.styled";
import VehicleMainTableHeaderForm from './Header/VehicleMainTableHeaderForm';
import VehicleMainTableBodyForm from './Body/VehicleMainTableBodyForm';

import { VehicleMainTablePropsType } from "../../../../../types/VehicleMainList";

const VehicleMainTableForm = ( { offset, postsPerPage, totalContentsCount } : VehicleMainTablePropsType ) => {
  return (
    <VehicleMainTableWrapper>
      <VehicleSaleInfoTable>
        {/* 헤더 */}
        <VehicleMainTableHeaderForm />
        {/* 바디 */}
        <VehicleMainTableBodyForm
          offset={offset}
          postsPerPage={postsPerPage}
          totalContentsCount={totalContentsCount}
        />
      </VehicleSaleInfoTable>
    </VehicleMainTableWrapper>
  );
}

export default VehicleMainTableForm;