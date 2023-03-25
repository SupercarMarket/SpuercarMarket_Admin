import styled from "styled-components";

export const Container = styled.div`
    width: 1200px;
    padding: 40px 0px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    justify-content: center;
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

export const MagazineContentTextArea = styled.textarea`
    width: 100%;
    border: 1px solid black;
    height: 568px;
`;

export const ContentTable = styled.div`
    width: 100%;
    border: 1px solid #eaeaec;
    border-radius: 4px;
`;

export const MagazineHeaderBox = styled.div<{ imageUrl: string }>`
    position: relative;
    width: 100%;
    border-bottom: 1px solid #eaeaec;
    height: 360px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(props) => props.imageUrl || null});
    background-position: center;
`;

export const MagazineBodyBox = styled.div`
    width: 100%;
    height: auto;
    min-height: 600px;
    padding: 16px;
`;

export const MagazineContent = styled.div`
    width: 100%;
`;
