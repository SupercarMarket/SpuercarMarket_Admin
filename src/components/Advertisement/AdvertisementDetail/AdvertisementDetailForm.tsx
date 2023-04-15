import React, {useEffect} from 'react'
import {TableWrapper, Wrapper,} from './AdvertisementDetailForm.styled';

import AdvertisementInfoTableForm from "./Detail/AdvertisementInfoTable/AdvertisementInfoTableForm";
import {useNavigate, useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../../store/rootReducer";
import {getAdvertisementListDetail} from "../../../redux/modules/AdvertisementSlice";

const AdvertisementDetailForm = () => {
    const {brdSeq} = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {isLoading, detail, updated} = useAppSelector((state) => state.AdvertisementSlice);
    useEffect(() => {
        dispatch(getAdvertisementListDetail({brdSeq: brdSeq as string}));
    }, [brdSeq, dispatch, updated]);

    // 광고 수정으로 넘어가기
    const advertisementEdit = (detail: Object) => {
        navigate(`/advertisementlist/edit/${detail}`);
    };

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
