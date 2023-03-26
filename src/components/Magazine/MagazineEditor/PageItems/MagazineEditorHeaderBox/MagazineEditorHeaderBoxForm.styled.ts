import styled from "styled-components";

export const MagazineHeaderBox = styled.div<{ imageUrl: string }>`
    position: relative;
    width: 100%;
    border-bottom: 1px solid #eaeaec;
    height: 360px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(props) => props.imageUrl || null}) no-repeat center;
    background-size: cover;
`;

export const MagazineTitleTextArea = styled.textarea`
    position: absolute;
    width: 1120px;
    height: 40px;
    max-height: 130px;
    left: 40px;
    bottom: 80px;
    resize: none;

    vertical-align: text-bottom;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 120%;
    color: #ffffff;
    background: rgba(0, 0, 0, 0);

    border: none;
    overflow: hidden;

    &:focus {
        outline: none;
    }
`;
