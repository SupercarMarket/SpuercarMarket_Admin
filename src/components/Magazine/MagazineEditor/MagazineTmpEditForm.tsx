import React, { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { getMagazineTmpDetail, MagazineTmpAction } from "redux/modules/MagazineTmpSlice";
import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { Button } from "../styles/buttonStyles";

import { ButtonContainer, Wrapper, Container, ContentTable, MagazineHeaderBox, MagazineTitleTextArea, MagazineBodyBox, MagazineContentTextArea } from "./MagazineTmpEditForm.styled";

function MagazineTmpEditForm() {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const { isLoading, detailItem } = useAppSelector((state) => state.MagazineTmpSlice);

    useEffect(() => {
        if (location.state && location.state.brdSeq) {
            dispatch(getMagazineTmpDetail({ brdSeq: location.state.brdSeq }));
        } else {
            dispatch(MagazineTmpAction.setMagazineDetailInit({}));
        }
        if (titleRef && titleRef.current) {
            titleRef.current.value = detailItem.title;
        }
        if (contentRef && contentRef.current) {
            contentRef.current.value = detailItem.contentHtml;
        }
    }, [location.state, dispatch]);

    const titleRef = useRef<HTMLTextAreaElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);

    const textareaResizeHandler = useCallback(() => {
        if (titleRef && titleRef.current) {
            titleRef.current.style.height = titleRef.current.scrollHeight + "px";
        }
    }, []);

    const saveTmpButtonOnClickHandler = () => {
        if (titleRef.current && contentRef.current) {
            // updateMagazineHandler(brdSeq as string, contentRef.current.value, "", titleRef.current.value)
            //     .then((response) => {
            //         if (response?.status === 200) {
            //             dispatch(MagazineListAction.setMagazineDetail({ title: titleRef.current?.value, contents: contentRef.current?.value, thumbnail: detailItem.thumbnail }));
            //         }
            //         setIsModifying(false);
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });
        }
    };

    const saveMagazineButtonOnClickHandler = () => {
        if (titleRef.current && contentRef.current) {
            // updateMagazineHandler(brdSeq as string, contentRef.current.value, "", titleRef.current.value)
            //     .then((response) => {
            //         if (response?.status === 200) {
            //             dispatch(MagazineListAction.setMagazineDetail({ title: titleRef.current?.value, contents: contentRef.current?.value, thumbnail: detailItem.thumbnail }));
            //         }
            //         setIsModifying(false);
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });
        }
    };

    return (
        <Container>
            {!isLoading ? (
                <Wrapper>
                    <ContentTable>
                        <MagazineHeaderBox imageUrl={detailItem.thumbnail}>
                            <MagazineTitleTextArea ref={titleRef} placeholder="제목을 입력해주세요." onInput={textareaResizeHandler} />
                        </MagazineHeaderBox>
                        <MagazineBodyBox>
                            <MagazineContentTextArea ref={contentRef} placeholder="내용을 입력해주세요." />
                        </MagazineBodyBox>
                    </ContentTable>
                    <ButtonContainer style={{ marginTop: "20px" }}>
                        <Button onClick={saveTmpButtonOnClickHandler}>임시저장</Button>
                        <Button>미리보기</Button>
                        <Button onClick={saveMagazineButtonOnClickHandler}>게시하기</Button>
                    </ButtonContainer>
                </Wrapper>
            ) : (
                <div>조회중입니다.</div>
            )}
        </Container>
    );
}

export default MagazineTmpEditForm;
