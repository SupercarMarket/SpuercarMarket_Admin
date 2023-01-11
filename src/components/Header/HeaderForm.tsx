import React from 'react'
import { Wrapper, Logo, ControlButton, RightWrapper, LoginInfoWrapper, UserName, UserIcon } from "./HeaderForm.styled";
import DefaultIcon from "../../assets/default_user_icon.svg";

const HeaderForm = () => {
  return (
    <Wrapper>
        <Logo />
        <RightWrapper>
          <ControlButton>내 정보 수정</ControlButton>
          <ControlButton>로그아웃</ControlButton>
            <LoginInfoWrapper>
              <UserName>가나다라마바사 님</UserName>
              <UserIcon src={DefaultIcon}/>
            </LoginInfoWrapper>
        </RightWrapper>
    </Wrapper>
  )
}

export default HeaderForm