import styled from "styled-components";
import { Button } from "../../Common/Button/ButtonForm.styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 96px);
  padding: 40px 40px;
`;

export const TableWrapper = styled.div`
  width: 100%;
  height: 568px;
  gap: 40px;
  display: flex;
`;

export const TableHeader = styled.td`
  width: 120px;
  height: 53px;
  padding: 0px 16px;
  vertical-align: middle;
  background-color: ${({ theme }) => theme.colors.greyScale_2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyScale_3};
`;

export const TableContent = styled.td`
  width: 280px;
  height: 53px;
  padding: 0px 16px;
  vertical-align: middle;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyScale_3};
`;
// export const ContentWrapperAttrs = styled.div`
//     width : 100%;
//     margin-top: 20px;
// `;

export const CompleteButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;

  padding: 80px 0px 62px 0px;
`;

export const CompleteButton = styled(Button)`
  /* margin : 80px auto; */
  /* width: 87.48px; */
`;

export const DetailCompleteButton = styled(Button)<{}>`
  margin-right: 8px;
  /* margin : 80px auto; */
  /* width: 87.48px; */
`;

export const DisableDetailCompleteButton = styled(Button)<{}>`
  background-color: #eaeaec;
  margin-right: 8px;
  pointer-events: none;
`;

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

const TextArea = styled.textarea`
  width: 100%;
  height: 500px;
  border: 1px solid #c3c3c7;
  border-radius: 4px;
  resize: none;
`;
