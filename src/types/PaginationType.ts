import React from "react";

export interface PaginationPropsType {
    // 페이지 수
    pagintaionCount : number;
    // 페이지에 그려지는 개수 default 20개씩
    postsPerPage : number;
    // 이동될 페이지
    isPage : number;
    // 표에 그려질 총 아이템 개수
    totalContentsCount : number;
    // isPage의 useState 함수
    setIsPage : React.Dispatch< React.SetStateAction<number>>;
}