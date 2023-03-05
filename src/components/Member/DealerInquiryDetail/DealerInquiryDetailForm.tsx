import React, { useEffect, useState } from "react";
import MemberInfo from "../MemberDetail/PageItems/MemberInfo/MemberInfo";
import DealerInfo from "../MemberDetail/PageItems/DealerInfo/DealerInfo";

import { Container } from "../MemberDetail/MemberDetailForm.styled";

import ApproveRejectForm from "./PageItems/ApproveReject/ApproveRejectForm";

function DealerInquiryDetailForm() {
    let isLoading = true;
    return (
        <div style={{ padding: "40px", width: "100%" }}>
            {!isLoading ? (
                <Container>
                    <div>
                        <DealerInfo />
                        <ApproveRejectForm dlrSeq={1} />
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
