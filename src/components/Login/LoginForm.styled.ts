import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 273px;
`;

const Title = styled.span`
  width: 80px;
  height: 29px;
  margin-bottom: 60px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  /* border : 1px solid black; */
`;

const InputButtonWrapper = styled.div``;

const InputBox = styled.input`
  border: 1px solid #eaeaec;
  border-radius: 4px;
  width: 100%;
  height: 50px;
  padding: 10px 14px;

  &:focus {
    outline: none;
  }
`;

const InputID = styled(InputBox).attrs({
  type: "email",
  placeholder: "아이디를 입력하세요",
})`
  margin-bottom: 10px;
`;

const InputPW = styled(InputBox).attrs({
  type: "password",
  placeholder: "비밀번호를 입력하세요",
})`
  margin-bottom: 20px;
`;

const LoginButtons = styled.button`
  width: 100%;
  height: 50px;
  background: #b79f7b;
  border-radius: 4px;
  border: 0px;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
`;

export {
  Wrapper,
  Container,
  Title,
  InputButtonWrapper,
  InputBox,
  InputID,
  InputPW,
  LoginButtons,
};
