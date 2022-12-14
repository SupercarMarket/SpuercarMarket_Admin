import { DefaultTheme } from "styled-components";

// Date     : 2022-12 
// Author   : 지용
// comments : 전역으로 관리될 theme을 설정합니다.

const theme : DefaultTheme = {
    fontSize :{
        header_36 : "36px",
        header_24 : "24px",
        header_20 : "20px",
        header_16 : "16px",
        header_14 : "14px",

        body_24 : "24px",
        body_20 : "20px",
        body_16 : "16px",
        body_14 : "14px",
        body_12 : "12px"
    },
    
    fontWeight : {
        bold    : 700,
        normal  : 500,
        regular : 400
    },

    colors : {
        primary         : "#B79F7B",
        primary_darken  : "#725B30",
        primary_lighten : "#EBE6DE",

        greyScale_6     : "#1E1E20",
        greyScale_5     : "#8E8E95",
        greyScale_4     : "#C3C3C7",
        greyScale_3     : "#EAEAEC",
        greyScale_2     : "#F7F7F8",
        greyScale_1     : "#FFFFFF",

        system_1        : "#ED7474"
    }
}

export default theme;