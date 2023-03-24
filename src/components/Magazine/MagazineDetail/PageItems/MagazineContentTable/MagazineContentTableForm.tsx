import React from "react";
import { useAppSelector } from "store/rootReducer";
import {
    Container,
    MagazineHeaderBox,
    MagazineBodyBox,
    ContentTable,
    MagazineTitle,
    MagazineWriter,
    MagazineCount,
    MagazineInfo,
    MagazineProfileImage,
    MagazineCreatedDate,
    MagazineContent,
} from "./MagazineContentTableForm.styled";

import { ReactComponent as EyeIcon } from "assets/eye.svg";
import { ReactComponent as ChatIcon } from "assets/chat.svg";

function MagazineContentTableForm() {
    const { detailItem } = useAppSelector((state) => state.MagazineListSlice);
    return (
        <Container>
            <ContentTable>
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
                <MagazineBodyBox>
                    <MagazineContent dangerouslySetInnerHTML={{ __html: detailItem.contentHtml }}></MagazineContent>
                </MagazineBodyBox>
            </ContentTable>
        </Container>
    );
}

export default MagazineContentTableForm;
