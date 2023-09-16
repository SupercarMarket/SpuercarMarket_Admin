import React, { useRef } from 'react'

import { useAppDispatch, useAppSelector } from '../../../../../../store/rootReducer';
import { useNavigate } from 'react-router';
import {
    EtcInquiryLabelCheckBox,
    EtcInquiryInputCheckBox,
    EtcInquiryCheckBoxWrapper,
    EtcInquiryTableBody,
    EtcInquiryTableBodyRowSpan, EtcInquiryTableBodyButton
} from "./EtcInquiryTableBodyForm.styled";
import {EtcInquiryListPropsType} from "../../../../../../types/EtcInquiryList";
import {EtcInquiryAction, setEtcInquiryProgress} from "../../../../../../redux/modules/EtcInquirySlice";
import { log } from 'console';

interface List{
    brdSeq : number,
    userSeq : number,
    phone : string,
    userId : string,
    title : string,
    progress : number,
    userName : string,
    nickname : string,
    contents : string,
    email : string
}

const EtcInquiryTableBodyForm = ({
     offset,
     postsPerPage,
     totalContentsCount,
 }: EtcInquiryListPropsType) => {
    const inputCheckTypeRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { list, checkList } = useAppSelector( state => state.EtcInquirySlice );


    // 항목 체크 박스 셋업
    const userCheckBoxClickHandler = ( brdSeq : number, isChecked : boolean ) => {
        dispatch( EtcInquiryAction.setEtcInquiryListEachChecked( { brdSeq, isChecked } ));
    };

    const inputCheckOnChangeHandler = ( event : React.ChangeEvent<HTMLInputElement> ) => {
        userCheckBoxClickHandler( parseInt(  event.target.id ), event.target.checked );
    };

    const EtcInquiryDetailOnClickHandler = ( brdSeq : number ) => {
        navigate(`/etcinquiry/${brdSeq}`);
    };
    const progressOnClickHandler = (brdSeq : number, progress : number) => {
        if (progress != 0) return;
        dispatch(setEtcInquiryProgress({checkList: [brdSeq]}));
    }
    return (
        <EtcInquiryTableBody>
            {
                list.map( ( item : List, index : number ) => {
                    return (
                        <React.Fragment key={item.brdSeq} >

                            <tr onClick={() => EtcInquiryDetailOnClickHandler(item.brdSeq)}>
                                <EtcInquiryTableBodyRowSpan rowSpan={2}
                                                            onClick={(event) => {
                                                                event.stopPropagation()
                                                            }}>
                                    <EtcInquiryCheckBoxWrapper>
                                        <EtcInquiryInputCheckBox
                                            id={item.brdSeq.toString()}
                                            ref={inputCheckTypeRef}
                                            onChange={(event) => {
                                                inputCheckOnChangeHandler(event)
                                            }}
                                            checked={checkList.includes(item.brdSeq) ? true : false}
                                        />
                                        <EtcInquiryLabelCheckBox htmlFor={item.brdSeq.toString()}/>
                                    </EtcInquiryCheckBoxWrapper>
                                </EtcInquiryTableBodyRowSpan>

                                <EtcInquiryTableBodyRowSpan rowSpan={2}>
                                    {String(item.userSeq.toString()).padStart(7, '0')}
                                </EtcInquiryTableBodyRowSpan>

                                <EtcInquiryTableBodyRowSpan colSpan={2}>
                                    {String(item.userId.toString())}
                                </EtcInquiryTableBodyRowSpan>

                                <EtcInquiryTableBodyRowSpan>
                                    {String(item.phone.toString())}
                                </EtcInquiryTableBodyRowSpan>

                                <EtcInquiryTableBodyRowSpan>
                                    {String(item.title.toString())}
                                </EtcInquiryTableBodyRowSpan>
                                <EtcInquiryTableBodyRowSpan rowSpan={2}
                                                            onClick={(event) => {
                                                                event.stopPropagation()
                                                            }}>
                                    <EtcInquiryTableBodyButton progress={item.progress}
                                                               onClick={() => progressOnClickHandler(item.brdSeq, item.progress)}>
                                        {{
                                            0: "완료",
                                            1: "완료됨",
                                            2: "답변됨"
                                        }[item.progress]
                                        }
                                    </EtcInquiryTableBodyButton>
                                </EtcInquiryTableBodyRowSpan>
                            </tr>
                            <tr  onClick={() => EtcInquiryDetailOnClickHandler(item.brdSeq)}>
                                <EtcInquiryTableBodyRowSpan>
                                    {String(item.userName)}
                                </EtcInquiryTableBodyRowSpan>

                                <EtcInquiryTableBodyRowSpan>
                                    {String(item.nickname)}
                                </EtcInquiryTableBodyRowSpan>

                                <EtcInquiryTableBodyRowSpan>
                                    {String(item.email)}
                                </EtcInquiryTableBodyRowSpan>

                                <EtcInquiryTableBodyRowSpan>
                                    {String(item.contents)}
                                </EtcInquiryTableBodyRowSpan>

                            </tr>
                        </React.Fragment>
                    );
                })
            }
        </EtcInquiryTableBody>
    )
};

export default EtcInquiryTableBodyForm