import React from "react";
import PageTitle from "../../../../Common/PageTitle/PageTitle";
import {
  DealerInfoWrapper,
  DealerTable,
  DealerHeader,
  DealerContent,
  DealerPhotoHeader,
  DealerPhotoContent,
  DealerPhoto,
} from "./DealerInfoTableForm.styled";

const DealerInfoTableForm = () => {
  return (
    <>
      <DealerInfoWrapper>
        <PageTitle title={"딜러 정보"} />
        <DealerTable>
          <tbody>
            <tr>
              <DealerHeader>상사명</DealerHeader>
              <DealerContent>상사명 상사명</DealerContent>
              <DealerHeader>상사 전화번호</DealerHeader>
              <DealerContent>000-0000-0000</DealerContent>
            </tr>
            <tr>
              <DealerHeader>상사 주소</DealerHeader>
              <DealerContent colSpan={3}>상사명 상사명</DealerContent>
            </tr>
            <tr>
              {/* 조합 */}
              <DealerHeader>조합명</DealerHeader>
              <DealerContent>조합명 조합명</DealerContent>
              <DealerHeader>사원증 번호</DealerHeader>
              <DealerContent>11-123-12345</DealerContent>
            </tr>
            <tr>
              {/* 사원증 */}
              <DealerPhotoHeader>사원증 사진 앞면</DealerPhotoHeader>
              <DealerPhotoContent>
                <DealerPhoto />
              </DealerPhotoContent>
              <DealerPhotoHeader>사원증 사진 뒷면</DealerPhotoHeader>
              <DealerPhotoContent>
                <DealerPhoto />
              </DealerPhotoContent>
            </tr>
            <tr>
              {/* 프로필 사진 */}
              <DealerPhotoHeader>프로필 사진</DealerPhotoHeader>
              <DealerPhotoContent>
                <DealerPhoto />
              </DealerPhotoContent>
              <DealerPhotoContent colSpan={2} />
            </tr>
            <tr>
              {/* 추가 전달 내용 */}
              <DealerHeader style={{ height: "152px" }}>
                추가 전달 내용
              </DealerHeader>
              <DealerContent colSpan={3}>
                상사명 상사명 상사명 상사명상사명 상사명상사명 상사명상사명
                상사명상사명 상사명상사명 상사명상사명 상사명상사명 상사명상사명
                상사명상사명 상사명상사명 상사명상사명 상사명상사명 상사명상사명
                상사명상사명 상사명상사명 상사명상사명 상사명상사명 상사명상사명
                상사명상사명 상사명상사명 상사명상사명 상사명상사명 상사명상사명
                상사명상사명 상사명상사명 상사명상사명 상사명상사명 상사명상사명
                상사명상사명 상사명상사명 상사명상사명 상사명상사명 상사명상사명
                상사명상사명 상사명상사명 상사명상사명 상사명상사명 상사명상사명
                상사명상사명 상사명상사명 상사명상사명 상사명상사명 상사명상사명
                상사명
              </DealerContent>
            </tr>
          </tbody>
        </DealerTable>
      </DealerInfoWrapper>
    </>
  );
};

export default DealerInfoTableForm;
