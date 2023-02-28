import React from 'react'
import { EtcInfoWrapper, EtcTable, TableHeader, TableContent } from "./EtcInquiryInfoTableForm.styled";
import PageTitle from '../../../../Common/PageTitle/PageTitle';
import {useAppSelector} from "../../../../../store/rootReducer";

const EtcInquiryInfoTableForm = () => {
    const { detailItem } = useAppSelector( state => state.EtcInquirySlice );
    return (
        <>
            <EtcInfoWrapper>
                <PageTitle title={"기타문의 정보"} />
                <EtcTable>
                    <tbody>
                    <tr>
                        <TableHeader>제목</TableHeader>
                        <TableContent>{detailItem?.title}</TableContent>
                    </tr>
                    <tr>
                        <TableHeader style={{ width:"120px", height:"410px"}}>문의 내용</TableHeader>
                        <TableContent style={{ width:"660px", height:"410px" }}>{detailItem?.contents}</TableContent>
                    </tr>
                    </tbody>
                </EtcTable>
            </EtcInfoWrapper>
        </>
    )
}

export default EtcInquiryInfoTableForm;