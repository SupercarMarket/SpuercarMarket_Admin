import React from "react";
import { useAppSelector } from "store/rootReducer";

import { MagazineHeaderBox, MagazineTitle, MagazineInfo, MagazineProfileImage, MagazineWriter, MagazineCreatedDate, MagazineCount } from "./MagazineDetailHeaderForm.styled";

import { ReactComponent as EyeIcon } from "assets/eye.svg";
import { ReactComponent as ChatIcon } from "assets/chat.svg";

type MagazineDetailHeaderProps = {
    thumbnailImageSrc: string;
    title: string;
    userProfileSrc: string;
    userNickName: string;
    postCreatedAt: string;
    postViewCnt: number;
    postCommentCnt: number;
};

function MagazineDetailHeaderForm({ thumbnailImageSrc, title, userProfileSrc, userNickName, postCreatedAt, postViewCnt, postCommentCnt }: MagazineDetailHeaderProps) {
    return (
        <MagazineHeaderBox imageUrl={thumbnailImageSrc}>
            <MagazineTitle>{title}</MagazineTitle>
            <MagazineInfo>
                <MagazineProfileImage imageUrl={userProfileSrc} />
                <MagazineWriter>{userNickName}</MagazineWriter>
                <MagazineCreatedDate>{postCreatedAt}</MagazineCreatedDate>
                <MagazineCount>
                    <EyeIcon width="15px" fill="white" />
                    <span style={{ marginRight: "10px" }}>{postViewCnt}</span>
                    <ChatIcon width="15px" fill="white" />
                    <span>{postCommentCnt}</span>
                </MagazineCount>
            </MagazineInfo>
        </MagazineHeaderBox>
    );
}

export default MagazineDetailHeaderForm;
