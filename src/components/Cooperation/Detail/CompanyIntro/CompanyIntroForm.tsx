import React from "react";
import { CompanyIntroTable, Wrapper } from "./CompanyIntroForm.styled";
import {
  TableContent,
  TableHeader,
} from "../../CooperationListDetail/CooperationListDetailForm.styled";
import { useAppSelector } from "../../../../store/rootReducer";

const CompanyIntroForm = () => {
  const { detailItem } = useAppSelector((state) => state.CooperationSlice);
  return (
    <Wrapper>
      <CompanyIntroTable>
        <tbody>
          <tr>
            <TableHeader style={{ height: "116px" }}>업체 소개</TableHeader>
            <TableContent style={{ width: "1480px" }}>
              {detailItem?.contents}
            </TableContent>
          </tr>
        </tbody>
      </CompanyIntroTable>
    </Wrapper>
  );
};

export default CompanyIntroForm;
