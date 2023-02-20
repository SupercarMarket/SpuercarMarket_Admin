import styled from "styled-components";

export const PhotoRegistrationWrapper = styled.div`
    width: 100%;
    height : 924px; 
    margin-top: 20px;

    display: flex;
`;

export const PhotoRegistrationTitle = styled.div`
    width: 120px;
    height: 100%;

    padding: 0px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    background-color: ${({theme}) => theme.colors.greyScale_2};

    font-weight: ${({theme}) => theme.fontWeight.normal};
    font-size:${({theme}) => theme.fontSize.body_14};
    line-height: 150%;
    color: ${({theme}) => theme.colors.greyScale_6};

    border-bottom : 1px solid ${({theme}) => theme.colors.greyScale_3};
`

export const PhotoRegistrationContentWrapper = styled.div`
    /* width: 1480px; */
    width: 100%;
    height : 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-bottom : 1px solid ${({theme}) => theme.colors.greyScale_3};
    row-gap: 8px;
    column-gap: 12px;
    padding: 16px 3.5px 0px 3.5px;
`;

export const PhotoUploadWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 285px;
    height: 211px;
`;

export const PhotoImage = styled.img`
    width: 100%;
    height: 180px;

    border: 1px solid ${({theme}) => theme.colors.greyScale_4};
    border-radius: 4px;
    margin-bottom: 10px;
`;

export const PhotoName = styled.div`
    width: 100%;
    
    font-weight: ${({theme}) => theme.fontWeight.normal};
    font-size : ${({theme}) => theme.fontSize.body_14};
    line-height: 150%;

    color : ${({theme}) => theme.colors.greyScale_5};
`;