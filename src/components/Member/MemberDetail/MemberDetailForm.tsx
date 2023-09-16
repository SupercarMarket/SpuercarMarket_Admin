import React, { useEffect } from "react";
import { useParams } from "react-router";

import DealerInfo from "./PageItems/DealerInfo/DealerInfo";
import UserInfo from "./PageItems/MemberInfo/MemberInfo";
import ApproverInfo from "./PageItems/ApproverInfo/ApproverInfo";

import { Container } from "./MemberDetailForm.styled";

import { getMemberListDetail } from "redux/modules/MemberSlice";
import { useAppDispatch, useAppSelector } from "store/rootReducer";

function MemberDetailForm() {
    const { dlrSeq } = useParams();
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector((state) => state.MemberSlice);

    useEffect(() => {
        dispatch(getMemberListDetail({ dlrSeq: dlrSeq as string }));
    }, [dlrSeq, dispatch]);

    return (
        <Container>
            {!isLoading ? (
                <>
                    <DealerInfo />
                    <div>
                        <UserInfo />
                        <ApproverInfo />
                    </div>
                </>
            ) : (
                <div>조회중입니다.</div>
            )}
        </Container>
    );
}

export default MemberDetailForm;
