import React, { useEffect } from "react";
import {
  EtcInquiryTableHeader,
  EtcInquiryTableHeaderRowSpan,
  EtcInquiryCheckBoxWrapper,
  EtcInquiryInputCheckBox,
  EtcInquiryLabelCheckBox,
} from "./EtcInquiryTableHeaderForm.styled";
import { useAppSelector, useAppDispatch } from "../../../../../../store/rootReducer";
import {EtcInquiryAction} from "../../../../../../redux/modules/EtcInquirySlice";

const EtcInquiryTableHeaderForm = () => {
  const { allChecked } = useAppSelector( state => state.EtcInquirySlice );
  const dispatch = useAppDispatch();
  const allCheckBoxClickHandler = ( event : React.ChangeEvent<HTMLInputElement> ) => {
    dispatch( EtcInquiryAction.setEtcInquiryListAllChecked( { allChecked : event.target.checked } ) );
  };

  return (
    <EtcInquiryTableHeader>
      <tr>
        <EtcInquiryTableHeaderRowSpan rowSpan={2} style={{width:"80px"}}>
          <EtcInquiryCheckBoxWrapper>
            <EtcInquiryInputCheckBox id="header_check" onChange={ event => allCheckBoxClickHandler( event )} checked={ allChecked }/>
            <EtcInquiryLabelCheckBox htmlFor="header_check" />
          </EtcInquiryCheckBoxWrapper>
        </EtcInquiryTableHeaderRowSpan>
        <EtcInquiryTableHeaderRowSpan rowSpan={2}>회원번호</EtcInquiryTableHeaderRowSpan>
        <EtcInquiryTableHeaderRowSpan colSpan={2} style={{width:"360px"}}>아이디</EtcInquiryTableHeaderRowSpan>
        <EtcInquiryTableHeaderRowSpan style={{width:"200px"}}>전화번호</EtcInquiryTableHeaderRowSpan>
        <EtcInquiryTableHeaderRowSpan style={{width:"540px"}}>제목</EtcInquiryTableHeaderRowSpan>
        <EtcInquiryTableHeaderRowSpan rowSpan={2}>상태</EtcInquiryTableHeaderRowSpan>


      </tr>
      <tr>
        <EtcInquiryTableHeaderRowSpan style={{width:"180px"}}>이름</EtcInquiryTableHeaderRowSpan>
        <EtcInquiryTableHeaderRowSpan style={{width:"180px"}}>닉네임</EtcInquiryTableHeaderRowSpan>
        <EtcInquiryTableHeaderRowSpan style={{width:"200px"}}>이메일</EtcInquiryTableHeaderRowSpan>
        <EtcInquiryTableHeaderRowSpan style={{width:"540px"}}>내용</EtcInquiryTableHeaderRowSpan>
      </tr>
    </EtcInquiryTableHeader>
  );
};

export default EtcInquiryTableHeaderForm;
