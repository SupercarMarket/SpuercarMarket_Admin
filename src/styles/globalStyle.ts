import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// Date     : 2022-14
// Author   : 지용
// comments : 전역으로 관리될 style을 설정합니다.

const GlobalStyle = createGlobalStyle`
  /* css reset */
  ${reset}

  /* font 적용 */
  @font-face {
  font-family: 'Pretendard';
  src: url('/fonts/Pretendard-Bold.otf') format('opentype'), url('/font/Pretendard-Bold.ttf') format('ttf');
  font-weight: 700;
  font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Regular.otf') format('opentype'), url('/font/Pretendard-Regular.ttf') format('ttf');
    font-weight: 400;
    font-display: swap;
  }

  /* width 100%, box-sizing */
  
  html, body  {
    width: 100%;
    min-width : 1800px;
    * {
      box-sizing : border-box;
      font-family: 'Pretendard';
    }
  }

  /* Button 공통 속성 */

  button{
    :focus, :active{
      outline: none;
      box-shadow: none;
    }
    cursor: pointer;
  }

  /* input 기본 스타일 초기화 */
  input {
      /* -webkit-appearance: none;
        -moz-appearance: none;
              appearance: none;
            */
      :focus{
        outline: none;
      } 
  }

  /* list 스타일 */
  ol, ul, li{
      list-style : none;
      /* all: unset */
  }

  /* a 태그 reset*/
  a{
    all: unset;
  }

  /* table 스타일 */
  /* table{
    width: 100%;    
    border : 1px solid ${({theme}) => theme.colors.greyScale_3};
    border-collapse: collapse;
  }

  th, td {
    text-align:center;
    vertical-align:middle;
    border : 1px solid ${({theme}) => theme.colors.greyScale_3};
  }

  th{
    background-color: ${({theme}) => theme.colors.greyScale_2};
  } */


  .toastui-editor-contents * {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  //.toastui-viewer-contents p{
  //  display: flex;
  //  flex-direction: column;
  //  justify-content: center;
  //  align-items: center;
  //  align-content: center;
  //}
  //
  .toastui-editor-contents img{
    border-radius: 1%;
    overflow: hidden;
  }
  
`;
export enum BrandColor {
  WHITE = "#FFF",
  PURPLE = "#CDC3DE",
  DARK_PURPLE_FADED = "#7B6798",
  DARK_PURPLE = "#503374",
  YELLOW = "#FFBF44",
};

export default GlobalStyle;