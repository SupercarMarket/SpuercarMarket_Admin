import Select from "../../../commons/Select";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./buttonStyles";

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

const TextArea = styled.textarea`
  width: 100%;
  height: 500px;
`;

function RejectReasonModal() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [rejectReasonText, setRejectReasonText] = useState("");

  const textChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRejectReasonText(event.currentTarget.value);
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
      <Button onClick={openModalHandler}>반려</Button>
      {isShowModal && (
        <>
          <ModalBackground onClick={closeModalHandler}></ModalBackground>
          <ModalContainer>
            <div className="Title">반려 사유 작성</div>
            <TextArea value={rejectReasonText} onChange={textChangeHandler}></TextArea>
            <div className="Button">
              <Button onClick={closeModalHandler}>취소</Button>
              <Button>완료</Button>
            </div>
          </ModalContainer>
        </>
      )}
    </>
  );
}

export default RejectReasonModal;
