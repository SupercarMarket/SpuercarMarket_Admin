import React, {useEffect} from 'react'
import {
    Wrapper,
    TableWrapper,
} from './AdvertisementEditForm.styled';

import AdvertisementEditTableForm from "./edit/AdvertisementEditTable/AdvertisementEditTableForm";
import {useNavigate, useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../../store/rootReducer";
import {
    getAdvertisementListDetail

} from "../../../redux/modules/AdvertisementSlice";

const AdvertisementEditForm = () => {
    const {brdSeq} = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {isLoading, detail, updated} = useAppSelector((state) => state.AdvertisementSlice);
    useEffect(() => {
        dispatch(getAdvertisementListDetail({brdSeq: brdSeq as string}));
    }, [brdSeq, dispatch, updated]);

    return (
        <>
            <Wrapper>
                {isLoading ? (
                    <div>조회 중입니다.</div>
                ) : (
                    <>
                        <TableWrapper>
                            <AdvertisementEditTableForm/>
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

export default AdvertisementEditForm
