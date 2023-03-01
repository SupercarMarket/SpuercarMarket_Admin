import React, { useState } from "react";
import axios from "axios";

import { Button } from "../../../styles/buttonStyles";
import { ModalBackground, ModalContainer, Input, InputTable, InputRow } from "./NewAdminModal.styled";

function NewAdminModalForm() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [adminName, setAdminName] = useState("");
  const [adminPhoneNumber, setAdminPhoneNumber] = useState("");
  const [adminEmail, setAdminEmail] = useState("");

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdminName(event.currentTarget.value);
  };

  const phoneNumberChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdminPhoneNumber(event.currentTarget.value);
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

  const registerAdmin = () => {
    axios
      .post(
        "/super-admin/v1/admin/add",
        {
          name: adminName,
          phone: adminPhoneNumber,
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
        setAdminName("");
        setAdminPhoneNumber("");
        setAdminEmail("");
        setIsShowModal(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Button onClick={openModalHandler}>신규 관리자 등록</Button>
      {isShowModal && (
        <>
          <ModalBackground onClick={closeModalHandler}></ModalBackground>
          <ModalContainer>
            <div className="Title">신규 관리자 등록</div>
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
                <div>이메일</div>
                <Input placeholder="이메일을 입력해주세요." value={adminEmail} onChange={emailChangeHandler} />
              </InputRow>
            </InputTable>
            <div className="Button">
              <Button style={{ width: "120px", height: "44px" }} onClick={closeModalHandler}>
                취소
              </Button>
              <Button style={{ width: "120px", height: "44px" }} className="brown" onClick={registerAdmin}>
                등록
              </Button>
            </div>
          </ModalContainer>
        </>
      )}
    </>
  );
}

export default NewAdminModalForm;
