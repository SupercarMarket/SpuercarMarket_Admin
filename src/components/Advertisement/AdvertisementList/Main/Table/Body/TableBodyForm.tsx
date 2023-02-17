import React from 'react'
import {
  Tbody,
  TableContent,
  TableBodyButton,
  TableBodyCheckBoxWrapper,
  TableBodyInputCheckBox,
  TableBodyLabelCheckBox
} from "./TableBodyForm.styled";

import { AdvertisementPopsType } from "../../../../../../types/AdvertisementType";

const TableBodyForm = ( { offset, postsPerPage, totalContentsCount } : AdvertisementPopsType ) => {
  return (
    <Tbody>
      { Array( totalContentsCount ).fill( 0 ).slice( offset, offset + postsPerPage ).map( ( _, i ) => {
        return (
          <>
            <tr key={i}>
              <TableContent rowSpan={2}>
                <TableBodyCheckBoxWrapper>
                  <TableBodyInputCheckBox id="checkbox_body" />
                  <TableBodyLabelCheckBox htmlFor="checkbox_body" />
                </TableBodyCheckBoxWrapper>
              </TableContent>
              <TableContent rowSpan={2}>0000000</TableContent>
              <TableContent>슈퍼카 타이어</TableContent>
              <TableContent
                rowSpan={2}
                style={{ textAlign: "left", paddingLeft: "16px" }}
              >
                홈, 매거진
              </TableContent>
              <TableContent>https://goldjongsun.cafe24.com/</TableContent>
              <TableContent>2022-10-01</TableContent>
              <TableContent>000,000원</TableContent>
              <TableContent rowSpan={2}>진행 중</TableContent>
              <TableContent rowSpan={2}>
                <TableBodyButton>종료</TableBodyButton>
              </TableContent>
            </tr>
            <tr>
              <TableContent>PC</TableContent>
              <TableContent>asgasddgsd.jpg</TableContent>
              <TableContent>2022-10-10</TableContent>
              <TableContent>000,000원</TableContent>
            </tr>
          </>
        );
      })}
    </Tbody>
    // <Tbody>
        // <tr>
        //     <TableContent rowSpan={2}>
        //         <TableBodyCheckBoxWrapper>
        //             <TableBodyInputCheckBox id="checkbox_body"/>
        //             <TableBodyLabelCheckBox htmlFor='checkbox_body'/>
        //         </TableBodyCheckBoxWrapper>
        //     </TableContent>
        //     <TableContent rowSpan={2}>0000000</TableContent>
        //     <TableContent>슈퍼카 타이어</TableContent>
        //     <TableContent rowSpan={2} style={{ textAlign:"left", paddingLeft:"16px"}}>홈, 매거진</TableContent>
        //     <TableContent>https://goldjongsun.cafe24.com/</TableContent>
        //     <TableContent>2022-10-01</TableContent>
        //     <TableContent>000,000원</TableContent>
        //     <TableContent rowSpan={2}>진행 중</TableContent>
        //     <TableContent rowSpan={2}>
        //         <TableBodyButton>종료</TableBodyButton>
        //     </TableContent>
        // </tr>
        // <tr>
        //     <TableContent>PC</TableContent>
        //     <TableContent>asgasddgsd.jpg</TableContent>
        //     <TableContent>2022-10-10</TableContent>
        //     <TableContent>000,000원</TableContent>
        // </tr>
    // </Tbody>
  )
}

export default TableBodyForm