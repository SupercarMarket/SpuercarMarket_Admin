import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AdminLogout } from "utils/api/Login/LoginAPI";
import {
  Wrapper,
  Logo,
  ControlButton,
  RightWrapper,
  LoginInfoWrapper,
  UserName,
  UserIcon,
} from "./HeaderForm.styled";
import ModalForm from "./Modal/ModalForm";
import DefaultIcon from "../../assets/default_user_icon.svg";

const HeaderForm = () => {
  const navigate = useNavigate();
  const [isOpenPWModal, setIsOpenPWModal] = useState(false);
  const [isOpenInfoModal, setIsOpenInfoModal] = useState(false);

  const handlerPWModalOnClick = (type: "pw") => () => {
    setIsOpenPWModal(() => !isOpenPWModal);
    setIsOpenInfoModal(false);
  };

  const handlerInfoModalOnClick = (type: "info") => () => {
    setIsOpenInfoModal(() => !isOpenInfoModal);
    setIsOpenPWModal(false);
  };

  const handlerOnClickLogout = async () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      await AdminLogout(navigate);
    }
  };

  return (
    <Wrapper>
      <Logo onClick={() => window.location.replace("/memberlist")} />
      <RightWrapper>
        <ControlButton onClick={handlerPWModalOnClick("pw")}>
          비밀번호 수정
        </ControlButton>
        <ControlButton onClick={handlerInfoModalOnClick("info")}>
          내 정보 수정
        </ControlButton>
        <ControlButton onClick={handlerOnClickLogout}>로그아웃</ControlButton>
        <LoginInfoWrapper>
          <UserName>
            {localStorage.getItem("login-nickname")
              ? localStorage.getItem("login-nickname")
              : "unkown"}{" "}
            님
          </UserName>
          <UserIcon
            src={
              localStorage.getItem("login-imgSrc") !== "null"
                ? (localStorage.getItem("login-imgSrc") as string)
                : DefaultIcon
            }
          />
        </LoginInfoWrapper>
        {isOpenPWModal && (
          <ModalForm
            type="pw"
            isOpenModal={isOpenPWModal}
            setIsOpenModal={setIsOpenPWModal}
          />
        )}
        {isOpenInfoModal && (
          <ModalForm
            type="info"
            isOpenModal={isOpenInfoModal}
            setIsOpenModal={setIsOpenInfoModal}
          />
        )}
      </RightWrapper>
    </Wrapper>
  );
};

export default HeaderForm;
