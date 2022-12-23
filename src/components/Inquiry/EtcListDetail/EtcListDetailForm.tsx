import React from 'react'
import { Wrapper, TableWrapper, CompleteButton, CompleteButtonWrapper } from "./EtcListDetailForm.styled"
import EtcInfoTableForm from './Table/EtcInfoTable/EtcInfoTableForm'
import MemberInfoTableForm from './Table/MemberInfoTable/MemberInfoTableForm'

const EtcListDetailForm = () => {
  return (
    <Wrapper>
      <TableWrapper>
        <EtcInfoTableForm />
        <MemberInfoTableForm />
      </TableWrapper>
      <CompleteButtonWrapper>
        <CompleteButton>완료</CompleteButton>
      </CompleteButtonWrapper>
    </Wrapper>
  )
}

export default EtcListDetailForm