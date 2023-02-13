import React, { useState } from "react";
import { Button } from "../../../styles/buttonStyles";
import { Dealer } from "types/MemberType";
import { DealerTable } from "./DealerInquiryTable.styled";

type tableProps = {
  dealerList: Dealer[];
  doRegister: Function;
  checkedList: number[];
  setCheckedList: Function;
};

function DealerInquiryTableForm({ dealerList, doRegister, checkedList, setCheckedList }: tableProps) {
  const [isAllChecked, setIsAllChecked] = useState(false);

  const userCheckHandler = (_id: number, isChecked: boolean) => {
    if (isChecked) {
      setCheckedList([...checkedList, _id]);
    } else {
      setCheckedList(checkedList.filter((el) => el !== _id));
    }
  };

  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    userCheckHandler(parseInt(event.target.value), event.target.checked);
  };

  const doRegisterHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    doRegister([parseInt(event.currentTarget.id)]);
  };

  const allCheckHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isAllChecked) {
      setCheckedList([]);
    } else {
      const checked: number[] = [];
      dealerList.forEach((dealer) => {
        checked.push(dealer.userSeq);
      });
      setCheckedList(checked);
    }
    setIsAllChecked(!isAllChecked);
  };

  return (
    <div className="table">
      <DealerTable>
        <thead>
          <tr>
            <td rowSpan={2}>
              <input type="checkbox" onChange={allCheckHandler} checked={isAllChecked} />
            </td>
            <td>상사명</td>
            <td>상사 전화번호</td>
            <td>조합명</td>
            <td rowSpan={2}>사원증 사진 앞면</td>
            <td rowSpan={2}>사원증 사진 뒷면</td>
            <td rowSpan={2}>프로필 사진</td>
            <td rowSpan={2}>추가 전달 내용</td>
            <td rowSpan={2}>딜러 등록</td>
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
                <td rowSpan={2}>
                  <input type="checkbox" value={dealer.userSeq} onChange={checkboxHandler} checked={checkedList.includes(dealer.userSeq) ? true : false} />
                </td>
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
