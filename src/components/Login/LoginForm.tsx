import { useRef } from 'react'
import { Wrapper, Container, Title, InputID, InputPW, LoginButtons } from "./LoginForm.styled";
import { LoginHandler } from "../../utils/api/Login/LoginAPI";

const LoginForm = () => {
  const emailRef = useRef<HTMLInputElement>( null );
  const passwordRef = useRef<HTMLInputElement>( null );

  const LoginClickHandler = async () => {
    if( emailRef.current && passwordRef.current ){
      LoginHandler( emailRef.current.value, passwordRef.current.value );
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>로그인</Title>
        <InputID ref={emailRef} required />
        <InputPW ref={passwordRef} />
        <LoginButtons onClick={LoginClickHandler}>로그인</LoginButtons>
      </Container>
    </Wrapper>
  )
}

export default LoginForm