import React from "react";
import { DealerInquiryTableBodyButton } from "./DealerInquiryTableBodyForm.styled";

type AcceptButtonProps = {
    accepted: "R" | "Y" | "N";
};

function AcceptedButtonForm({ accepted }: AcceptButtonProps) {
    if (accepted === "Y") {
        return <DealerInquiryTableBodyButton disabled>딜러 등록 완료</DealerInquiryTableBodyButton>;
    } else if (accepted === "N") {
        return <DealerInquiryTableBodyButton disabled>반려됨</DealerInquiryTableBodyButton>;
    } else {
        return <DealerInquiryTableBodyButton>바로 가기</DealerInquiryTableBodyButton>;
    }
}

export default AcceptedButtonForm;
