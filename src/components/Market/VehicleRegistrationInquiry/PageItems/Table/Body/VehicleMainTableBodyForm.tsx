import React from 'react'
import { VehicleSaleTbody, VehicleSaleTableContent, VehicleSaleButton } from "./VehicleMainTableBodyForm.styled";

const VehicleMainTableBodyForm = () => {
  return (
    <>
      <VehicleSaleTbody>
        <tr>
          <VehicleSaleTableContent>123가 1234</VehicleSaleTableContent>
          <VehicleSaleTableContent>스포츠카</VehicleSaleTableContent>
          <VehicleSaleTableContent>모 브랜드</VehicleSaleTableContent>
          <VehicleSaleTableContent rowSpan={2}>자동</VehicleSaleTableContent>
          <VehicleSaleTableContent>0000년 00월</VehicleSaleTableContent>
          <VehicleSaleTableContent>고급 휘발유</VehicleSaleTableContent>
          <VehicleSaleTableContent>50,000km</VehicleSaleTableContent>
          <VehicleSaleTableContent>무사고</VehicleSaleTableContent>
          <VehicleSaleTableContent rowSpan={2}>7000만</VehicleSaleTableContent>
          <VehicleSaleTableContent rowSpan={2}>
            <VehicleSaleButton>매물 승인</VehicleSaleButton>
          </VehicleSaleTableContent>
        </tr>
        <tr>
          <VehicleSaleTableContent colSpan={2}>페라리</VehicleSaleTableContent>
          <VehicleSaleTableContent>A 시리즈</VehicleSaleTableContent>
          <VehicleSaleTableContent>0000년도</VehicleSaleTableContent>
          <VehicleSaleTableContent>20000cc</VehicleSaleTableContent>
          <VehicleSaleTableContent>빨간색</VehicleSaleTableContent>
          <VehicleSaleTableContent>직접 거래</VehicleSaleTableContent>
        </tr>
      </VehicleSaleTbody>
    </>
  );
}

export default VehicleMainTableBodyForm;