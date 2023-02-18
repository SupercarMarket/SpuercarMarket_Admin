import React from "react";
import {
  TableHeader,
  TableContent,
} from "../../ForSaleListDetail/ForSaleListDetailForm.styled";
import {
  SubTitleForSaleIntoTableWrapper,
  SubTitleTable,
} from "./SubTitleTableForm.styeld";

const SubTitleTableForm = () => {
  return (
    <>
      <SubTitleForSaleIntoTableWrapper>
        <SubTitleTable>
          <tbody>
            <tr>
              <TableHeader>부제목</TableHeader>
              <TableContent style={{ width: "1480px" }}>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
            </tr>
          </tbody>
        </SubTitleTable>
      </SubTitleForSaleIntoTableWrapper>
    </>
  );
};

export default SubTitleTableForm;
