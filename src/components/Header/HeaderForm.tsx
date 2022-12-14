import React from 'react'
import { Wrapper, Logo, LogoutButton } from "./HeaderForm.styled";

const HeaderForm = () => {
  return (
    <Wrapper>
        <Logo />
        <LogoutButton>로그아웃</LogoutButton>
    </Wrapper>
  )
}

export default HeaderForm