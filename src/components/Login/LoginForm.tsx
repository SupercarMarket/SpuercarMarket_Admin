import { useRef } from "react";
import {
  Wrapper,
  Container,
  Title,
  InputID,
  InputPW,
  LoginButtons,
} from "./LoginForm.styled";
import { LoginHandler } from "../../utils/api/Login/LoginAPI";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const LoginClickHandler = async () => {
    if (emailRef.current && passwordRef.current) {
      if (!!emailRef.current.value === false) {
        alert("아이디를 입력하세요.");
      }
      if (!!passwordRef.current.value === false) {
        alert("비밀번호를 입력하세요.");
      }
      if (!!emailRef.current.value && !!passwordRef.current.value) {
        LoginHandler(
          emailRef.current.value,
          passwordRef.current.value,
          navigate
        );
      }
    }
  };

  // 엔터키 입력 확인
  const inputEnterKeyCheckHanlder = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      console.log("로그인 V1");
      LoginClickHandler();
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>로그인</Title>
        <InputID
          ref={emailRef}
          onKeyDown={(event) => inputEnterKeyCheckHanlder(event)}
        />
        <InputPW
          ref={passwordRef}
          onKeyDown={(event) => inputEnterKeyCheckHanlder(event)}
        />
        <LoginButtons onClick={LoginClickHandler}>로그인</LoginButtons>
      </Container>
    </Wrapper>
  );
};

export default LoginForm;
