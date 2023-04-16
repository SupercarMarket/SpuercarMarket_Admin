import React, { useCallback } from "react";
import { MagazineHeaderBox, MagazineHeaderThumbnail, MagazineTitleTextArea } from "./MagazineEditorHeaderBoxForm.styled";
import ThumbnailBoxForm from "../ThumbnailBox/ThumbnailBoxForm";

interface Props {
    titleRef: React.RefObject<HTMLTextAreaElement>;
    defaultValue: string;
    thumbnailImage: string;
    setThumbnailImage: Function;
    setUploadedImage: Function;
}

function MagazineEditorHeaderBoxForm({ titleRef, defaultValue, thumbnailImage, setThumbnailImage, setUploadedImage }: Props) {
    const textareaResizeHandler = useCallback(() => {
        if (titleRef && titleRef.current) {
            titleRef.current.style.height = titleRef.current.scrollHeight + "px";
        }
    }, []);

    return (
        <>
            {thumbnailImage && <MagazineHeaderThumbnail src={thumbnailImage} />}
            <MagazineHeaderBox>
                <ThumbnailBoxForm thumbnailImage={thumbnailImage} setThumbnailImage={setThumbnailImage} setUploadedImage={setUploadedImage} />
                <MagazineTitleTextArea defaultValue={defaultValue} ref={titleRef} placeholder="제목을 입력해주세요." onInput={textareaResizeHandler} />
            </MagazineHeaderBox>
        </>
    );
}

export default MagazineEditorHeaderBoxForm;
