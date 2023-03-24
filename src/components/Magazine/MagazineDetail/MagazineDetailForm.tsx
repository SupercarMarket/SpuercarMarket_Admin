import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getMagazineDetail, getMagazineHistory } from "redux/modules/MagazineListSlice";
import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { undiscloseMagazineHandler } from "utils/api/Magazine/MagazineListAPI";
import { Button } from "../styles/buttonStyles";

import { ButtonContainer, Wrapper, Container } from "./MagazineDetailForm.styled";
import MagazineContentTableForm from "./PageItems/MagazineContentTable/MagazineContentTableForm";
import MagazineContentTableModifyForm from "./PageItems/MagazineContentTable/MagazineContentTableModifyForm";
import MagazineDetailHistoryForm from "./PageItems/MagazineHistory/MagazineDetailHistoryForm";

function MagazineDetailForm() {
    const { brdSeq } = useParams();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const [isModifying, setIsModifying] = useState(false);
    const [magazineHidden, setMagazineHidden] = useState(false);
    const { isLoading, detailItem } = useAppSelector((state) => state.MagazineListSlice);

    useEffect(() => {
        dispatch(getMagazineDetail({ brdSeq: brdSeq as string }));
        setIsModifying(location.state.edit || false);
        setMagazineHidden(detailItem.hidden);
        // dispatch(getMagazineHistory({ brdSeq: brdSeq as string }));
    }, [brdSeq, dispatch]);

    const hideButtonOnClickHandler = () => {
        undiscloseMagazineHandler([parseInt(brdSeq as string)], true)
            .then((response) => {
                if (response?.status === 200) {
                    setMagazineHidden(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const unhideButtonOnClickHandler = () => {
        undiscloseMagazineHandler([parseInt(brdSeq as string)], false)
            .then((response) => {
                if (response?.status === 200) {
                    setMagazineHidden(false);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Container>
            {!isLoading ? (
                <Wrapper>
                    {!isModifying ? (
                        <>
                            <MagazineContentTableForm />
                            <ButtonContainer>
                                <Button onClick={() => setIsModifying(true)}>수정하기</Button>
                                {!magazineHidden ? <Button onClick={hideButtonOnClickHandler}>숨기기</Button> : <Button onClick={unhideButtonOnClickHandler}>숨기기 취소</Button>}
                            </ButtonContainer>
                        </>
                    ) : (
                        <>
                            <MagazineContentTableModifyForm setIsModifying={setIsModifying} />
                        </>
                    )}
                </Wrapper>
            ) : (
                <div>조회중입니다.</div>
            )}
            {!isModifying && <MagazineDetailHistoryForm brdSeq={brdSeq as string} />}
        </Container>
    );
}

export default MagazineDetailForm;
