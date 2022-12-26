import Select from "../../commons/Select";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./buttonStyles";

const classOptions = [
  { value: "1", name: "브론즈" },
  { value: "2", name: "실버" },
  { value: "3", name: "골드" },
  { value: "4", name: "플레티넘" },
  { value: "5", name: "다이아" },
];

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

type modalProps = {
  memberId: number;
  currentClass: string;
  changeClass: Function;
};

function ClassChangeModal({ memberId, currentClass, changeClass }: modalProps) {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [currentMemberClass, setCurrentMemberClass] = useState(currentClass);

  const openModalHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsShowModal(true);
  };

  const closeModalHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsShowModal(false);
  };

  const changeClassBtnHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    changeClass(memberId, currentMemberClass);
    setIsShowModal(false);
  };

  return (
    <>
      <Button onClick={openModalHandler}>수정</Button>
      {isShowModal && (
        <>
          <ModalBackground onClick={closeModalHandler}></ModalBackground>
          <ModalContainer>
            <div className="Title">회원등급 수정</div>
            <Select optionData={classOptions} value={currentMemberClass} setValue={setCurrentMemberClass} />
            <div className="Button">
              <Button onClick={closeModalHandler}>취소</Button>
              <Button onClick={changeClassBtnHandler}>완료</Button>
            </div>
          </ModalContainer>
        </>
      )}
    </>
  );
}

export default ClassChangeModal;
