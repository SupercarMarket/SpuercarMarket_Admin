import styled from "styled-components";

const SearchBoxWrapper = styled.div`
    display: flex;
`;

const Form = styled.form`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    background: #ffffff;
    border: 1px solid #c3c3c7;

    .element {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 24px;
        height: 44px;

        .title {
            width: 128px;
            display: flex;
            align-items: center;
        }

        .content {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            gap: 24px;
        }
    }

    input.textBox {
        padding: 0px 20px;

        width: 360px;
        height: 44px;

        background: #ffffff;
        border: 1px solid #c3c3c7;
        border-radius: 4px;
    }
`;

const RadioBtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;

const RadioBtnLabel = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    height: 44px;
`;

const CheckBoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;

const CheckBoxLabel = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    height: 44px;
`;

export { SearchBoxWrapper, Form, RadioBtnWrapper, RadioBtnLabel, CheckBoxWrapper, CheckBoxLabel };
