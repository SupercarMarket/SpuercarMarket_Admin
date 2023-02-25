import React, { useState } from "react";
import { Button } from "../../../styles/buttonStyles";
import { ModalBackground, ModalContainer, TextArea } from "./ApproveReject.styled";

import axios from "axios";

function ApproveRejectForm({ dlrSeq }: { dlrSeq: number }) {
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

  const dealerApprove = () => {
    axios
      .post("/super-admin/v1/dealer/accept", {
        userSeq: dlrSeq,
      })
      .then((response) => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const dealerReject = () => {
    axios
      .post("super-admin/v1/dealer/reject", {
        userSeq: dlrSeq,
        comment: rejectReasonText,
      })
      .then((response) => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <Button onClick={dealerApprove}>딜러 등록</Button>
        <Button onClick={openModalHandler}>반려</Button>
      </div>
      {isShowModal && (
        <>
          <ModalBackground onClick={closeModalHandler}></ModalBackground>
          <ModalContainer>
            <div className="Title">반려 사유 작성</div>
            <TextArea value={rejectReasonText} onChange={textChangeHandler}></TextArea>
            <div className="Button">
              <Button onClick={closeModalHandler}>취소</Button>
              <Button onClick={dealerReject}>완료</Button>
            </div>
          </ModalContainer>
        </>
      )}
    </>
  );
}

export default ApproveRejectForm;
