import React from 'react'
import { EtcInfoWrapper, EtcTable } from "./EtcInfoTableForm.styled";
import PageTitle from '../../../../Common/PageTitle/PageTitle';
import { TableHeader, TableContent } from "../../EtcListDetailForm.styled";

const EtcInfoTableForm = () => {
  return (
    <>
    <EtcInfoWrapper>
      <PageTitle title="기타문의 정보"/>
      <EtcTable>
        <tbody>
          <tr>
            <TableHeader>제목</TableHeader>
            <TableContent>상세 내용 상세 내용 상세 내용</TableContent>
          </tr>
          <tr>
            <TableHeader style={{ width:"120px", height:"410px"}}>문의 내용</TableHeader>
            <TableContent style={{ width:"660px", height:"410px" }}>문의 내용</TableContent>
          </tr>
        </tbody>
      </EtcTable>
    </EtcInfoWrapper>
    </>
  )
}

export default EtcInfoTableForm;