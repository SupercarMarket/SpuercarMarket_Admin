import React from "react";
import { useAppSelector } from "store/rootReducer";

import { MagazineHeaderBox, MagazineTitle, MagazineInfo, MagazineProfileImage, MagazineWriter, MagazineCreatedDate, MagazineCount } from "./MagazineDetailHeaderForm.styled";

import { ReactComponent as EyeIcon } from "assets/eye.svg";
import { ReactComponent as ChatIcon } from "assets/chat.svg";

function MagazineDetailHeaderForm() {
    const { detailItem } = useAppSelector((state) => state.MagazineListSlice);
    return (
        <MagazineHeaderBox imageUrl={detailItem.thumbnail}>
            <MagazineTitle>{detailItem.title}</MagazineTitle>
            <MagazineInfo>
                <MagazineProfileImage imageUrl={detailItem.user.profileSrc} />
                <MagazineWriter>{detailItem.user.nickName}</MagazineWriter>
                <MagazineCreatedDate>{detailItem.createAt}</MagazineCreatedDate>
                <MagazineCount>
                    <EyeIcon width="15px" fill="white" />
                    <span style={{ marginRight: "10px" }}>{detailItem.view}</span>
                    <ChatIcon width="15px" fill="white" />
                    <span>{detailItem.totalCommentCount}</span>
                </MagazineCount>
            </MagazineInfo>
        </MagazineHeaderBox>
    );
}

export default MagazineDetailHeaderForm;
