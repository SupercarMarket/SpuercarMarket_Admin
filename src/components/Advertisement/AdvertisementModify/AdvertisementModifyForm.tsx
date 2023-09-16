import React, {useEffect} from 'react'
import {TableWrapper, Wrapper,} from './AdvertisementModifyForm.styled';

import AdvertisementModifyTableForm from "./edit/AdvertisementModifyTable/AdvertisementModifyTableForm";
import {useNavigate, useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../../store/rootReducer";
import {getAdvertisementDetail} from "../../../redux/modules/AdvertisementSlice";

const AdvertisementModifyForm = () => {
    const {brdSeq} = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {isLoading, updated} = useAppSelector((state) => state.AdvertisementSlice);
    useEffect(() => {
        console.log(brdSeq)
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
                            <AdvertisementModifyTableForm/>
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

export default AdvertisementModifyForm
