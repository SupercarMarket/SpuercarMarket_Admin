import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./buttonStyles";

import { User } from "types/MemberType";
import ClassChangeModal from "../ClassChangeModal/ClassChangeModal";

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
`;

const classOptions: { [key: string]: string } = {
  "1": "브론즈",
  "2": "실버",
  "3": "골드",
  "4": "플레티넘",
  "5": "다이아",
};

type tableProps = {
  userList: User[];
  doBan: Function;
  cancelBan: Function;
  checkedList: number[];
  setCheckedList: Function;
  changeClass: Function;
};

function UserTable({ userList, doBan, cancelBan, checkedList, setCheckedList, changeClass }: tableProps) {
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

  const cancelBanHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    cancelBan(parseInt(event.currentTarget.id));
  };

  const doBanHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    doBan([parseInt(event.currentTarget.id)]);
  };

  const allCheckHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (isAllChecked) {
      setCheckedList([]);
    } else {
      const checked: number[] = [];
      userList.forEach((user) => {
        if (!user.isBanned) {
          checked.push(user._id);
        }
      });
      setCheckedList(checked);
    }
    setIsAllChecked(!isAllChecked);
  };

  const dealerInfoBtnHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(event.currentTarget.id);
  };

  return (
    <div className="table">
      <Table>
        <thead>
          <colgroup>
            <col style={{ width: "5%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "22.5%" }} />
            <col style={{ width: "12.5%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
          </colgroup>
          <tr>
            <td rowSpan={2} style={{ width: "5%" }}>
              <input type="checkbox" onChange={allCheckHandler} checked={isAllChecked} />
            </td>
            <td rowSpan={2} style={{ width: "10%" }}>
              회원번호
            </td>
            <td colSpan={2} style={{ width: "22.5%" }}>
              아이디
            </td>
            <td style={{ width: "12.5%" }}> 전화번호</td>
            <td rowSpan={2} style={{ width: "10%" }}>
              가입일자
            </td>
            <td rowSpan={2} style={{ width: "10%" }}>
              회원등급
            </td>
            <td rowSpan={2} style={{ width: "10%" }}>
              Role
            </td>
            <td style={{ width: "10%" }}>게시글 수</td>
            <td rowSpan={2} style={{ width: "10%" }}>
              회원차단
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td>닉네임</td>
            <td>이메일</td>
            <td>댓글 수</td>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <React.Fragment key={user._id}>
              <tr>
                <td rowSpan={2}>
                  <input type="checkbox" value={user._id} onChange={checkboxHandler} checked={checkedList.includes(user._id) ? true : false} disabled={user.isBanned} />
                </td>
                <td rowSpan={2}>{user._id}</td>
                <td colSpan={2}>{user.userid}</td>
                <td>{user.phone}</td>
                <td rowSpan={2}>{user.signupDate}</td>
                <td rowSpan={2}>
                  <div style={{ display: "flex", margin: "0 auto", gap: "10px", justifyContent: "center" }}>
                    <div style={{ margin: "auto 0" }}>{classOptions[user.class]}</div>
                    <ClassChangeModal memberId={user._id} currentClass={user.class} changeClass={changeClass} />
                  </div>
                </td>
                <td rowSpan={2}>
                  <div style={{ display: "flex", margin: "0 auto", gap: "10px", justifyContent: "center" }}>
                    <div style={{ margin: "auto 0" }}>{user.role}</div>
                    {user.role === "딜러" ? (
                      <Button id={user._id.toString()} onClick={dealerInfoBtnHandler} style={{ margin: "0px", width: "70px" }}>
                        정보
                      </Button>
                    ) : (
                      ""
                    )}
                  </div>
                </td>
                <td>{user.postNumber}</td>
                <td rowSpan={2}>
                  <div style={{ margin: "0 auto" }}>
                    {user.isBanned ? (
                      <Button style={{ margin: "auto" }} id={user._id.toString()} onClick={cancelBanHandler}>
                        풀기
                      </Button>
                    ) : (
                      <Button style={{ margin: "auto" }} id={user._id.toString()} onClick={doBanHandler}>
                        차단
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <td>{user.username}</td>
                <td>{user.nickname}</td>
                <td>{user.email}</td>
                <td>{user.replyNumber}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserTable;
