import React from "react";
import { DealerInquiryTableHeader, DealerInquiryTableHeaderRowSpan } from "./DealerInquiryTableHeaderForm.styled";

const DealerInquiryTableHeaderForm = () => {
    return (
        <DealerInquiryTableHeader>
            <tr>
                <DealerInquiryTableHeaderRowSpan style={{ width: "10%" }}>상사명</DealerInquiryTableHeaderRowSpan>
                <DealerInquiryTableHeaderRowSpan style={{ width: "10%" }}>상사 전화번호</DealerInquiryTableHeaderRowSpan>
                <DealerInquiryTableHeaderRowSpan style={{ width: "10%" }}>조합명</DealerInquiryTableHeaderRowSpan>
                <DealerInquiryTableHeaderRowSpan rowSpan={2} style={{ width: "10%" }}>
                    사원증 사진 앞면
                </DealerInquiryTableHeaderRowSpan>
                <DealerInquiryTableHeaderRowSpan rowSpan={2} style={{ width: "10%" }}>
                    사원증 사진 뒷면
                </DealerInquiryTableHeaderRowSpan>
                <DealerInquiryTableHeaderRowSpan rowSpan={2} style={{ width: "10%" }}>
                    프로필 사진
                </DealerInquiryTableHeaderRowSpan>
                <DealerInquiryTableHeaderRowSpan rowSpan={2}>추가 전달 내용</DealerInquiryTableHeaderRowSpan>
                <DealerInquiryTableHeaderRowSpan rowSpan={2} style={{ width: "10%" }}>
                    딜러 등록
                </DealerInquiryTableHeaderRowSpan>
            </tr>
            <tr>
                <DealerInquiryTableHeaderRowSpan colSpan={2}>상사 주소</DealerInquiryTableHeaderRowSpan>
                <DealerInquiryTableHeaderRowSpan>사원증 번호</DealerInquiryTableHeaderRowSpan>
            </tr>
        </DealerInquiryTableHeader>
    );
};

export default DealerInquiryTableHeaderForm;
