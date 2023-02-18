import React from 'react'
import { TableHeader, TableContent } from "../../ForSaleListDetail/ForSaleListDetailForm.styled";
import { VehicleDetailForSaleInfoTableWrapper, VehicleDetailForSaleInfoTable } from "./VehicleDetailTableForm.styled";

const VehicleDetailTableForm = () => {
  return (
    <>
    <VehicleDetailForSaleInfoTableWrapper>
        <VehicleDetailForSaleInfoTable>
          <tbody>
            <tr>
            <TableHeader style={{height:"116px"}}>차량 설명글</TableHeader><TableContent style={{ width:"1480px"}}>상세 내용 상세 내용 상세 내용 상세 내용</TableContent>
            </tr>
          </tbody>
        </VehicleDetailForSaleInfoTable>
      </VehicleDetailForSaleInfoTableWrapper>
    </>
  )
}

export default VehicleDetailTableForm