import React from "react";
import {
  TableHeader,
  TableContent,
} from "../../ForSaleListDetail/ForSaleListDetailForm.styled";
import {
  SubTitleForSaleIntoTableWrapper,
  SubTitleTable,
} from "./SubTitleTableForm.styeld";

import { useAppSelector } from "../../../../store/rootReducer";

const SubTitleTableForm = () => {
  const { detailItem } = useAppSelector( state => state.MarketSlice );
  return (
    <>
      <SubTitleForSaleIntoTableWrapper>
        <SubTitleTable>
          <tbody>
            <tr>
              <TableHeader>부제목</TableHeader>
              <TableContent style={{ width: "1480px" }}>
                {detailItem?.description}
              </TableContent>
            </tr>
          </tbody>
        </SubTitleTable>
      </SubTitleForSaleIntoTableWrapper>
    </>
  );
};

export default SubTitleTableForm;
