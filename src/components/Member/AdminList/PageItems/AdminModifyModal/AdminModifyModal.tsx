import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./buttonStyles";

import { Admin } from "types/MemberType";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  padding: 0;
  margin: 0;
  pointer-events: visible;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(368px - 24px * 2);
  height: calc(197px - 24px * 2);
  background: #ffffff;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 16px;

  .Title {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    color: #1e1e20;
    height: 29px;
  }

  .Button {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
`;

const Input = styled.input`
  width: 360px;
  height: 44px;
`;

const InputTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  div {
    width: 30%;
  }
`;

type AdminModifyModalProps = {
  adminData: Admin;
};

function AdminModifyModal({ adminData }: AdminModifyModalProps) {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [adminName, setAdminName] = useState("");
  const [adminPhoneNumber, setAdminPhoneNumber] = useState("");
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
                <div>이메일</div>
                <Input placeholder="이메일을 입력해주세요." value={adminEmail} onChange={emailChangeHandler} />
              </InputRow>
            </InputTable>
            <div className="Button">
              <Button onClick={closeModalHandler}>취소</Button>
              <Button>수정 완료</Button>
            </div>
          </ModalContainer>
        </>
      )}
    </>
  );
}

export default AdminModifyModal;
