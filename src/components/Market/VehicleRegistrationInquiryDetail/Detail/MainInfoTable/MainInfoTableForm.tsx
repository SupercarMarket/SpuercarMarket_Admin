import React from "react";
import {
  MainForSaleInfoTable,
  MainForSaleInfoTableWrapper,
} from "./MainInfoTableForm.styled";
import {
  TableContent,
  TableHeader,
} from "../../../ForSaleListDetail/ForSaleListDetailForm.styled";
import { useAppSelector } from "../../../../../store/rootReducer";

const MainInfoTableForm = () => {
  const { inquiryDetailItem: inquiryDetailItem } = useAppSelector(
    (state) => state.ForSaleListSlice
  );

  return (
    <>
      <MainForSaleInfoTableWrapper>
        <MainForSaleInfoTable>
          <tbody>
            <tr>
              {/* 차량 정보 */}
              <TableHeader>차량정보</TableHeader>
              <TableContent>
                {inquiryDetailItem?.carNumber as string}
              </TableContent>
              {/* 차종 */}
              <TableHeader>차종</TableHeader>
              <TableContent>{inquiryDetailItem?.category}</TableContent>
              {/* 차량명 */}
              <TableHeader>차량명</TableHeader>
              <TableContent>{inquiryDetailItem?.carName}</TableContent>
              {/* 브랜드 */}
              <TableHeader>브랜드</TableHeader>
              <TableContent>{inquiryDetailItem?.brand}</TableContent>
            </tr>
            <tr>
              {/* 모델 */}
              <TableHeader>모델</TableHeader>
              <TableContent>{inquiryDetailItem?.model}</TableContent>
              {/* 변속기 */}
              <TableHeader>변속기</TableHeader>
              <TableContent>{inquiryDetailItem?.transmissionType}</TableContent>
              {/* 연식 */}
              <TableHeader>연식</TableHeader>
              <TableContent>{inquiryDetailItem?.regDate}</TableContent>
              {/* 형식연도 */}
              <TableHeader>형식연도</TableHeader>
              <TableContent>{inquiryDetailItem?.year}</TableContent>
            </tr>
            <tr>
              {/* 연료 */}
              <TableHeader>연료</TableHeader>
              <TableContent>{inquiryDetailItem?.fuel}</TableContent>
              {/* 배기량 */}
              <TableHeader>배기량</TableHeader>
              <TableContent>
                {inquiryDetailItem?.cc.replace(
                  /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                  ","
                )}
                cc
              </TableContent>
              {/* 주행거리 */}
              <TableHeader>주행거리</TableHeader>
              <TableContent>
                {inquiryDetailItem?.mileage
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                km
              </TableContent>
              {/* 색상 */}
              <TableHeader>색상</TableHeader>
              <TableContent>{inquiryDetailItem?.color}</TableContent>
            </tr>
            <tr>
              {/* 사고 여부 */}
              <TableHeader>사고여부</TableHeader>
              <TableContent>
                {inquiryDetailItem?.accident
                  ? "사고 경력 있음"
                  : "사고 경력 없음"}
              </TableContent>
              {/* 판매형태 */}
              <TableHeader>판매형태</TableHeader>
              <TableContent>{inquiryDetailItem?.sellType}</TableContent>
              {/* 판매가격 */}
              <TableHeader>판매가격</TableHeader>
              <TableContent>
                {inquiryDetailItem?.price.replace(
                  /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                  ","
                )}
              </TableContent>
            </tr>
          </tbody>
        </MainForSaleInfoTable>
      </MainForSaleInfoTableWrapper>
    </>
  );
};

export default MainInfoTableForm;
