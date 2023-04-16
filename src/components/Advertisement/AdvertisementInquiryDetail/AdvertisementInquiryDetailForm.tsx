import React, {useEffect} from 'react'
import {TableWrapper, Wrapper,} from './AdvertisementInquiryDetailForm.styled';

import AdvertisementInquiryInfoTableForm
    from "./Detail/AdvertisementInquiryInfoTable/AdvertisementInquiryInfoTableForm";
import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../../store/rootReducer";
import {getAdvertisementInquiryDetail} from "../../../redux/modules/AdvertisementSlice";
import MemberInfoTableForm
    from "../../Advertisement/AdvertisementInquiryDetail/Detail/MemberInfoTable/MemberInfoTableForm";

const AdvertisementInquiryDetailForm = () => {
    const {brdSeq} = useParams();
    const dispatch = useAppDispatch();
    const {isLoading, updated} = useAppSelector((state) => state.AdvertisementSlice);
    useEffect(() => {
        dispatch(getAdvertisementInquiryDetail({brdSeq: brdSeq as string}));
    }, [brdSeq, dispatch, updated]);

    return (
        <>
            <Wrapper>
                {isLoading ? (
                    <div>조회 중입니다.</div>
                ) : (
                    <>
                        <TableWrapper>
                            <AdvertisementInquiryInfoTableForm/>
                            <MemberInfoTableForm/>
                        </TableWrapper>
                        {/*<ButtonWrapper>*/}
                        {/*    <Button onClick={() => advertisementEdit(detail)}*/}
                        {/*                    style={{marginRight: "8px"}}>수정하기</Button>*/}
                        {/*</ButtonWrapper>*/}
                    </>
                )}
            </Wrapper>

        </>
    );
}

export default AdvertisementInquiryDetailForm
