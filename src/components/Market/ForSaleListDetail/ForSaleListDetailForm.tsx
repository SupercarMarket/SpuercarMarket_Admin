import React, { useEffect } from "react";
import { useParams } from "react-router";
import {
  Wrapper,
  // 숨기기 & 숨기기 취소
  HiddenButtonWrapper,
  HiddenButton,
} from "./ForSaleListDetailForm.styled";
import PageTitle from "../../Common/PageTitle/PageTitle";
import MainInfoTableForm from "./Detail/MainInfoTable/MainInfoTableForm";
import SubTitleTableForm from "./Detail/SubTitleTable/SubTitleTableForm";
import VehicleDetailTableForm from "./Detail/VehicleDetailTable/VehicleDetailTableForm";
import PhotoRegistrationTableForm from "./Detail/PhotoRegistrationTable/PhotoRegistrationTableForm";
import DownLoadFileForm from "./Detail/DownLoadFile/DownLoadFileForm";
import SellerInfoTableForm from "./Detail/SellerInfoTable/SellerInfoTableForm";

import { getMarketListDetail } from "../../../redux/modules/MarketSlice";
import { useAppDispatch, useAppSelector } from "../../../store/rootReducer";
import ClientAxios from "../../../utils/api/AxiosAPI/ClientAxios";

const ForSaleListDetailForm = () => {
  const { saleId } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, detailItem } = useAppSelector(
    (state) => state.MarketSlice
  );

  useEffect(() => {
    dispatch(getMarketListDetail({ brdSeq: saleId as string }));
  }, [saleId, dispatch]);

  // 숨기기 버튼 동작
  const productHideHandler = async (brdSeq: any, pdtAppear: boolean) => {
    if (!pdtAppear) {
      await ClientAxios.post(`/product/hide`, [brdSeq], {
        // headers: {
        //   "Content-Type": "application/json",
        // },
      })
        .then((response) => {
          if (response.status === 200) {
            alert("[숨기기 완료]");
            // eslint-disable-next-line no-restricted-globals
            location.reload();
          }
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      const requestDto = {
        seq: brdSeq,
      };
      await ClientAxios.patch(`/product/un-hide`, requestDto, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 200) {
            alert("[숨기기 취소 완료]");
            // eslint-disable-next-line no-restricted-globals
            location.reload();
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <Wrapper>
      <PageTitle title={"판매차량 정보"} />
      {isLoading ? (
        <div>조회 중입니다.</div>
      ) : (
        <>
          {/* 판매 차량 종합 정보 */}
          <MainInfoTableForm />
          {/* 부제목 */}
          <SubTitleTableForm />
          {/* 차량 설명글 */}
          <VehicleDetailTableForm />
          {/* 사진 등록 */}
          <PhotoRegistrationTableForm />
          {/* 첨부 파일 */}
          <DownLoadFileForm />
          {/* 숨기기 버튼 */}
          <HiddenButtonWrapper>
            <HiddenButton
              onClick={() => productHideHandler(saleId, !detailItem?.appear)}
            >
              {detailItem?.appear ? "숨기기" : "숨기기 해제"}
            </HiddenButton>
          </HiddenButtonWrapper>
          {/* 판매자 정보 */}
          <SellerInfoTableForm />
        </>
      )}
    </Wrapper>
  );
};

export default ForSaleListDetailForm;
