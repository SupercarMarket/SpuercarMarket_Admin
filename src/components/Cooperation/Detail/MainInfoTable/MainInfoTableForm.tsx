import React from "react";
import { MainInfoTable, Wrapper } from "./MainInfoTableForm.styled";
import {
  TableContent,
  TableHeader,
} from "../../CooperationListDetail/CooperationListDetailForm.styled";
import { useAppSelector } from "../../../../store/rootReducer";
import { TypeOfBusiness } from "../../../../types/CommunityType";

const MainInfoTableForm = () => {
  const { detailItem } = useAppSelector((state) => state.CooperationSlice);

  return (
    <Wrapper>
      <MainInfoTable>
        <tbody>
          <tr>
            {/* 업체 상호 */}
            <TableHeader>업체 상호</TableHeader>
            <TableContent>{detailItem?.companyName}</TableContent>
            {/* 대표자 */}
            <TableHeader>대표자</TableHeader>
            <TableContent>{detailItem?.representative}</TableContent>
            {/* 업체 전화번호 */}
            <TableHeader>업체 전화번호</TableHeader>
            <TableContent>{detailItem?.wiredNumber}</TableContent>
            {/* 휴대폰 */}
            <TableHeader>휴대폰</TableHeader>
            <TableContent>{detailItem?.phoneNumber}</TableContent>
          </tr>
          <tr>
            {/* 업무 시간 */}
            <TableHeader>업무 시간</TableHeader>
            <TableContent>
              {detailItem?.workingTime}
              {/*{detailItem?.workingTime.split("-")[1]}:00{" "}*/}
            </TableContent>
            {/* 업종 */}
            <TableHeader>업종</TableHeader>
            <TableContent>
              {TypeOfBusiness[detailItem?.category as string]}
            </TableContent>
            {/* 취급 목록 */}
            <TableHeader>취급 목록</TableHeader>
            <TableContent>{detailItem?.treatedItem}</TableContent>
            {/* 업체 주소 */}
            <TableHeader>업체 주소</TableHeader>
            <TableContent>{detailItem?.address}</TableContent>
          </tr>
        </tbody>
      </MainInfoTable>
    </Wrapper>
  );
};

export default MainInfoTableForm;
