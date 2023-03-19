import React from 'react'
import { Wrapper, HomepageTable } from "./HompageInfoTableForm.styled";
import { TableContent, TableHeader } from "../../CooperationListDetail/CooperationListDetailForm.styled";

const HomepageInfoTableForm = () => {
  return (
    <Wrapper>
      <HomepageTable>
        <tbody>
          <tr>
            <TableHeader>홈페이지 주소</TableHeader>
            <TableContent style={{ width: "1480px" }}>
              상세 내용 상세 내용 상세 내용 상세 내용
            </TableContent>
          </tr>
        </tbody>
      </HomepageTable>
    </Wrapper>
  );
}

export default HomepageInfoTableForm