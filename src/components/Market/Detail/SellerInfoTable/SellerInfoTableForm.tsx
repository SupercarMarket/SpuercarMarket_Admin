import React from 'react'
import { SellerInfoWrapper } from "./SellerInfoTableForm.styled";
import DealerInfoTableForm from './DealerInfoTable/DealerInfoTableForm';
import MemberInfoTableForm from './MemberInfoTable/MemberInfoTableForm';

const SellerInfoTableForm = () => {
  return (
    <>
      <SellerInfoWrapper>
        {/* 딜러 정보 */}
        <DealerInfoTableForm />
        {/* 회원 정보 */}
        <MemberInfoTableForm />
      </SellerInfoWrapper>
    </>
  )
}

export default SellerInfoTableForm