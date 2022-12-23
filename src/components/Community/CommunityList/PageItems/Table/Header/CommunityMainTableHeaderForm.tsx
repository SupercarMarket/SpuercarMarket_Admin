import React from 'react'
import {
  CommunityThead,
  CommunityTableHeader,
  CommunityCheckBoxWrapper,
  CommunityInputCheckBox,
  CommunityLabelCheckBox
} from "./CommnunityMainTableHeaderForm.styled";
import SmallDropDownForm from '../../../../../Common/SmallDropDown/SmallDropDownForm';

const CommunityMainTableHeaderForm = () => {
  return (
    <CommunityThead>
        <tr>
            <CommunityTableHeader rowSpan={2} style={{height:"80px", width:"80px"}}>
                <CommunityCheckBoxWrapper>
                    <CommunityInputCheckBox id="checkbox_header"/>
                    <CommunityLabelCheckBox htmlFor="checkbox_header"/>
                </CommunityCheckBoxWrapper>
            </CommunityTableHeader>
            <CommunityTableHeader rowSpan={2}>번호</CommunityTableHeader>
            <CommunityTableHeader rowSpan={2}>
              <div style={{ display:"flex", width:"100%", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
                <span style={{ marginBottom:"8px" }}>카테고리</span>
                <SmallDropDownForm category='community_list_category'/>
              </div>
            </CommunityTableHeader>
            <CommunityTableHeader rowSpan={2} style={{width:"560px"}}>제목</CommunityTableHeader>
            <CommunityTableHeader>작성자 회원번호</CommunityTableHeader>
            <CommunityTableHeader>작성자 아이디</CommunityTableHeader>
            <CommunityTableHeader rowSpan={2}>등록 일자</CommunityTableHeader>
            <CommunityTableHeader rowSpan={2}>숨기기</CommunityTableHeader>
        </tr>
        <tr>
            <CommunityTableHeader>작성자 이름</CommunityTableHeader>
            <CommunityTableHeader>작성자 닉네임</CommunityTableHeader>
        </tr>
    </CommunityThead>
  )
}

export default CommunityMainTableHeaderForm;