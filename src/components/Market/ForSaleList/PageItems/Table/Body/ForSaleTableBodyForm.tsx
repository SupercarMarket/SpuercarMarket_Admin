import React, { useRef } from 'react'
import {
  MarketTableBody,
  MarketTableBodyRowSpan,
  MarketCheckBoxWrapper,
  MarketInputCheckBox,
  MarketLabelCheckBox,
  MarketTableBodyClamp,
  MarketTableBodyNoSpan,
  MarketTableBodyButton
} from "./ForSaleTableBodyForm.styled";

import { ForSaleListPropsType, CategoryMap } from "../../../../../../types/ForSaleList";
import { MarketAction } from '../../../../../../redux/modules/MarketSlice';
import { useAppDispatch, useAppSelector } from '../../../../../../store/rootReducer'; 
import { useNavigate } from 'react-router';

const ForSaleTableBodyForm = ({
  offset,
  postsPerPage,
  totalContentsCount,
}: ForSaleListPropsType) => {
  const inputCheckTypeRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { list, checkList } = useAppSelector( state => state.MarketSlice );

  const inputCheckOnClickHandler = () => {
    console.log( inputCheckTypeRef.current?.checked );
  };

  // 항목 체크 박스 셋업
  const userCheckBoxClickHandler = ( brdSeq : number, isChecked : boolean ) => {
    dispatch( MarketAction.setMarketListEachChecked( { brdSeq, isChecked } ));
  };

  const inputCheckOnChangeHandler = ( event : React.ChangeEvent<HTMLInputElement> ) => {
    userCheckBoxClickHandler( parseInt(  event.target.id ), event.target.checked );
  };

  // 숨기기 버튼 동작
  const userHiddenButtonClickHandler = () => {

  };

  // 매물 디테일로 넘어가기
  const MarketDetailOnClickHandler = ( brdSeq : number ) => {
    navigate(`/salelist/${brdSeq}`);
  };

  return (
    <MarketTableBody key={`uuid`}>
      {
        list.slice( offset, offset + postsPerPage ).map( ( item, index ) => {
          return (
            <React.Fragment key={item.brdSeq}>
            <tr>
              <MarketTableBodyRowSpan rowSpan={2}>
                <MarketCheckBoxWrapper>
                  <MarketInputCheckBox
                    id={item.brdSeq.toString()}
                    ref={inputCheckTypeRef}
                    onClick={inputCheckOnClickHandler}
                    onChange={(event) => { inputCheckOnChangeHandler( event )}}
                    checked={ checkList.includes(item.brdSeq) ? true : false}
                  />
                  <MarketLabelCheckBox htmlFor={item.brdSeq.toString()} />
                </MarketCheckBoxWrapper>
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan rowSpan={2} style={{cursor:"pointer"}} onClick={()=>MarketDetailOnClickHandler( item.brdSeq )}>
                { String( item.brdSeq.toString() ).padStart( 7, '0')}
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan rowSpan={2} style={{cursor:"pointer"}}>
                {CategoryMap[item.category]}
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan
                rowSpan={2}
                style={{ textAlign: "left", padding: "8.5px 16px", cursor:"pointer" }}
              >
                <MarketTableBodyClamp>
                  {item.title}
                </MarketTableBodyClamp>
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan rowSpan={2} style={{cursor:"pointer"}}>
                {item.pdtStatus}
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan rowSpan={2} style={{cursor:"pointer"}}>
                {item.createdDate.split("T")[0]}
              </MarketTableBodyRowSpan>
              <MarketTableBodyNoSpan style={{cursor:"pointer"}}>{ String( item.dlrSeq.toString() ).padStart( 7, '0')}</MarketTableBodyNoSpan>
              <MarketTableBodyNoSpan style={{cursor:"pointer"}}>{item.userId}</MarketTableBodyNoSpan>
              <MarketTableBodyRowSpan rowSpan={2} >
                <MarketTableBodyButton>{ item.pdtApper ? '숨기기 취소' : '숨기기'}</MarketTableBodyButton>
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan rowSpan={2}>
                <MarketTableBodyButton>삭제하기</MarketTableBodyButton>
              </MarketTableBodyRowSpan>
            </tr>
            <tr>
              <MarketTableBodyNoSpan style={{cursor:"pointer"}}>{item.name}</MarketTableBodyNoSpan>
              <MarketTableBodyNoSpan style={{cursor:"pointer"}}>
                {item.userNickName}
              </MarketTableBodyNoSpan>
            </tr>
          </React.Fragment>
          )
        })
      }
    </MarketTableBody>
  );
};

export default ForSaleTableBodyForm