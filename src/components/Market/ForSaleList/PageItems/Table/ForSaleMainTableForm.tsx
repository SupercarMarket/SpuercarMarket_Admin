import React from 'react'
import { TableWrapper, MarketTable } from "./ForSaleMainTableForm.styled";
import ForSaleTableHeaderForm from './Header/ForSaleTableHeaderForm';
import ForSaleTableBodyForm from './Body/ForSaleTableBodyForm';

const ForSaleMainTableForm = () => {
  return (
    <TableWrapper>
      <MarketTable>
        <ForSaleTableHeaderForm />
        <ForSaleTableBodyForm />
      </MarketTable>
    </TableWrapper>
  )
}

export default ForSaleMainTableForm