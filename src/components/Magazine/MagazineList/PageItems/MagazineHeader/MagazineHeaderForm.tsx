import React from "react";
import { Button } from "../../../styles/buttonStyles";

import { useAppSelector } from "store/rootReducer";

import { HeaderDiv } from "./MagazineHeaderForm.styled";

type UserHeaderProps = {
    hideCheckedMagazineOnClickHandler: Function;
};

function MagazineHeader({ hideCheckedMagazineOnClickHandler }: UserHeaderProps) {
    const { totalCount, checkList } = useAppSelector((state) => state.MagazineListSlice);

    return (
        <HeaderDiv>
            <Button onClick={() => hideCheckedMagazineOnClickHandler(checkList)}>숨기기</Button>
            <Button disabled>총 게시물 수 {totalCount}개</Button>
        </HeaderDiv>
    );
}

export default MagazineHeader;
