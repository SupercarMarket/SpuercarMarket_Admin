import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMagazineDetail, getMagazineHistory } from "redux/modules/MagazineListSlice";
import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { Button } from "../styles/buttonStyles";

import { ButtonContainer, Wrapper, Container } from "./MagazineDetailForm.styled";
import MagazineContentTableForm from "./PageItems/MagazineContentTable/MagazineContentTableForm";
import MagazineDetailHistoryForm from "./PageItems/MagazineHistory/MagazineDetailHistoryForm";

function MagazineDetailForm() {
    const { brdSeq } = useParams();
    const dispatch = useAppDispatch();
    const { isLoading, detailItem } = useAppSelector((state) => state.MagazineListSlice);

    useEffect(() => {
        dispatch(getMagazineDetail({ brdSeq: brdSeq as string }));
        // dispatch(getMagazineHistory({ brdSeq: brdSeq as string }));
    }, [brdSeq, dispatch]);

    return (
        <Container>
            {!isLoading ? (
                <Wrapper>
                    <MagazineContentTableForm />
                    <ButtonContainer>
                        <Button>수정하기</Button>
                        {!detailItem?.hidden ? <Button>숨기기</Button> : <Button>숨기기 취소</Button>}
                    </ButtonContainer>
                </Wrapper>
            ) : (
                <div>조회중입니다.</div>
            )}
            <MagazineDetailHistoryForm brdSeq={brdSeq as string} />
        </Container>
    );
}

export default MagazineDetailForm;
