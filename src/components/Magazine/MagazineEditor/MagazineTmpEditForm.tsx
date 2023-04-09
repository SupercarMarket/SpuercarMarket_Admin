import React, { useEffect, useRef, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { getMagazineTmpDetail, initMagazineTmpDetail } from "redux/modules/MagazineTmpSlice";
import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { deleteMagazineTmpHandler, newMagazineHandler, newMagazineTmpHandler, updateMagazineTmpHandler } from "utils/api/Magazine/MagazineTmpAPI";
import { deleteImage, getFileNameFromHTML, getNotEqualFileList } from "utils/api/S3Upload/AdminS3ClientAPI";
import { Button } from "../styles/buttonStyles";

import { ButtonContainer, Wrapper, Container, ContentTable, MagazineBodyBox } from "./MagazineTmpEditForm.styled";
import MagazineEditorHeaderBoxForm from "./PageItems/MagazineEditorHeaderBox/MagazineEditorHeaderBoxForm";
import TuiEditorForm from "./PageItems/TuiEditor/TuiEditorForm";
import TuiPreviewForm from "./PageItems/TuiPreview/TuiPreviewForm";

function MagazineTmpEditForm() {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const { isLoading, detailItem } = useAppSelector((state) => state.MagazineTmpSlice);
    const navigate = useNavigate();
    const [uploadedImage, setUploadedImage] = useState<string[]>([]);
    const [thumbnailImage, setThumbnailImage] = useState("");
    const [isViewerOn, setIsViewerOn] = useState(false);

    useEffect(() => {
        if (location.state && location.state.id) {
            dispatch(getMagazineTmpDetail({ id: location.state.id })).then(() => {
                const uploaded = getImageURLFromHTML();
                setUploadedImage(uploaded);
                setThumbnailImage(detailItem.thumbnail);
            });
        } else {
            dispatch(initMagazineTmpDetail()).then(() => {
                setUploadedImage([]);
                setThumbnailImage("");
            });
        }
    }, [location.state, dispatch]);

    const titleRef = useRef<HTMLTextAreaElement>(null);
    const contentRef = useRef<any>(null);

    const saveTmpButtonOnClickHandler = () => {
        if (titleRef.current && contentRef.current) {
            if (titleRef.current.value === "") {
                alert("제목을 입력해주세요!");
                return;
            }
            const delFileList: string[] = getNotEqualFileList(uploadedImage, getImageURLFromHTML());
            console.log(delFileList);
            if (delFileList.length !== 0) {
                deleteImage(delFileList);
            }
            if (location.state && location.state.id) {
                console.log("update");
                updateMagazineTmpHandler(location.state.id, contentRef.current.getInstance().getHTML(), thumbnailImage, titleRef.current.value)
                    .then((response) => {
                        if (response?.status === 200) {
                            navigate("/magazinetmp");
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                console.log("new");
                newMagazineTmpHandler(contentRef.current.getInstance().getHTML(), thumbnailImage, titleRef.current.value)
                    .then((response) => {
                        if (response?.status === 200) {
                            navigate("/magazinetmp");
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    };

    const saveMagazineButtonOnClickHandler = () => {
        if (titleRef.current && contentRef.current) {
            if (titleRef.current.value === "") {
                alert("제목을 입력해주세요!");
                return;
            }
            const delFileList: string[] = getNotEqualFileList(uploadedImage, getImageURLFromHTML());
            console.log(delFileList);
            if (delFileList.length !== 0) {
                deleteImage(delFileList);
            }
            newMagazineHandler(contentRef.current.getInstance().getHTML(), thumbnailImage, titleRef.current.value)
                .then((response) => {
                    if (response?.status === 200) {
                        if (location.state && location.state.id) {
                            deleteMagazineTmpHandler([location.state.id]).catch((error) => {
                                console.log(error);
                            });
                        }
                        navigate("/magazinetmp");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const getImageURLFromHTML = () => {
        if (contentRef.current) {
            if (contentRef.current.getInstance().getHTML()) {
                return getFileNameFromHTML(contentRef.current.getInstance().getHTML()) as string[];
            }
        }
        return [] as string[];
    };

    return (
        <Container>
            {!isLoading ? (
                <Wrapper>
                    <ContentTable>
                        <MagazineEditorHeaderBoxForm titleRef={titleRef} defaultValue={detailItem.title} thumbnailImage={thumbnailImage} setThumbnailImage={setThumbnailImage} />
                        <MagazineBodyBox>
                            {!isViewerOn ? (
                                <TuiEditorForm contents={detailItem.contents} editorRef={contentRef} setUploadedImage={setUploadedImage} />
                            ) : (
                                <TuiPreviewForm contents={contentRef.current.getInstance().getHTML()} />
                            )}
                        </MagazineBodyBox>
                    </ContentTable>
                    <ButtonContainer style={{ marginTop: "20px" }}>
                        {!isViewerOn ? (
                            <>
                                <Button onClick={saveTmpButtonOnClickHandler}>임시저장</Button>
                                <Button onClick={() => setIsViewerOn(true)}>미리보기</Button>
                                <Button onClick={saveMagazineButtonOnClickHandler}>게시하기</Button>
                            </>
                        ) : (
                            <>
                                <Button onClick={() => setIsViewerOn(false)}>수정하기</Button>
                                <Button onClick={saveMagazineButtonOnClickHandler}>게시하기</Button>
                            </>
                        )}
                    </ButtonContainer>
                </Wrapper>
            ) : (
                <div>조회중입니다.</div>
            )}
        </Container>
    );
}

export default MagazineTmpEditForm;
