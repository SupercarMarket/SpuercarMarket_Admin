import React from 'react'
import {
  CommunityTbody,
  CommunityTableContent,
  CommunityButton,
  CommunityTableBodyClamp,
  CommunityCheckBoxWrapper,
  CommunityInputCheckBox,
  CommunityLabelCheckBox
} from "./CommunityMainTableBodyForm.styled";

import { CommunityPropsType } from "../../../../../../types/CommunityType";

const CommunityMainTableBodyForm = ( { offset, postsPerPage, totalContentsCount } : CommunityPropsType ) => {
  return (
    <CommunityTbody>
      {Array( totalContentsCount ).fill( 0 ).slice( offset, offset + postsPerPage ).map( ( _, i ) => {
        return (
          <>
            <tr>
              <CommunityTableContent rowSpan={2}>
                <CommunityCheckBoxWrapper>
                  <CommunityInputCheckBox id="checkbox_body" />
                  <CommunityLabelCheckBox htmlFor="checkbox_body" />
                </CommunityCheckBoxWrapper>
              </CommunityTableContent>
              <CommunityTableContent rowSpan={2}>0000000</CommunityTableContent>
              <CommunityTableContent rowSpan={2}>
                내 차 자랑
              </CommunityTableContent>
              <CommunityTableContent
                rowSpan={2}
                style={{ textAlign: "left", padding: "19px 16px" }}
              >
                <CommunityTableBodyClamp>
                  제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </CommunityTableBodyClamp>
              </CommunityTableContent>
              <CommunityTableContent>0000000</CommunityTableContent>
              <CommunityTableContent>abcdegf</CommunityTableContent>
              <CommunityTableContent rowSpan={2}>
                2022-12-23
              </CommunityTableContent>
              <CommunityTableContent rowSpan={2}>
                <CommunityButton>숨기기</CommunityButton>
              </CommunityTableContent>
            </tr>
            <tr>
              <CommunityTableContent>작성자</CommunityTableContent>
              <CommunityTableContent>
                슈퍼카마켓슈퍼카마켓
              </CommunityTableContent>
            </tr>
          </>
        );
      })}
      {/* <tr>
        <CommunityTableContent rowSpan={2}>
          <CommunityCheckBoxWrapper>
            <CommunityInputCheckBox id="checkbox_body" />
            <CommunityLabelCheckBox htmlFor="checkbox_body" />
          </CommunityCheckBoxWrapper>
        </CommunityTableContent>
        <CommunityTableContent rowSpan={2}>0000000</CommunityTableContent>
        <CommunityTableContent rowSpan={2}>내 차 자랑</CommunityTableContent>
        <CommunityTableContent rowSpan={2} style={{ textAlign:"left", padding:"19px 16px"}}>
          <CommunityTableBodyClamp>
            제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
          </CommunityTableBodyClamp>
        </CommunityTableContent>
        <CommunityTableContent>0000000</CommunityTableContent>
        <CommunityTableContent>abcdegf</CommunityTableContent>
        <CommunityTableContent rowSpan={2}>2022-12-23</CommunityTableContent>
        <CommunityTableContent rowSpan={2}>
          <CommunityButton>숨기기</CommunityButton>
        </CommunityTableContent>
      </tr>
      <tr>
        <CommunityTableContent>작성자</CommunityTableContent>
        <CommunityTableContent>슈퍼카마켓슈퍼카마켓</CommunityTableContent>
      </tr> */}
    </CommunityTbody>
  );
}

export default CommunityMainTableBodyForm;