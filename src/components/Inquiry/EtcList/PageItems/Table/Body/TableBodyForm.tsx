import React from 'react'
import { Tbody, BodyButton, BodyContent, TableBodyClamp, CheckBoxWrapper, InputCheckBox, LabelCheckBox } from "./TableBodyForm.styled";
import { InquiryPropsType } from "../../../../../../types/InquiryType";

const TableBodyForm = ( { offset, postsPerPage, totalContentsCount } : InquiryPropsType ) => {
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
                <BodyContent colSpan={2}>abcdefg</BodyContent>
                <BodyContent>010-0000-0000</BodyContent>
                <BodyContent>문의합니다.</BodyContent>
                <BodyContent rowSpan={2}>
                  <BodyButton>완료</BodyButton>
                </BodyContent>
              </tr>
              <tr>
                <BodyContent>금종선</BodyContent>
                <BodyContent>슈퍼카마켓슈퍼카마켓</BodyContent>
                <BodyContent>0000000@gmail.com</BodyContent>
                <BodyContent>
                  <TableBodyClamp>
                    문의내용 문의내용 문의내용 문의내용 문의내용 문의내용
                    문의내용 문의내용 문의내용 문의내용 문의내용 문의내용
                    문의내용
                  </TableBodyClamp>
                </BodyContent>
              </tr>
            </>
          );
        })}
    </Tbody>
  );
}

export default TableBodyForm;