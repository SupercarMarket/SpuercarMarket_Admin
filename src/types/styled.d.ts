import "styled-components";

declare module "styled-components"{
    export interface DefaultTheme{
        fontSize: {
            // header type definition
            header_36: string;
            header_24: string;
            header_20: string;
            header_16: string;
            header_14: string;

            // body type definition
            body_24 : string;
            body_20 : string;
            body_16 : string;
            body_14 : string;
            body_12 : string;
          };
          fontWeight: {
            // font weight definition
            bold    : number;
            normal  : number;
            regular : number;
          };

          colors: {
            // primary color definition
            primary_lighten     : string;
            primary_darken      : string;
            primary             : string;

            // gray color definition
            greyScale_1 : string;
            greyScale_2 : string;
            greyScale_3 : string;
            greyScale_4 : string;
            greyScale_5 : string;
            greyScale_6 : string;

            // system color definition
            system_1 : string;
          };
    }
}