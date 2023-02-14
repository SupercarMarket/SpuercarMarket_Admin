import React from "react";
import { Button } from "../../../styles/buttonStyles";
import { Dealer } from "types/MemberType";
import { DealerTable } from "./DealerInquiryTable.styled";

type tableProps = {
  dealerList: Dealer[];
  doRegister: Function;
};

function DealerInquiryTableForm({ dealerList, doRegister }: tableProps) {
  const doRegisterHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    doRegister([parseInt(event.currentTarget.id)]);
  };

  return (
    <div className="table">
      <DealerTable>
        <thead>
          <tr>
            <td style={{ width: "10%" }}>상사명</td>
            <td style={{ width: "10%" }}>상사 전화번호</td>
            <td style={{ width: "10%" }}>조합명</td>
            <td rowSpan={2} style={{ width: "10%" }}>
              사원증 사진 앞면
            </td>
            <td rowSpan={2} style={{ width: "10%" }}>
              사원증 사진 뒷면
            </td>
            <td rowSpan={2} style={{ width: "10%" }}>
              프로필 사진
            </td>
            <td rowSpan={2}>추가 전달 내용</td>
            <td rowSpan={2} style={{ width: "10%" }}>
              딜러 등록
            </td>
          </tr>
          <tr>
            <td colSpan={2}>상사 주소</td>
            <td>사원증 번호</td>
          </tr>
        </thead>
        <tbody>
          {dealerList.map((dealer) => (
            <React.Fragment key={dealer.userSeq}>
              <tr>
                <td>{dealer.comName}</td>
                <td>{dealer.comPhone}</td>
                <td>{dealer.guildName}</td>
                <td rowSpan={2}>
                  <img src={dealer.dlrEmployeeCardFront} alt="idCardFront" />
                </td>
                <td rowSpan={2}>
                  <img src={dealer.dlrEmployeeCardBack} alt="idCardBack" />
                </td>
                <td rowSpan={2}>
                  <img src={dealer.dlrProfileImage} alt="profileImg" />
                </td>
                <td rowSpan={2}>{dealer.comment}</td>
                <td rowSpan={2}>
                  <div style={{ margin: "0 auto" }}>
                    <Button style={{ margin: "auto" }} id={dealer.userSeq.toString()} onClick={doRegisterHandler}>
                      딜러 등록
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>{dealer.comAddress}</td>
                <td>{dealer.dlrNum}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </DealerTable>
    </div>
  );
}

export default DealerInquiryTableForm;
