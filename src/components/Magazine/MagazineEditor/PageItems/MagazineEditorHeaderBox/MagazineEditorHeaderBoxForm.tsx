import React, { useCallback } from "react";
import { MagazineHeaderBox, MagazineHeaderThumbnail, MagazineTitleTextArea } from "./MagazineEditorHeaderBoxForm.styled";
import ThumbnailBoxForm from "../ThumbnailBox/ThumbnailBoxForm";

interface Props {
    titleRef: React.RefObject<HTMLTextAreaElement>;
    defaultValue: string;
    thumbnailImage: string;
    setThumbnailImage: Function;
}

function MagazineEditorHeaderBoxForm({ titleRef, defaultValue, thumbnailImage, setThumbnailImage }: Props) {
    const textareaResizeHandler = useCallback(() => {
        if (titleRef && titleRef.current) {
            titleRef.current.style.height = titleRef.current.scrollHeight + "px";
        }
    }, []);

    return (
        <>
            <MagazineHeaderThumbnail src={thumbnailImage} />
            <MagazineHeaderBox>
                <ThumbnailBoxForm thumbnailImage={thumbnailImage} setThumbnailImage={setThumbnailImage} />
                <MagazineTitleTextArea defaultValue={defaultValue} ref={titleRef} placeholder="제목을 입력해주세요." onInput={textareaResizeHandler} />
            </MagazineHeaderBox>
        </>
    );
}

export default MagazineEditorHeaderBoxForm;
