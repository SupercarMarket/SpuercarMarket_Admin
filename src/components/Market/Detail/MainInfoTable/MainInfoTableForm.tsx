import React from "react";
import {
  MainForSaleInfoTableWrapper,
  MainForSaleInfoTable,
} from "./MainInfoTableForm.styled";
import {
  TableHeader,
  TableContent,
} from "../../ForSaleListDetail/ForSaleListDetailForm.styled";

const MainInfoTableForm = () => {
  return (
    <>
      <MainForSaleInfoTableWrapper>
        <MainForSaleInfoTable>
          <tbody>
            <tr>
              {/* 차량 정보 */}
              <TableHeader>차량정보</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
              {/* 차종 */}
              <TableHeader>차종</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
              {/* 차량명 */}
              <TableHeader>차량명</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
              {/* 브랜드 */}
              <TableHeader>브랜드</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
            </tr>
            <tr>
              {/* 모델 */}
              <TableHeader>모델</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
              {/* 변속기 */}
              <TableHeader>변속기</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
              {/* 연식 */}
              <TableHeader>연식</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
              {/* 형식연도 */}
              <TableHeader>형식연도</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
            </tr>
            <tr>
              {/* 연료 */}
              <TableHeader>연료</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
              {/* 배기량 */}
              <TableHeader>배기량</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
              {/* 주행거리 */}
              <TableHeader>주행거리</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
              {/* 색상 */}
              <TableHeader>색상</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
            </tr>
            <tr>
              {/* 사고 여부 */}
              <TableHeader>사고여부</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
              {/* 판매형태 */}
              <TableHeader>판매형태</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
              {/* 판매가격 */}
              <TableHeader>판매가격</TableHeader>
              <TableContent>
                상세 내용 상세 내용 상세 내용 상세 내용
              </TableContent>
            </tr>
          </tbody>
        </MainForSaleInfoTable>
      </MainForSaleInfoTableWrapper>
    </>
  );
};

export default MainInfoTableForm;
