import React from "react";
import {
  VehicleSaleThead,
  VehicleSaleTableHeader,
} from "./VehicleMainTableHeaderForm.styled";

const VehicleMainTableHeaderForm = () => {
  return (
    <>
      <VehicleSaleThead>
        <tr>
          <VehicleSaleTableHeader style={{ width: "220px" }}>
            차량정보
          </VehicleSaleTableHeader>
          <VehicleSaleTableHeader style={{ width: "220px" }}>
            차종
          </VehicleSaleTableHeader>
          <VehicleSaleTableHeader>브랜드</VehicleSaleTableHeader>
          <VehicleSaleTableHeader rowSpan={2}>변속기</VehicleSaleTableHeader>
          <VehicleSaleTableHeader>최초등록일</VehicleSaleTableHeader>
          <VehicleSaleTableHeader>연료</VehicleSaleTableHeader>
          <VehicleSaleTableHeader>주행거리</VehicleSaleTableHeader>
          <VehicleSaleTableHeader>사고여부</VehicleSaleTableHeader>
          <VehicleSaleTableHeader rowSpan={2}>판매가격</VehicleSaleTableHeader>
          <VehicleSaleTableHeader rowSpan={2}>매물 승인</VehicleSaleTableHeader>
        </tr>
        <tr>
          <VehicleSaleTableHeader colSpan={2}>차량명</VehicleSaleTableHeader>
          <VehicleSaleTableHeader>모델</VehicleSaleTableHeader>
          <VehicleSaleTableHeader>형식연도</VehicleSaleTableHeader>
          <VehicleSaleTableHeader>배기량</VehicleSaleTableHeader>
          <VehicleSaleTableHeader>색상</VehicleSaleTableHeader>
          <VehicleSaleTableHeader>판매형태</VehicleSaleTableHeader>
        </tr>
      </VehicleSaleThead>
    </>
  );
};

export default VehicleMainTableHeaderForm;
