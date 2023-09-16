import React from "react";
import { TitleDiv, TableWrapper, TitleCell, ContentCell, TableImage } from "./DealerInfoTableForm.styled";
import { useAppSelector } from "store/rootReducer";

function DealerInfoTableForm() {
    const { detailItem } = useAppSelector((state) => state.DealerInquirySlice);

    return (
        <div>
            <TitleDiv>딜러 정보</TitleDiv>
            <TableWrapper>
                <tbody>
                    <tr style={{ height: "53px" }}>
                        <TitleCell style={{ width: "15%" }}>상사명</TitleCell>
                        <ContentCell style={{ width: "35%" }}>{detailItem?.comName}</ContentCell>
                        <TitleCell style={{ width: "15%" }}>상사 전화번호</TitleCell>
                        <ContentCell>{detailItem?.comPhone}</ContentCell>
                    </tr>
                    <tr style={{ height: "74px" }}>
                        <TitleCell>상사 주소</TitleCell>
                        <ContentCell colSpan={3}>{detailItem?.comAddress}</ContentCell>
                    </tr>
                    <tr style={{ height: "53px" }}>
                        <TitleCell>조합명</TitleCell>
                        <ContentCell colSpan={3}>{detailItem?.guildName}</ContentCell>
                    </tr>
                    <tr style={{ height: "152px" }}>
                        <TitleCell>사원증 사진 앞면</TitleCell>
                        <ContentCell>
                            <TableImage src={detailItem?.dlrEmployeeCardFront} alt="idCardFront" />
                        </ContentCell>
                        <TitleCell>사원증 사진 뒷면</TitleCell>
                        <ContentCell>
                            <TableImage src={detailItem?.dlrEmployeeCardBack} alt="idCardBack" />
                        </ContentCell>
                    </tr>
                    <tr style={{ height: "152px" }}>
                        <TitleCell>프로필 사진</TitleCell>
                        <ContentCell colSpan={3}>
                            <TableImage src={detailItem?.dlrProfileImage} alt="profileImg" />
                        </ContentCell>
                    </tr>
                    <tr style={{ height: "158px" }}>
                        <TitleCell>추가 전달 내용</TitleCell>
                        <ContentCell colSpan={3}>{detailItem?.comment}</ContentCell>
                    </tr>
                </tbody>
            </TableWrapper>
        </div>
    );
}

export default DealerInfoTableForm;
