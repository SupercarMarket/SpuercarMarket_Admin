import React from "react";
import MemberInfo from "../MemberDetail/PageItems/MemberInfo/MemberInfo";
import DealerInfo from "../MemberDetail/PageItems/DealerInfo/DealerInfo";

import { Container } from "../MemberDetail/MemberDetailForm.styled";

import ApproveRejectForm from "./PageItems/ApproveReject/ApproveRejectForm";
import { useAppSelector } from "store/rootReducer";
import { useParams } from "react-router-dom";

function DealerInquiryDetailForm() {
    const { dlrSeq } = useParams();
    const { isLoading } = useAppSelector((state) => state.DealerInquirySlice);
    return (
        <div style={{ padding: "40px", width: "100%" }}>
            {!isLoading ? (
                <Container>
                    <div>
                        <DealerInfo />
                        <ApproveRejectForm dlrSeq={parseInt(dlrSeq as string)} />
                    </div>
                    <MemberInfo />
                </Container>
            ) : (
                <div>조회중입니다.</div>
            )}
        </div>
    );
}

export default DealerInquiryDetailForm;
