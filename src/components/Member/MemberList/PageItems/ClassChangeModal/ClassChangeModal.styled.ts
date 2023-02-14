import styled from "styled-components";

const ModalBackground = styled.div`
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

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 368px;
  height: 197px;
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
    align-items: center;
    gap: 16px;
  }
`;

export { ModalBackground, ModalContainer };
