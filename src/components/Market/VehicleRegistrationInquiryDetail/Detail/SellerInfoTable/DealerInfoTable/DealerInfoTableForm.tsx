import React from "react";
import PageTitle from "../../../../../Common/PageTitle/PageTitle";
import {
  DealerInfoWrapper,
  DealerTable,
  DealerHeader,
  DealerContent,
  DealerPhotoHeader,
  DealerPhotoContent,
  DealerPhoto,
} from "./DealerInfoTableForm.styled";

import { useAppSelector } from "../../../../../../store/rootReducer";

const DealerInfoTableForm = () => {
  const { inquiryDetailItem } = useAppSelector(
    (state) => state.ForSaleListSlice
  );
  return (
    <>
      <DealerInfoWrapper>
        <PageTitle title={"딜러 정보"} />
        <DealerTable>
          <tbody>
            <tr>
              <DealerHeader>상사명</DealerHeader>
              <DealerContent>
                {inquiryDetailItem?.dealerInfo?.comName}
              </DealerContent>
              <DealerHeader>상사 전화번호</DealerHeader>
              <DealerContent>
                {inquiryDetailItem?.dealerInfo?.comPhone}
              </DealerContent>
            </tr>
            <tr>
              <DealerHeader>상사 주소</DealerHeader>
              <DealerContent colSpan={3}>
                {inquiryDetailItem?.dealerInfo?.comAddress}
              </DealerContent>
            </tr>
            <tr>
              {/* 조합 */}
              <DealerHeader>조합명</DealerHeader>
              <DealerContent>
                {inquiryDetailItem?.dealerInfo?.guildName}
              </DealerContent>
              <DealerHeader>사원증 번호</DealerHeader>
              <DealerContent>
                {inquiryDetailItem?.dealerInfo?.dlrNum}
              </DealerContent>
            </tr>
            <tr>
              {/* 사원증 */}
              <DealerPhotoHeader>사원증 사진 앞면</DealerPhotoHeader>
              <DealerPhotoContent>
                <DealerPhoto
                  src={inquiryDetailItem?.dealerInfo?.dlrEmployeeCardFront}
                  alt={"사원증 앞면"}
                />
              </DealerPhotoContent>
              <DealerPhotoHeader>사원증 사진 뒷면</DealerPhotoHeader>
              <DealerPhotoContent>
                <DealerPhoto
                  src={inquiryDetailItem?.dealerInfo?.dlrEmployeeCardBack}
                  alt={"사원증 후면"}
                />
              </DealerPhotoContent>
            </tr>
            <tr>
              {/* 프로필 사진 */}
              <DealerPhotoHeader>프로필 사진</DealerPhotoHeader>
              <DealerPhotoContent>
                <DealerPhoto
                  src={inquiryDetailItem?.dealerInfo?.dlrProfileImage}
                  alt={"프로필 사진"}
                />
              </DealerPhotoContent>
              <DealerPhotoContent colSpan={2} />
            </tr>
            <tr>
              {/* 추가 전달 내용 */}
              <DealerHeader style={{ height: "152px" }}>
                추가 전달 내용
              </DealerHeader>
              <DealerContent colSpan={3}>
                {inquiryDetailItem?.dealerInfo?.comment}
              </DealerContent>
            </tr>
          </tbody>
        </DealerTable>
      </DealerInfoWrapper>
    </>
  );
};

export default DealerInfoTableForm;
