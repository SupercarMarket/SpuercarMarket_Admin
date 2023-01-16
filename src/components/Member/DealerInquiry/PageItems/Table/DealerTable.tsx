import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../styles/buttonStyles";
import { Dealer } from "types/MemberType";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  thead {
    background: #f7f7f8;
    border-radius: 4px;
  }
  tbody {
    background: #ffffff;
    border-radius: 4px;
  }
  td {
    height: 40px;
    border: 1px solid lightgray;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #1e1e20;
    text-align: center;
    vertical-align: middle;
  }

  img {
    width: 100px;
  }
`;

type tableProps = {
  dealerList: Dealer[];
  doRegister: Function;
  checkedList: number[];
  setCheckedList: Function;
};

function UserTable({ dealerList, doRegister, checkedList, setCheckedList }: tableProps) {
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
        checked.push(dealer._id);
      });
      setCheckedList(checked);
    }
    setIsAllChecked(!isAllChecked);
  };

  return (
    <div className="table">
      <Table>
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
            <React.Fragment key={dealer._id}>
              <tr>
                <td rowSpan={2}>
                  <input type="checkbox" value={dealer._id} onChange={checkboxHandler} checked={checkedList.includes(dealer._id) ? true : false} />
                </td>
                <td>{dealer.companyName}</td>
                <td>{dealer.companyPhone}</td>
                <td>{dealer.unionName}</td>
                <td rowSpan={2}>
                  <img src={dealer.idCardFront} alt="idCardFront" />
                </td>
                <td rowSpan={2}>
                  <img src={dealer.idCardBack} alt="idCardBack" />
                </td>
                <td rowSpan={2}>
                  <img src={dealer.profileImg} alt="profileImg" />
                </td>
                <td rowSpan={2}>{dealer.additional}</td>
                <td rowSpan={2}>
                  <div style={{ margin: "0 auto" }}>
                    <Button style={{ margin: "auto" }} id={dealer._id.toString()} onClick={doRegisterHandler}>
                      딜러 등록
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>{dealer.companyAddress}</td>
                <td>{dealer.dealerNumber}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserTable;
