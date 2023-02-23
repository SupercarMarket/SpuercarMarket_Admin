import React from 'react'
import { TableHeader, TableContent, TableContentClamp } from "../../../ForSaleListDetail/ForSaleListDetailForm.styled";
import { VehicleDetailForSaleInfoTableWrapper, VehicleDetailForSaleInfoTable } from "./VehicleDetailTableForm.styled";

import { useAppSelector } from "../../../../../store/rootReducer";

const VehicleDetailTableForm = () => {
  const { detailItem } = useAppSelector( state => state.ForSaleListSlice );
  return (
    <>
      <VehicleDetailForSaleInfoTableWrapper>
        <VehicleDetailForSaleInfoTable>
          <tbody>
            <tr>
              <TableHeader style={{ height: "116px" }}>차량 설명글</TableHeader>
              <TableContent style={{ width: "1480px" }}>
                <TableContentClamp>{detailItem?.introduction}</TableContentClamp>
              </TableContent>
            </tr>
          </tbody>
        </VehicleDetailForSaleInfoTable>
      </VehicleDetailForSaleInfoTableWrapper>
    </>
  );
}

export default VehicleDetailTableForm