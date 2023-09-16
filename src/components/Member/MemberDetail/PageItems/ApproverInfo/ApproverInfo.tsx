import React from "react";
import { TitleDiv, Table } from "../../MemberDetailForm.styled";
import { useAppSelector } from "store/rootReducer";

function ApproverDetail() {
    const { detailItem } = useAppSelector((state) => state.MemberSlice);

    return (
        <div>
            <TitleDiv>딜러 정보</TitleDiv>
            <Table>
                <tbody>
                    <tr style={{ height: "53px" }}>
                        <td className="title" style={{ width: "15%" }}>
                            닉네임
                        </td>
                        <td className="content">{detailItem?.regAdmin}</td>
                    </tr>
                    <tr style={{ height: "53px" }}>
                        <td className="title">닉네임</td>
                        <td className="content">{detailItem?.regAdminNickname}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default ApproverDetail;
