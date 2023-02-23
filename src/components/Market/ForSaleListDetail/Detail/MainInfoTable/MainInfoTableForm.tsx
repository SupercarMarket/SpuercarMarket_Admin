import React from "react";
import {
  MainForSaleInfoTableWrapper,
  MainForSaleInfoTable,
} from "./MainInfoTableForm.styled";
import {
  TableHeader,
  TableContent,
} from "../../../ForSaleListDetail/ForSaleListDetailForm.styled";

import { CategoryMap } from "../../../../../types/ForSaleList";
import { useAppSelector } from "../../../../../store/rootReducer";

const MainInfoTableForm = () => {
  const { detailItem } = useAppSelector( state => state.MarketSlice );
  
  return (
    <>
      <MainForSaleInfoTableWrapper>
        <MainForSaleInfoTable>
          <tbody>
            <tr>
              {/* 차량 정보 */}
              <TableHeader>차량정보</TableHeader>
              <TableContent>
                {detailItem?.carNumber}
              </TableContent>
              {/* 차종 */}
              <TableHeader>차종</TableHeader>
              <TableContent>
                { CategoryMap[ detailItem?.category as string]}
              </TableContent>
              {/* 차량명 */}
              <TableHeader>차량명</TableHeader>
              <TableContent>
                { detailItem?.carName }
              </TableContent>
              {/* 브랜드 */}
              <TableHeader>브랜드</TableHeader>
              <TableContent>
              { detailItem?.brand }
              </TableContent>
            </tr>
            <tr>
              {/* 모델 */}
              <TableHeader>모델</TableHeader>
              <TableContent>
              { detailItem?.model }
              </TableContent>
              {/* 변속기 */}
              <TableHeader>변속기</TableHeader>
              <TableContent>
              { detailItem?.trasmissionType }
              </TableContent>
              {/* 연식 */}
              <TableHeader>연식</TableHeader>
              <TableContent>
              { detailItem?.regDate }
              </TableContent>
              {/* 형식연도 */}
              <TableHeader>형식연도</TableHeader>
              <TableContent>
              { detailItem?.year }
              </TableContent>
            </tr>
            <tr>
              {/* 연료 */}
              <TableHeader>연료</TableHeader>
              <TableContent>
              { detailItem?.fuel }
              </TableContent>
              {/* 배기량 */}
              <TableHeader>배기량</TableHeader>
              <TableContent>
              { detailItem?.cc.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") }cc
              </TableContent>
              {/* 주행거리 */}
              <TableHeader>주행거리</TableHeader>
              <TableContent>
              { detailItem?.mileage.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") }km
              </TableContent>
              {/* 색상 */}
              <TableHeader>색상</TableHeader>
              <TableContent>
              { detailItem?.color }
              </TableContent>
            </tr>
            <tr>
              {/* 사고 여부 */}
              <TableHeader>사고여부</TableHeader>
              <TableContent>
              { detailItem?.accident ? "사고 경력 있음" : "무사고"}
              </TableContent>
              {/* 판매형태 */}
              <TableHeader>판매형태</TableHeader>
              <TableContent>
              { detailItem?.sellType }
              </TableContent>
              {/* 판매가격 */}
              <TableHeader>판매가격</TableHeader>
              <TableContent>
              { detailItem?.price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") }
              </TableContent>
            </tr>
          </tbody>
        </MainForSaleInfoTable>
      </MainForSaleInfoTableWrapper>
    </>
  );
};

export default MainInfoTableForm;
