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
    gap: 16px;
`;

export const Table = styled.div<{ display: boolean }>`
    width: 100%;
    border: 1px solid #c3c3c7;
    border-radius: 4px;
    display: ${(props) => (props.display ? "block" : "none")};
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    justify-content: center;
`;

export const MagazineBodyBox = styled.div`
    width: 100%;
    height: auto;
    min-height: 600px;
    padding: 16px;
`;
