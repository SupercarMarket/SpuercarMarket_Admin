import styled from "styled-components";

export const MagazineHeaderBox = styled.div<{ imageUrl: string }>`
    position: relative;
    width: 100%;
    border-bottom: 1px solid #eaeaec;
    height: 360px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(props) => props.imageUrl || null});
    background-position: center;
`;

export const MagazineTitle = styled.div`
    position: absolute;
    width: 1120px;
    height: auto;
    max-height: 130px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 120%;
    color: #ffffff;
`;

export const MagazineInfo = styled.div`
    position: absolute;
    width: 1120px;
    height: 40px;
    left: 40px;
    bottom: 40px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
`;

export const MagazineProfileImage = styled.img<{ imageUrl: string }>`
    height: 40px;
    width: 40px;
    border: none;
    background-color: ${(props) => props.imageUrl || "white"};
    border-radius: 50%;
`;

export const MagazineWriter = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
`;

export const MagazineCreatedDate = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
`;

export const MagazineCount = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    margin-left: auto;
`;
