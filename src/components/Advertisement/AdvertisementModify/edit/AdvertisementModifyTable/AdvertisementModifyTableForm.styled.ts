import styled from "styled-components";
import {Button} from "../../../../Common/Button/ButtonForm.styled";
import {BrandColor} from "../../../../../styles/globalStyle";

export const AdvertisementWrapper = styled.div`
  width: 780px;
  height: 465px;
`;

export const AdvertisementDetailTable = styled.table`
  width: 100%;
  margin-top: 20px;
`;
export const TableHeader = styled.td`
  min-width: 150px;
  height: 53px;
  padding: 0px 16px;
  vertical-align: middle;
  background-color: ${({theme}) => theme.colors.greyScale_2};
  border-bottom: 1px solid ${({theme}) => theme.colors.greyScale_3};
`;

export const TableContent = styled.td`
  min-width: 280px;
  min-height: 53px;
  padding: 0px 16px;
  vertical-align: middle;
  border-bottom: 1px solid ${({theme}) => theme.colors.greyScale_3};
`;
export const InputTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0px 20px;

  background-color: ${({theme}) => theme.colors.greyScale_1};

  font-weight: ${({theme}) => theme.fontWeight.normal};
  font-size: ${({theme}) => theme.fontSize.body_16};
  line-height: 150%;

  border: 1px solid #C3C3C7;
  border-radius: 4px;
`;

export const Label = styled.label<{ disabled?: boolean; }>`
  font-size: 1rem;
  font-weight: 600;
  color: ${BrandColor.DARK_PURPLE};
  font-family: StabilGrotesk, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
  "Helvetica Neue", sans-serif;
  ${({disabled}) => disabled && `
      color: ${BrandColor.DARK_PURPLE_FADED} !important; 
      cursor: not-allowed;
   `}
`;

export const RadioBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const RadioBtnLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  height: 44px;
`;

export const Circle = styled.div`
  box-sizing: border-box;

  /* Auto layout */
  margin-right: 9px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 22px;
  gap: 4px;

  width: 135px;
  height: 44px;

  /* Grayscale/Grayscale-1 (White) */

  background: #FFFFFF;
  /* Grayscale/Grayscale-4 */

  border: 1px solid #C3C3C7;
  border-radius: 20px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const DeleteButton = styled.div`

  cursor: pointer;
  margin-left: 0px;
  display: inline-block;
  position: inherit;


`;
export const PhotoDeleteButton = styled ( Button )`
  min-width: 92px;
  margin-left: 10px;
  display: inline-block;

`;
export const CompleteButton = styled(Button)`
  /* margin : 80px auto; */
  /* width: 87.48px; */
`;
export const CompleteButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;

  padding: 80px 0px 62px 0px;
`;

export const FileLabel = styled.label`
  box-sizing: "border-box";

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 22px;
  gap: 4px;
  margin-top: 10px;

  width: 120px;
  height: 44px;

  /* Grayscale/Grayscale-1 (White) */

  background: #FFFFFF;
  /* Grayscale/Grayscale-4 */

  border: 1px solid #C3C3C7;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`
export const FileNameWrapper = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  gap: 16px;

  width: 900px;
  height: 44px;

  /* Grayscale/Grayscale-1 (White) */

  background: #FFFFFF;
  /* Grayscale/Grayscale-4 */

  border: 1px solid #C3C3C7;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;
`

export const SelecterWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 44px;
  margin-left: 7.33px;
`;


export const MonthOptionWrapper = styled.ul<{ isClicked : boolean }>`
    display: ${({isClicked}) => isClicked ? "block": "none"};
    z-index: 99;
    position: absolute;
    width: 100px;
    
    background: #FFFFFF;
    border: 1px solid ${({theme}) => theme.colors.greyScale_3};
    border-radius: 4px;
`;

export const MonthOptionItem = styled.li`
    width: 100px;
    height: 44px;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12px;


    &:hover{
        background: ${({theme}) => theme.colors.greyScale_2};
        color: ${({theme}) => theme.colors.primary};
        font-weight: ${({theme}) => theme.fontWeight.bold };
    }

    cursor: pointer;
`;
export const MonthDisableOptionItem = styled.li`
    width: 100px;
    height: 44px;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12px;

    
    &:hover{
        background: ${({theme}) => theme.colors.greyScale_4};
        color: ${({theme}) => theme.colors.primary};
        font-weight: ${({theme}) => theme.fontWeight.bold };
    }
  color: #a9a2a8;

`;

export const MonthSelecter = styled.button`
    display: flex;
    align-items: center;
    padding: 10px 22px;

    width: 120px;
    height: 44px;

    background-color: #FFFFFF;

    border: 1px solid #C3C3C7;
    border-radius: 4px;

    font-weight: ${({theme}) => theme.fontWeight.normal};
    font-size: ${({theme}) => theme.fontSize.body_16};
    line-height: 150%;
    
    color: ${({theme}) => theme.colors.greyScale_6};
`;