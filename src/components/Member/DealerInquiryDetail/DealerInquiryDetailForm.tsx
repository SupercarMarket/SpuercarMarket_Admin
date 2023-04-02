import React, { useEffect } from "react";
import MemberInfoTableForm from "./PageItems/MemberInfo/MemberInfoTableForm";
import DealerInfoTableForm from "./PageItems/DealerInfo/DealerInfoTableForm";

import { Container } from "../MemberDetail/MemberDetailForm.styled";

import ApproveRejectForm from "./PageItems/ApproveReject/ApproveRejectForm";
import { useAppSelector, useAppDispatch } from "store/rootReducer";
import { useParams } from "react-router-dom";
import { getDealerInquiryListDetail } from "redux/modules/DealerInquirySlice";

function DealerInquiryDetailForm() {
    const { dlrSeq } = useParams();
    const { isLoading } = useAppSelector((state) => state.DealerInquirySlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getDealerInquiryListDetail({ dlrSeq: dlrSeq as string }));
    }, []);

    return (
        <div style={{ padding: "40px", width: "100%" }}>
            {!isLoading ? (
                <Container>
                    <div>
                        <DealerInfoTableForm />
                        <ApproveRejectForm dlrSeq={parseInt(dlrSeq as string)} />
                    </div>
                    <MemberInfoTableForm />
                </Container>
            ) : (
                <div>조회중입니다.</div>
            )}
        </div>
    );
}

export default DealerInquiryDetailForm;
