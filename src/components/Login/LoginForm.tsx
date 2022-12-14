import React from 'react'
import { Wrapper, Container, Title, InputID, InputPW, LoginButtons } from "./LoginForm.styled";

const LoginForm = () => {
  return (
    <Wrapper>
      <Container>
        <Title>로그인</Title>
        <InputID />
        <InputPW />
        <LoginButtons>로그인</LoginButtons>
      </Container>
    </Wrapper>
  )
}

export default LoginForm