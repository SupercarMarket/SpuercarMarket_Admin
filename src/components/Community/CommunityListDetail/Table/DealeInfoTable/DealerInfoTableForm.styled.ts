import styled from "styled-components";
import { CommunityInfoHeader, CommunityInfoContent } from "../../CommunityDetailForm.styled";

export const DealerPhotoHeader = styled( CommunityInfoHeader )`
    height : 152px;
    padding-left : 16px;
    padding-right : 12px;
`;

export const DealerPhotoContent = styled( CommunityInfoContent )`
    height: 152px;
    padding : 16px;
`;

export const DealerPhoto = styled.img`
    width: 238px;
    height: 120px;
`;

// 딜러 정보
export const DealerInfoWrapper = styled.div`
    width : 780px;
    height : 100%;
`;

export const DealerTable = styled.table`
    width : 100%;
    /* height : 100%; */
    margin-top : 20px;
`;

export const DealerHeader = styled( CommunityInfoHeader )``;

export const DealerContent= styled( CommunityInfoContent )``;