Date     : 2022-12-14
Author   : 지용
comments : 설치된 package 목록을 나타냅니다.
           v는 버전을 나타냅니다. 자세한 사항은 package.json을 참조하시길 바랍니다.

        styled-compoents     v 5.3.6
        styled-reset         v 4.4.2
        react-router-dom     v 6.4.4
        react-dom            v 18.2.0
        react-quill          v 2.0.0
        dotenv               v 16.0.3
        @reduxjs/toolkit     v 1.9.1
        react-redux          v 8.0.5


Date     : 2022-12-14
Author   : 지용
comments : 디렉토리 정리, 각 디렉토리마다 ReadMe.txt 확인

        public/fonts    : 사용될 font 저장        

        src/assets      : 사용할 svg, img 파일 모음
        src/components  : 사용할 svg, img 파일 모음    
        src/hooks       : 사용될 custom hook 저장    
        src/pages       : router로 이동될 page 정의
        src/store       : redux rootReducer 정의
        src/styles      : globalStyle, theme 정의
        src/types       : styled.d.ts, component 에 사용될 Data type 정의
        src/utils       : api 정의


Date     : 2022-12-14
Author   : 지용
comments : fonts 적용, globalStyle 적용


Date     : 2022-12-14
Author   : 지용
comments : index.tsx에 BrowserRouter, ThemeProvider, Redux store 적용

Date     : 2023-02-15
Author   : 지용
comments : package 추가
        axios           : v1.3.3,
        react-cookie    : 4.1.1 ( cookie를 쉽게 사용하기 위해서 사용)