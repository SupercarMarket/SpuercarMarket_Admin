import React from "react";
import { Button } from "../../../styles/buttonStyles";

import { useAppSelector } from "store/rootReducer";

import { HeaderDiv, HeaderTitle } from "./MagazineTmpHeaderForm.styled";
import { useNavigate } from "react-router-dom";

function MagazineTmpHeader({ deleteMagazineTmpButtonOnClickHandler }: { deleteMagazineTmpButtonOnClickHandler: Function }) {
    const { checkList } = useAppSelector((state) => state.MagazineListSlice);
    const navigate = useNavigate();

    const newMagazineButtonOnClickHandler = () => {
        navigate("/magazinetmp/editor");
    };

    return (
        <HeaderDiv>
            <HeaderTitle>임시저장 목록</HeaderTitle>
            <Button onClick={() => deleteMagazineTmpButtonOnClickHandler(checkList)}>삭제하기</Button>
            <Button onClick={() => newMagazineButtonOnClickHandler()}>매거진 작성</Button>
        </HeaderDiv>
    );
}

export default MagazineTmpHeader;
