import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ModalButton,
  ModalButtonWrapper,
  ModalOuter,
  ModalTitle,
  ModalWapper,
} from "./ModalForm.styled";
import ClientAxios from "../../../utils/api/AxiosAPI/ClientAxios";
import { useParams } from "react-router";
import { useAppDispatch } from "../../../store/rootReducer";
import { TextArea } from "../../Market/VehicleRegistrationInquiryDetail/VehicleRegistrationInquiryDetailForm.styled";

interface ModalPropsType {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalForm = ({ isOpenModal, setIsOpenModal }: ModalPropsType) => {
  const { brdSeq } = useParams();
  const [refresh, setRefresh] = useState<boolean>(false);
  const [rejectReasonText, setRejectReasonText] = useState<string>("");
  const dispatch = useAppDispatch();

  const textChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRejectReasonText(event.currentTarget.value);
  };

  useEffect(() => {
    document.body.style.cssText = `
            position: fixed; 
            top: -${window.scrollY}px;
            overflow-y: none;
            width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, [refresh]);

  const rejectHandler = async () => {
    const rejectProductDto = {
      brdSeq: brdSeq,
      accept: false,
      comment: rejectReasonText,
    };
    await ClientAxios.post(`/partnerships/reject`, rejectProductDto, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          alert("[제휴업체 문의 반려 완료]");
          setIsOpenModal(false);
          setRefresh(true);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  return createPortal(
    <>
      {isOpenModal && (
        <ModalOuter onClick={() => setIsOpenModal(false)}>
          <ModalWapper onClick={(event) => event.stopPropagation()}>
            <ModalTitle>반려 사유 작성</ModalTitle>
            <TextArea
              placeholder={"반려 사유를 작성해주세요."}
              value={rejectReasonText}
              onChange={textChangeHandler}
            />
            <ModalButtonWrapper>
              <ModalButton title="cancel" onClick={() => setIsOpenModal(false)}>
                취소
              </ModalButton>
              <ModalButton title="complete" onClick={() => rejectHandler()}>
                완료
              </ModalButton>
            </ModalButtonWrapper>
          </ModalWapper>
        </ModalOuter>
      )}
    </>,
    document.getElementById("modal") as HTMLElement
  );
};

export default ModalForm;
