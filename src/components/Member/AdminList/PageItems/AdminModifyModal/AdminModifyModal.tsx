import React, { useState, useEffect } from "react";
import { Button } from "../../../styles/buttonStyles";
import { ModalBackground, ModalContainer, Input, InputRow, InputTable } from "./AdminModifyModal.styled";

import { Admin } from "types/MemberType";

import axios from "axios";

type AdminModifyModalProps = {
  adminData: Admin;
};

function AdminModifyModalForm({ adminData }: AdminModifyModalProps) {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [adminName, setAdminName] = useState("");
  const [adminPhoneNumber, setAdminPhoneNumber] = useState("");
  const [adminNickName, setAdminNickName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");

  useEffect(() => {
    setAdminName(adminData.admName);
    setAdminPhoneNumber(adminData.admPhone);
    setAdminEmail(adminData.admEmail);
  }, []);

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdminName(event.currentTarget.value);
  };

  const phoneNumberChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdminPhoneNumber(event.currentTarget.value);
  };

  const nickNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdminNickName(event.currentTarget.value);
  };

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdminEmail(event.currentTarget.value);
  };

  const openModalHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsShowModal(true);
  };

  const closeModalHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsShowModal(false);
  };

  const modifyAdmin = () => {
    axios
      .patch(
        "/super-admin/v1/admin/info",
        {
          adminSeq: 10,
          name: adminName,
          phone: adminPhoneNumber,
          nickname: adminNickName,
          email: adminEmail,
        },
        {
          headers: {
            ACCESS_TOKEN: process.env.REACT_APP_TOKEN,
            REFRESH_TOKEN: process.env.REACT_APP_R_TOKEN,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setIsShowModal(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Button onClick={openModalHandler}>수정하기</Button>
      {isShowModal && (
        <>
          <ModalBackground onClick={closeModalHandler}></ModalBackground>
          <ModalContainer>
            <div className="Title">수정하기</div>
            <InputTable>
              <InputRow>
                <div>이름</div>
                <Input placeholder="이름을 입력해주세요." value={adminName} onChange={nameChangeHandler} />
              </InputRow>
              <InputRow>
                <div>전화번호</div>
                <Input placeholder="전화번호를 입력해주세요." value={adminPhoneNumber} onChange={phoneNumberChangeHandler} />
              </InputRow>
              <InputRow>
                <div>닉네임</div>
                <Input placeholder="닉네임을 입력해주세요." value={adminNickName} onChange={nickNameChangeHandler} />
              </InputRow>
              <InputRow>
                <div>이메일</div>
                <Input placeholder="이메일을 입력해주세요." value={adminEmail} onChange={emailChangeHandler} />
              </InputRow>
            </InputTable>
            <div className="Button">
              <Button style={{ width: "120px", height: "44px" }} onClick={closeModalHandler}>
                취소
              </Button>
              <Button style={{ width: "120px", height: "44px" }} className="brown" onClick={modifyAdmin}>
                수정 완료
              </Button>
            </div>
          </ModalContainer>
        </>
      )}
    </>
  );
}

export default AdminModifyModalForm;
