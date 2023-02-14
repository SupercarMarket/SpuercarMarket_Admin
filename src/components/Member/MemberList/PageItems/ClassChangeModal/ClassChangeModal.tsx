import Select from "../../../commons/Select";
import React, { useState } from "react";
import { Button } from "../../../styles/buttonStyles";

import { ModalBackground, ModalContainer } from "./ClassChangeModal.styled";

const ratingOptions = [
  { value: "1", name: "브론즈" },
  { value: "2", name: "실버" },
  { value: "3", name: "골드" },
  { value: "4", name: "플레티넘" },
  { value: "5", name: "다이아" },
];

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
            <Select optionData={ratingOptions} value={currentMemberClass} setValue={setCurrentMemberClass} />
            <div className="Button" style={{ margin: "auto" }}>
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
