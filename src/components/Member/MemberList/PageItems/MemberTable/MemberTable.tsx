import React, { useState } from "react";
import { Button } from "../../../styles/buttonStyles";
import { Table } from "./MemberTable.styled";

import { Member } from "types/MemberType";
import ClassChangeModal from "../ClassChangeModal/ClassChangeModal";

const classOptions: { [key: string]: string } = {
  "1": "브론즈",
  "2": "실버",
  "3": "골드",
  "4": "플레티넘",
  "5": "다이아",
};

type tableProps = {
  userList: Member[];
  doBan: Function;
  cancelBan: Function;
  checkedList: number[];
  setCheckedList: Function;
  changeClass: Function;
};

function MemberTable({ userList, doBan, cancelBan, checkedList, setCheckedList, changeClass }: tableProps) {
  const [isAllChecked, setIsAllChecked] = useState(false);

  const userCheckHandler = (userSeq: number, isChecked: boolean) => {
    if (isChecked) {
      setCheckedList([...checkedList, userSeq]);
    } else {
      setCheckedList(checkedList.filter((el) => el !== userSeq));
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
          checked.push(user.userSeq);
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
            <td style={{ width: "11.25%" }}>이름</td>
            <td>닉네임</td>
            <td>이메일</td>
            <td>댓글 수</td>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <React.Fragment key={user.userSeq}>
              <tr>
                <td rowSpan={2}>
                  <input type="checkbox" value={user.userSeq} onChange={checkboxHandler} checked={checkedList.includes(user.userSeq) ? true : false} disabled={user.isBanned} />
                </td>
                <td rowSpan={2}>{user.userSeq}</td>
                <td colSpan={2}>{user.userId}</td>
                <td>{user.userPhone}</td>
                <td rowSpan={2}>{user.createdDate}</td>
                <td rowSpan={2}>
                  <div style={{ display: "flex", margin: "0 auto", gap: "10px", justifyContent: "center" }}>
                    <div style={{ margin: "auto 0" }}>{classOptions[user.userRating]}</div>
                    <ClassChangeModal memberId={user.userSeq} currentClass={user.userRating.toString()} changeClass={changeClass} />
                  </div>
                </td>
                <td rowSpan={2}>
                  <div style={{ display: "flex", margin: "0 auto", gap: "10px", justifyContent: "center" }}>
                    <div style={{ margin: "auto 0" }}>{user.isDealer}</div>
                    {user.isDealer === true ? (
                      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                        <span>딜러</span>
                        <Button id={user.userSeq.toString()} onClick={dealerInfoBtnHandler} style={{ margin: "0px", width: "70px" }}>
                          정보
                        </Button>
                      </div>
                    ) : (
                      <span>일반</span>
                    )}
                  </div>
                </td>
                <td>{user.postNumber}</td>
                <td rowSpan={2}>
                  <div style={{ margin: "0 auto" }}>
                    {user.isBanned ? (
                      <Button style={{ margin: "auto" }} id={user.userSeq.toString()} onClick={cancelBanHandler}>
                        풀기
                      </Button>
                    ) : (
                      <Button style={{ margin: "auto" }} id={user.userSeq.toString()} onClick={doBanHandler}>
                        차단
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <td>{user.userName}</td>
                <td>{user.userNickName}</td>
                <td>{user.userEmail}</td>
                <td>{user.commentNumber}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MemberTable;
