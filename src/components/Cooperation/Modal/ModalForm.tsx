import React, { useEffect } from 'react'
import { createPortal } from "react-dom";
import {
  ModalOuter,
  ModalWapper,
  ModalTitle,
  ModalInputBox,
  ModalButtonWrapper,
  ModalButton
} from "./ModalForm.styled";

interface ModalPropsType {
  isOpenModal : boolean;
  setIsOpenModal : React.Dispatch< React.SetStateAction<boolean>>;
};

const ModalForm = ({ isOpenModal, setIsOpenModal } : ModalPropsType) => {
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
    }, []);
  return createPortal(
    <>
    { isOpenModal && ( 
      <ModalOuter onClick={ () => setIsOpenModal( false )}>
          <ModalWapper onClick={ event => event.stopPropagation() }>
            <ModalTitle>반려 사유 작성</ModalTitle>
            <ModalInputBox placeholder='반려 사유를 작성해주세요.'></ModalInputBox>
            <ModalButtonWrapper>
              <ModalButton title="cancel" onClick={ () => setIsOpenModal( false )}>취소</ModalButton>
              <ModalButton title="complete" onClick={ () => setIsOpenModal( false )}>완료</ModalButton>
            </ModalButtonWrapper>
          </ModalWapper>
      </ModalOuter>) }
    </>,
    ( document.getElementById('modal') as HTMLElement )
  );
}

export default ModalForm;