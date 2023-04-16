import React, { useEffect, useState, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getMagazineDetail, getMagazineHistory } from "redux/modules/MagazineListSlice";
import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { undiscloseMagazineHandler } from "utils/api/Magazine/MagazineListAPI";
import { Button } from "../styles/buttonStyles";

import { ButtonContainer, Wrapper, Container, MagazineBodyBox, Table } from "./MagazineDetailForm.styled";
import MagazineDetailHistoryForm from "./PageItems/MagazineHistory/MagazineDetailHistoryForm";
import MagazineDetailHeaderForm from "./PageItems/MagazineDetailHeader/MagazineDetailHeaderForm";
import TuiPreviewForm from "../MagazineEditor/PageItems/TuiPreview/TuiPreviewForm";
import MagazineEditorHeaderBoxForm from "../MagazineEditor/PageItems/MagazineEditorHeaderBox/MagazineEditorHeaderBoxForm";
import TuiEditorForm from "../MagazineEditor/PageItems/TuiEditor/TuiEditorForm";
import { updateMagazineHandler } from "utils/api/Magazine/MagazineListAPI";
import { deleteImage, getFileNameFromHTML, getNotEqualFileList } from "utils/api/S3Upload/AdminS3ClientAPI";

function MagazineDetailForm() {
    const { brdSeq } = useParams();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const [thumbnailImage, setThumbnailImage] = useState("");
    const [uploadedImage, setUploadedImage] = useState([]);
    const [isModifying, setIsModifying] = useState(true);
    const [isPreview, setIsPreview] = useState(false);
    const [magazineHidden, setMagazineHidden] = useState(false);
    const { isLoading, detailItem } = useAppSelector((state) => state.MagazineListSlice);

    const titleRef = useRef<HTMLTextAreaElement>(null);
    const contentRef = useRef<any>(null);

    useEffect(() => {
        dispatch(getMagazineDetail({ brdSeq: brdSeq as string })).then(() => {
            setMagazineHidden(detailItem.hidden);
            setThumbnailImage(detailItem.thumbnail);
            dispatch(getMagazineHistory({ brdSeq: brdSeq as string }));
        });
        setIsModifying(location.state.edit || false);
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

    const submitButtonOnClickHandler = () => {
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
            updateMagazineHandler(brdSeq as string, contentRef.current.getInstance().getHTML(), thumbnailImage, titleRef.current.value)
                .then((response) => {
                    if (response?.status === 200) {
                        dispatch(getMagazineDetail({ brdSeq: brdSeq as string })).then(() => {
                            setMagazineHidden(detailItem.hidden);
                            setThumbnailImage(detailItem.thumbnail);
                            dispatch(getMagazineHistory({ brdSeq: brdSeq as string }));
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            setIsModifying(false);
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
                    {!isModifying ? (
                        <>
                            <Table>
                                <MagazineDetailHeaderForm />
                                <MagazineBodyBox>
                                    <TuiPreviewForm contents={detailItem.contents} />
                                </MagazineBodyBox>
                            </Table>
                            <ButtonContainer>
                                <Button onClick={() => setIsModifying(true)}>수정하기</Button>
                                {!magazineHidden ? <Button onClick={hideButtonOnClickHandler}>숨기기</Button> : <Button onClick={unhideButtonOnClickHandler}>숨기기 취소</Button>}
                            </ButtonContainer>
                        </>
                    ) : (
                        <>
                            <Table>
                                <MagazineEditorHeaderBoxForm
                                    titleRef={titleRef}
                                    defaultValue={detailItem.title}
                                    thumbnailImage={thumbnailImage}
                                    setThumbnailImage={setThumbnailImage}
                                    setUploadedImage={setUploadedImage}
                                />
                                <MagazineBodyBox>
                                    {!isPreview ? (
                                        <TuiEditorForm contents={detailItem.contents} editorRef={contentRef} setUploadedImage={setUploadedImage} />
                                    ) : (
                                        <TuiPreviewForm contents={contentRef.current.getInstance().getHTML()} />
                                    )}
                                </MagazineBodyBox>
                            </Table>
                            <ButtonContainer>
                                {!isPreview ? <Button onClick={() => setIsPreview(true)}>미리보기</Button> : <Button onClick={() => setIsPreview(false)}>수정하기</Button>}
                                <Button onClick={submitButtonOnClickHandler}>게시하기</Button>
                            </ButtonContainer>
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
