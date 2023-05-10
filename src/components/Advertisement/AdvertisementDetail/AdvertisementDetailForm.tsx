import React, {useEffect} from 'react'
import {TableWrapper, Wrapper,} from './AdvertisementDetailForm.styled';

import AdvertisementInfoTableForm from "./Detail/AdvertisementInfoTable/AdvertisementInfoTableForm";
import {useNavigate, useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../../store/rootReducer";
import {getAdvertisementDetail} from "../../../redux/modules/AdvertisementSlice";

const AdvertisementDetailForm = () => {
    const {brdSeq} = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {isLoading, updated} = useAppSelector((state) => state.AdvertisementSlice);
    useEffect(() => {
        dispatch(getAdvertisementDetail({brdSeq: brdSeq as string}));
    }, [brdSeq, dispatch, updated]);


    return (
        <>
            <Wrapper>
                {isLoading ? (
                    <div>조회 중입니다.</div>
                ) : (
                    <>
                        <TableWrapper>
                            <AdvertisementInfoTableForm/>
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

export default AdvertisementDetailForm
