import styled from "styled-components";

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    padding: 0;
    margin: 0;
    pointer-events: visible;
    z-index: 1;
`;

const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 552px;
    height: 417px;
    background: #ffffff;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 24px;

    z-index: 2;

    .Title {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 120%;
        color: #1e1e20;
        height: 29px;
    }

    .Button {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        margin: 0 auto;
    }
`;

const Input = styled.input`
    width: 360px;
    height: 44px;
    border: 1px solid #c3c3c7;
    border-radius: 4px;
    padding: 0px 20px;
`;

const InputTable = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const InputRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    div {
        width: 30%;
        text-align: left;
    }
`;

export { ModalBackground, ModalContainer, Input, InputRow, InputTable };
