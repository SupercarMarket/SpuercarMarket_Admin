import styled from "styled-components";

export const ModalOuter = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: max-content;
  padding: 24px;
  row-gap: 24px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.greyScale_1};
`;

export const ModalTitle = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.header_24};
  line-height: 120%;

  color: ${({ theme }) => theme.colors.greyScale_6};
`;

export const ModalSubTitle = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.body_16};
  line-height: 23px;
  padding: 10.5px 91px 10.5px 8px;
  color: ${({ theme }) => theme.colors.greyScale_6};
`;

export const WarningSpan = styled.span<{ isError: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.body_12};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 150%;

  color: ${({ theme, isError }) =>
    isError ? theme.colors.primary : theme.colors.greyScale_5};
`;

export const ModalDisplayBox = styled.div`
  display: flex;
`;

export const ModalInput = styled.input`
  width: 408px;
  padding: 10px 20px;

  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.body_16};
  line-height: 150%;

  border: 1px solid ${({ theme }) => theme.colors.greyScale_4};
  border-radius: 4px;

  :disabled {
    color: ${({ theme }) => theme.colors.greyScale_5};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.greyScale_5};
  }
`;

export const ModalProfileImg = styled.img`
  width: 160px;
  height: 160px;
  margin-right: 8px;
  border: 1px solid ${({ theme }) => theme.colors.greyScale_4};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.greyScale_3};
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

export const ModalButton = styled.button<{ title: string }>`
  width: 120px;
  height: 44px;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.body_16};
  line-height: 150%;
  color: ${({ title }) =>
    title === "cancel"
      ? ({ theme }) => theme.colors.greyScale_6
      : ({ theme }) => theme.colors.greyScale_1};
  background-color: ${({ theme, title }) =>
    title === "cancel" ? theme.colors.greyScale_1 : theme.colors.primary};

  border: 1px solid
    ${({ theme, title }) =>
      title === "cancel" ? theme.colors.greyScale_4 : theme.colors.greyScale_1};
  border-radius: 4px;
  padding: 10px 20px;
`;
