import React from 'react';
import { Tbody, BodyButton, BodyContent, CheckBoxWrapper, InputCheckBox, LabelCheckBox } from "./TableBodyForm.styled";
import { CooperationPropsType } from "../../../../../../types/CooperationType";

const TableBodyForm = ( { offset, postsPerPage, totalContentsCount } : CooperationPropsType ) => {
  return (
    <Tbody>
      {Array(totalContentsCount)
        .fill(0)
        .slice(offset, offset + postsPerPage)
        .map((_, i) => {
          return (
            <>
              <tr key={i}>
                <BodyContent rowSpan={2}>
                  <CheckBoxWrapper>
                    <InputCheckBox id="checkbox_body" />
                    <LabelCheckBox htmlFor="checkbox_body" />
                  </CheckBoxWrapper>
                </BodyContent>
                <BodyContent rowSpan={2}>0000000</BodyContent>
                <BodyContent colSpan={2}>슈퍼카타이어</BodyContent>
                <BodyContent>공업사</BodyContent>
                <BodyContent>평일 09:00 ~ 18:00</BodyContent>
                <BodyContent>000-0000-0000</BodyContent>
                <BodyContent rowSpan={2}>
                  <BodyButton>숨기기</BodyButton>
                </BodyContent>
              </tr>
              <tr>
                <BodyContent>금종선</BodyContent>
                <BodyContent>서울특별시 서초구 양재대로 36길 11</BodyContent>
                <BodyContent>수입 타이어</BodyContent>
                <BodyContent>https://goldjongsun.cafe24.com/</BodyContent>
                <BodyContent>010-0000-0000</BodyContent>
              </tr>
            </>
          );
        })}
      {/* <tr>
        <BodyContent rowSpan={2}>
          <CheckBoxWrapper>
            <InputCheckBox id="checkbox_body"/>
            <LabelCheckBox htmlFor="checkbox_body"/>
          </CheckBoxWrapper>
        </BodyContent>
        <BodyContent rowSpan={2}>0000000</BodyContent>
        <BodyContent colSpan={2}>슈퍼카타이어</BodyContent>
        <BodyContent>공업사</BodyContent>
        <BodyContent>평일 09:00 ~ 18:00</BodyContent>
        <BodyContent>000-0000-0000</BodyContent>
        <BodyContent rowSpan={2}>
          <BodyButton>숨기기</BodyButton>
        </BodyContent>
      </tr>
      <tr>
        <BodyContent>금종선</BodyContent>
        <BodyContent>서울특별시 서초구 양재대로 36길 11</BodyContent>
        <BodyContent>수입 타이어</BodyContent>
        <BodyContent>https://goldjongsun.cafe24.com/</BodyContent>
        <BodyContent>010-0000-0000</BodyContent>
      </tr> */}
    </Tbody>
  );
}

export default TableBodyForm;