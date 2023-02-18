import React from "react";

export interface DropDownPropsType {
    category: string;
    // onclick event propps
    LiOnClick : React.MouseEventHandler<HTMLLIElement>
}

export interface DropDownMapItemsType {
    [key: string]: { name: string }[];
}

export interface DropDownMapType {
    [key:string] : string
}

// name은 해당 카테고리의 문구
// value는 해당 카테고리가 선택되었을 때, 전달해줄 의미로 두었습니다.
// selector에 들어갈 문구 및 value 값입니다.
export const DropDownItemMap: DropDownMapItemsType = {
    member_list: [
        { name: "전체" },
        { name: "회원번호" },
        { name: "아이디" },
        { name: "이름" },
        { name: "닉네임" },
        { name: "전화번호" },
        { name: "이메일" },
    ],
    member_class: [
        { name: "브론즈" },
        { name: "실버" },
        { name: "골드" },
        { name: "플레티넘" },
        { name: "다이아" },
        { name: "마스터" },
    ],
    member_dealer: [
        { name: "전체" },
        { name: "상사명" },
        { name: "상사 전화번호" },
        { name: "상사 주소" },
        { name: "조합명" },
        { name: "사원증 번호" },
    ],
    market_list: [
        { name: "전체" },
        { name: "차종" },
        { name: "제목" },
        { name: "매물 상태"},
        { name: "등록 일자" },
        { name: "딜러 회원번호" },
        { name: "딜러 아이디" },
        { name: "딜러 이름" },
        { name: "딜러 닉네임" },
    ],
    magazine_list: [
        { name: "전체" },
        { name: "등록 일자" },
    ],
    community_list: [
        { name: "전체" },
        { name: "제목" },
        { name: "작성자 회원번호" },
        { name: "작성자 아이디" },
        { name: "작성자 이름" },
        { name: "작성자 닉네임" },
        { name: "등록 일자" },
    ],
    community_list_category: [
        { name: "전체" },
        { name: "제보" },
        { name: "포토 갤러리" },
        { name: "내 차 자랑" },
        { name: "차량 정보" },
    ],
    cooperation_list: [
        { name: "전체" },
        { name: "업체명" },
        { name: "업종" },
        { name: "주소" },
    ],
    advertisement_position: [
        { name: "홈" },
        { name: "매장" },
        { name: "매거진" },
        { name: "커뮤니티" },
        { name: "제휴업체" },
        { name: "문의" },
        { name: "통합검색" },
    ],
    advertisement_show: [
        { name: "전체" },
        { name: "진행 중" },
        { name: "종료" },
    ],
};

export const MarketListDropDownMap : DropDownMapType = {
    '전체' : 'all',
    '차종' : 'category',
    '제목' : 'title',
    '매물 상태' : 'status',
    '등록 일자' : 'createDate',
    '딜러 회원번호' : 'dealerSeq',
    '딜러 아이디' : 'id',
    '딜러 닉네임' : 'nickname',
    '딜러 이름' : 'name'
}