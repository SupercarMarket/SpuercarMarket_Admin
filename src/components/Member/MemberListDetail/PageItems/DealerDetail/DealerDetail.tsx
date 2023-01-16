import React, { useState } from "react";
import { TitleDiv, Table } from "../../DealerDetailForm";
import { Button } from "../../../styles/buttonStyles";

import { Dealer } from "types/MemberType";

function DealerDetail({ dealerData }: { dealerData: Dealer }) {
  const [modifiedText, setModifiedText] = useState(dealerData.comment);
  const [isModifying, setIsModifying] = useState(false);

  const modifiedTextChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setModifiedText(event.target.value);
  };

  const handleModifyBtn = () => {
    setIsModifying(true);
  };

  const handleModifyFinishBtn = () => {
    dealerData.comment = modifiedText;
    setIsModifying(false);
  };

  return (
    <div>
      <TitleDiv>딜러 정보</TitleDiv>
      <Table>
        <tbody>
          <tr>
            <td className="title">상사명</td>
            <td className="content">{dealerData.companyName}</td>
            <td className="title">상사 전화번호</td>
            <td className="content">{dealerData.companyPhone}</td>
          </tr>
          <tr>
            <td className="title">상사 주소</td>
            <td className="content" colSpan={3}>
              {dealerData.companyAddress}
            </td>
          </tr>
          <tr>
            <td className="title">사원증 사진 앞면</td>
            <td className="content">
              <img src={dealerData.idCardFront} alt="idCardFront" />
            </td>
            <td className="title">사원증 사진 뒷면</td>
            <td className="content">
              <img src={dealerData.idCardBack} alt="idCardBack" />
            </td>
          </tr>
          <tr>
            <td className="title">프로필 사진</td>
            <td className="content" colSpan={3}>
              <img src={dealerData.profileImg} alt="profileImg" />
            </td>
          </tr>
          <tr>
            <td className="title">추가 전달 내용</td>
            <td className="content" colSpan={3}>
              {dealerData.additional}
            </td>
          </tr>
          <tr>
            <td className="title">Comment</td>
            <td className="content" colSpan={3}>
              {isModifying ? <input value={modifiedText} onChange={modifiedTextChangeHandler} /> : <span>{dealerData.comment}</span>}
            </td>
          </tr>
        </tbody>
      </Table>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "auto" }}>
        {isModifying ? <Button onClick={handleModifyFinishBtn}>수정 완료</Button> : <Button onClick={handleModifyBtn}>수정하기</Button>}
      </div>
    </div>
  );
}

export default DealerDetail;
