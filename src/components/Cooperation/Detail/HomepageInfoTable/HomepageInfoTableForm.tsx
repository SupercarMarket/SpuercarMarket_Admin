import React from "react";
import { Wrapper, HomepageTable } from "./HompageInfoTableForm.styled";
import {
  TableContent,
  TableHeader,
} from "../../CooperationListDetail/CooperationListDetailForm.styled";
import { useAppSelector } from "../../../../store/rootReducer";

const HomepageInfoTableForm = () => {
  const { detailItem } = useAppSelector((state) => state.CooperationSlice);
  return (
    <Wrapper>
      <HomepageTable>
        <tbody>
          <tr>
            <TableHeader>홈페이지 주소</TableHeader>
            <TableContent style={{ width: "1480px" }}>
              {detailItem?.website}
            </TableContent>
          </tr>
        </tbody>
      </HomepageTable>
    </Wrapper>
  );
};

export default HomepageInfoTableForm;
