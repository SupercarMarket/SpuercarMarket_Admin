import React from 'react'
import { Wrapper, MainInfoTable } from "./MainInfoTableForm.styled";
import { TableContent, TableHeader } from "../../CooperationListDetail/CooperationListDetailForm.styled";

const MainInfoTableForm = () => {
  return (
    <Wrapper>
        <MainInfoTable>
            <tbody>
            <tr>
              {/* 업체 상호 */}
              <TableHeader>업체 상호</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
              {/* 대표자 */}
              <TableHeader>대표자</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
              {/* 업체 전화번호 */}
              <TableHeader>업체 전화번호</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
              {/* 휴대폰 */}
              <TableHeader>휴대폰</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
            </tr>
            <tr>
              {/* 업무 시간 */}
              <TableHeader>업무 시간</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
              {/* 업종 */}
              <TableHeader>업종</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
              {/* 취급 목록 */}
              <TableHeader>취급 목록</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
              {/* 업체 주소 */}
              <TableHeader>업체 주소</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
            </tr>
          </tbody>
        </MainInfoTable>
    </Wrapper>
  )
}

export default MainInfoTableForm