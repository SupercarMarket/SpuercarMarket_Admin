import React from "react";
import {
  VehicleSaleTbody,
  VehicleSaleTableContent,
  VehicleSaleButton,
  VehicleSaleTableBtnContent,
} from "./VehicleMainTableBodyForm.styled";

import { VehicleMainTablePropsType } from "../../../../../../types/VehicleMainList";
import { CategoryMap } from "../../../../../../types/ForSaleList";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../store/rootReducer";
import { useNavigate } from "react-router";
import {
  confrimForSaleItem,
  ForSaleListAction,
} from "../../../../../../redux/modules/ForSaleInquirySlice";

const VehicleMainTableBodyForm = ({
  offset,
  postsPerPage,
  totalContentsCount,
}: VehicleMainTablePropsType) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((state) => state.ForSaleListSlice);

  // 상세 페이지 이동
  const ForSaleDetailOnClickHandler = (brdSeq: number) => {
    if (window.confirm("상세 보기로 이동하시겠습니까?")) {
      navigate(`/saleinquriy/${brdSeq}`);
    }
  };

  // 매물 등록 승인
  const ConfirmForSaleItemClickHandler = (brdSeq: number) => {
    if (window.confirm("현재 매물을 승인하시겠습니까?")) {
      dispatch(ForSaleListAction.setForSaleListConfirm(brdSeq));
      dispatch(confrimForSaleItem({ brdSeq: brdSeq.toString() }));
    }
  };

  return (
    <>
      <VehicleSaleTbody>
        {list.map((item) => {
          return (
            <React.Fragment key={item.brdSeq}>
              <tr key={item.brdSeq}>
                <VehicleSaleTableContent
                  onClick={() => ForSaleDetailOnClickHandler(item.brdSeq)}
                >
                  {item.pinfCarNumber}
                </VehicleSaleTableContent>
                <VehicleSaleTableContent
                  onClick={() => ForSaleDetailOnClickHandler(item.brdSeq)}
                >
                  {CategoryMap[item.category]}
                </VehicleSaleTableContent>
                <VehicleSaleTableContent
                  onClick={() => ForSaleDetailOnClickHandler(item.brdSeq)}
                >
                  {item.brand}
                </VehicleSaleTableContent>
                <VehicleSaleTableContent
                  rowSpan={2}
                  onClick={() => ForSaleDetailOnClickHandler(item.brdSeq)}
                >
                  자동
                </VehicleSaleTableContent>
                <VehicleSaleTableContent
                  onClick={() => ForSaleDetailOnClickHandler(item.brdSeq)}
                >
                  {item.pinfRegDate}
                </VehicleSaleTableContent>
                <VehicleSaleTableContent
                  onClick={() => ForSaleDetailOnClickHandler(item.brdSeq)}
                >
                  {item.pinfFuel}
                </VehicleSaleTableContent>
                <VehicleSaleTableContent
                  onClick={() => ForSaleDetailOnClickHandler(item.brdSeq)}
                >
                  {String(item.pinfMileage).replace(
                    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                    ","
                  )}
                  km
                </VehicleSaleTableContent>
                <VehicleSaleTableContent
                  onClick={() => ForSaleDetailOnClickHandler(item.brdSeq)}
                >
                  {item.pinfAccidentHistory ? "사고 이력 있음" : "무사고"}
                </VehicleSaleTableContent>
                <VehicleSaleTableContent
                  rowSpan={2}
                  onClick={() => ForSaleDetailOnClickHandler(item.brdSeq)}
                >
                  {String(item.pdtPrice).replace(
                    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                    ","
                  )}
                  만
                </VehicleSaleTableContent>
                <VehicleSaleTableBtnContent rowSpan={2}>
                  <VehicleSaleButton
                    isAccepted={item.isAccepted}
                    onClick={() => ConfirmForSaleItemClickHandler(item.brdSeq)}
                  >
                    {item.isAccepted === "R"
                      ? "매물 승인"
                      : item.isAccepted === "Y"
                      ? "승인된 매물"
                      : "반려된 매물"}
                  </VehicleSaleButton>
                </VehicleSaleTableBtnContent>
              </tr>
              <tr>
                <VehicleSaleTableContent
                  colSpan={2}
                  onClick={() => ForSaleDetailOnClickHandler(item.brdSeq)}
                >
                  {item.title}
                </VehicleSaleTableContent>
                <VehicleSaleTableContent
                  onClick={() => ForSaleDetailOnClickHandler(item.brdSeq)}
                >
                  {item.model}
                </VehicleSaleTableContent>
                <VehicleSaleTableContent
                  onClick={() => ForSaleDetailOnClickHandler(item.brdSeq)}
                >
                  {item.pinfRegDate}년도
                </VehicleSaleTableContent>
                <VehicleSaleTableContent
                  onClick={() => ForSaleDetailOnClickHandler(item.brdSeq)}
                >
                  {item.pinfCc.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                  cc
                </VehicleSaleTableContent>
                <VehicleSaleTableContent
                  onClick={() => ForSaleDetailOnClickHandler(item.brdSeq)}
                >
                  {item.pinfColor}
                </VehicleSaleTableContent>
                <VehicleSaleTableContent
                  onClick={() => ForSaleDetailOnClickHandler(item.brdSeq)}
                >
                  {item.pdtSellType}
                </VehicleSaleTableContent>
              </tr>
            </React.Fragment>
          );
        })}
        {/* { Array( totalContentsCount ).fill( 0 ).slice( offset, offset + postsPerPage ).map( ( _, i ) => {
          return (
            <React.Fragment key={i}>
              <tr key={i}>
                <VehicleSaleTableContent>123가 1234</VehicleSaleTableContent>
                <VehicleSaleTableContent>스포츠카</VehicleSaleTableContent>
                <VehicleSaleTableContent>모 브랜드</VehicleSaleTableContent>
                <VehicleSaleTableContent rowSpan={2}>
                  자동
                </VehicleSaleTableContent>
                <VehicleSaleTableContent>0000년 00월</VehicleSaleTableContent>
                <VehicleSaleTableContent>고급 휘발유</VehicleSaleTableContent>
                <VehicleSaleTableContent>50,000km</VehicleSaleTableContent>
                <VehicleSaleTableContent>무사고</VehicleSaleTableContent>
                <VehicleSaleTableContent rowSpan={2}>
                  7000만
                </VehicleSaleTableContent>
                <VehicleSaleTableContent rowSpan={2}>
                  <VehicleSaleButton>매물 승인</VehicleSaleButton>
                </VehicleSaleTableContent>
              </tr>
              <tr>
                <VehicleSaleTableContent colSpan={2}>
                  페라리
                </VehicleSaleTableContent>
                <VehicleSaleTableContent>A 시리즈</VehicleSaleTableContent>
                <VehicleSaleTableContent>0000년도</VehicleSaleTableContent>
                <VehicleSaleTableContent>20000cc</VehicleSaleTableContent>
                <VehicleSaleTableContent>빨간색</VehicleSaleTableContent>
                <VehicleSaleTableContent>직접 거래</VehicleSaleTableContent>
              </tr>
            </React.Fragment>
          );
        })} */}
      </VehicleSaleTbody>
    </>
  );
};

export default VehicleMainTableBodyForm;
