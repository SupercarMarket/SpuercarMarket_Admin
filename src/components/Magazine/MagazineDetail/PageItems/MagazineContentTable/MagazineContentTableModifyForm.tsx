import React, { useCallback, useRef, useEffect } from "react";
import { useAppSelector } from "store/rootReducer";
import { Container, MagazineHeaderBox, MagazineBodyBox, ContentTable } from "./MagazineContentTableForm.styled";
import { MagazineContentTextArea, MagazineTitleTextArea, ButtonContainer } from "./MagazineContentTableModifyForm.styled";
import { Button } from "../../../styles/buttonStyles";
import { updateMagazineHandler } from "utils/api/Magazine/MagazineListAPI";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MagazineListAction } from "redux/modules/MagazineListSlice";

function MagazineContentTableModifyForm({ setIsModifying }: { setIsModifying: Function }) {
    const { brdSeq } = useParams();
    const { detailItem } = useAppSelector((state) => state.MagazineListSlice);
    const dispatch = useDispatch();

    const titleRef = useRef<HTMLTextAreaElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);

    const textareaResizeHandler = useCallback(() => {
        if (titleRef && titleRef.current) {
            titleRef.current.style.height = titleRef.current.scrollHeight + "px";
        }
    }, []);

    useEffect(() => {
        if (titleRef && titleRef.current) {
            titleRef.current.value = detailItem.title;
        }
        if (contentRef && contentRef.current) {
            contentRef.current.value = detailItem.contentHtml;
        }
    }, []);

    const updateFinishButtonOnClickHandler = () => {
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
            <ContentTable>
                <MagazineHeaderBox imageUrl={detailItem.thumbnail}>
                    <MagazineTitleTextArea ref={titleRef} placeholder="제목을 입력해주세요." onInput={textareaResizeHandler} />
                </MagazineHeaderBox>
                <MagazineBodyBox>
                    <MagazineContentTextArea ref={contentRef} placeholder="내용을 입력해주세요." />
                </MagazineBodyBox>{" "}
            </ContentTable>
            <ButtonContainer style={{ marginTop: "20px" }}>
                <Button>미리보기</Button>
                <Button onClick={updateFinishButtonOnClickHandler}>수정완료</Button>
            </ButtonContainer>
        </Container>
    );
}

export default MagazineContentTableModifyForm;
