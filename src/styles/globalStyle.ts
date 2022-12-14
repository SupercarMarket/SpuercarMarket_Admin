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
      -webkit-appearance: none;
        -moz-appearance: none;
              appearance: none;
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
`;


export default GlobalStyle;