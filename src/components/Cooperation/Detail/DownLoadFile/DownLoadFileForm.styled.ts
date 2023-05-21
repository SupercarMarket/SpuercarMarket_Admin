import styled from "styled-components";
import { Button } from "../../../Common/Button/ButtonForm.styled";

export const DownLaodFileWrapper = styled.div`
  width: 100%;
  height: 188px;
  display: flex;
`;

export const DownLaodFileTitle = styled.div`
  width: 178px;
  height: 100%;

  padding: 0px 16px;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.greyScale_2};

  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.body_14};
  line-height: 150%;
  color: ${({ theme }) => theme.colors.greyScale_6};

  border-bottom: 1px solid ${({ theme }) => theme.colors.greyScale_3};
`;

export const DownLaodFileContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ///* width: 1480px; */
  width: 100%;
  height: 100%;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyScale_3};

  gap: 12px;
`;

export const DownLaodFileInputButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  height: 44px;
`;

// export const DownLaodFileInput = styled.input.attrs({ placeholder : "파일명.png" })`
//     padding : 16px;
//     width: 1340px;

//     border: 1px solid ${({theme}) => theme.colors.greyScale_4};
//     border-radius: 4px;

//     ::placeholder{
//         font-weight: ${({theme}) => theme.fontWeight.normal};
//         font-size:${({theme}) => theme.fontSize.body_14};
//         line-height: 150%;
//         color : ${({theme}) => theme.colors.greyScale_5};
//     }
// `;

export const DownLaodFileInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 1340px;
  padding: 16px;

  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.body_14};
  line-height: 150%;
  color: ${({ theme }) => theme.colors.greyScale_5};

  border: 1px solid ${({ theme }) => theme.colors.greyScale_4};
  border-radius: 4px;

  vertical-align: center;

  /* ::placeholder{
        font-weight: ${({ theme }) => theme.fontWeight.normal};
        font-size:${({ theme }) => theme.fontSize.body_14};
        line-height: 150%;
        color : ${({ theme }) => theme.colors.greyScale_5};
    } */
`;

export const DownLaodButton = styled(Button)`
  font-size: 16px;
`;
