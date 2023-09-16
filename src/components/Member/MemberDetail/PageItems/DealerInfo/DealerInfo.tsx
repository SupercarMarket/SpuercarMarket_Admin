import React from "react";
import { TitleDiv, Table } from "../../MemberDetailForm.styled";
import { useAppSelector } from "store/rootReducer";

function DealerInfo() {
    const { detailItem } = useAppSelector((state) => state.MemberSlice);

    return (
        <div>
            <TitleDiv>딜러 정보</TitleDiv>
            <Table>
                <tbody>
                    <tr style={{ height: "53px" }}>
                        <td className="title" style={{ width: "15%" }}>
                            상사명
                        </td>
                        <td className="content" style={{ width: "35%" }}>
                            {detailItem?.comName}
                        </td>
                        <td className="title" style={{ width: "15%" }}>
                            상사 전화번호
                        </td>
                        <td className="content">{detailItem?.comPhone}</td>
                    </tr>
                    <tr style={{ height: "74px" }}>
                        <td className="title">상사 주소</td>
                        <td className="content" colSpan={3}>
                            {detailItem?.comAddress}
                        </td>
                    </tr>
                    <tr style={{ height: "53px" }}>
                        <td className="title">조합명</td>
                        <td className="content" colSpan={3}>
                            {detailItem?.guildName}
                        </td>
                    </tr>
                    <tr style={{ height: "152px" }}>
                        <td className="title">사원증 사진 앞면</td>
                        <td className="content">
                            <img src={detailItem?.dlrEmployeeCardFront} alt="idCardFront" />
                        </td>
                        <td className="title">사원증 사진 뒷면</td>
                        <td className="content">
                            <img src={detailItem?.dlrEmployeeCardBack} alt="idCardBack" />
                        </td>
                    </tr>
                    <tr style={{ height: "152px" }}>
                        <td className="title">프로필 사진</td>
                        <td className="content" colSpan={3}>
                            <img src={detailItem?.dlrProfileImage} alt="profileImg" />
                        </td>
                    </tr>
                    <tr style={{ height: "158px" }}>
                        <td className="title">추가 전달 내용</td>
                        <td className="content" colSpan={3}>
                            {detailItem?.comment}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default DealerInfo;
