import styled from "styled-components";
import { Button } from "../../Common/Button/ButtonForm.styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 40px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;

  padding: 80px 0px;
  gap: 8px;
`;

export const HiddenButton = styled(Button)`
  /* margin : 80px auto; */
  /* width: 87.48px; */
`;

export const ConfirmButton = styled(Button)<{ isAccepted: string }>`
  color: ${({ isAccepted }) =>
    isAccepted === "R"
      ? ({ theme }) => theme.colors.greyScale_6
      : ({ theme }) => theme.colors.greyScale_5};
  background-color: ${({ isAccepted }) =>
    isAccepted === "R"
      ? ({ theme }) => theme.colors.greyScale_1
      : ({ theme }) => theme.colors.greyScale_3};

  pointer-events: ${({ isAccepted }) => (isAccepted === "R" ? "auto" : "none")};
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  padding: 0;
  margin: 0;
  pointer-events: visible;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(648px - 24px * 2) !important;
  height: calc(393px - 24px * 2);
  background: #ffffff;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 16px;

  .Title {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    color: #1e1e20;
    height: 29px;
  }

  .Button {
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: right;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 500px;
  border: 1px solid #c3c3c7;
  border-radius: 4px;
  resize: none;
`;

// export const ButtonWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 8px;
//   justify-content: center;
// `;
