import React from 'react'
import { TableWrapper, MarketTable } from "./ForSaleMainTableForm.styled";
import ForSaleTableHeaderForm from './Header/ForSaleTableHeaderForm';
import ForSaleTableBodyForm from './Body/ForSaleTableBodyForm';

import { ForSaleListPropsType } from "../../../../../types/ForSaleList";

const ForSaleMainTableForm = ({
  offset,
  postsPerPage,
  totalContentsCount,
}: ForSaleListPropsType) => {
  return (
    <TableWrapper>
      <MarketTable>
        <ForSaleTableHeaderForm />
        <ForSaleTableBodyForm
          offset={offset}
          postsPerPage={postsPerPage}
          totalContentsCount={totalContentsCount}
        />
      </MarketTable>
    </TableWrapper>
  );
};

export default ForSaleMainTableForm