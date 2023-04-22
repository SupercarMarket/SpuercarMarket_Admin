import React from "react";

export interface DropDownPropsType {
  category: string;
  // onclick event propps
  LiOnClick: React.MouseEventHandler<HTMLLIElement>;
  titleRef: React.RefObject<HTMLSpanElement>;
}

export interface MonthDropDownPropsType {
  category: string;
  LiOnClick: React.MouseEventHandler<HTMLLIElement>;
  monthResList: string[];
}

export interface DropDownMapItemsType {
  [key: string]: { name: string }[];
}

export interface DropDownMapType {
  [key: string]: string;
}

const year = new Date().getFullYear();
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
  member_admin: [
    { name: "전체" },
    { name: "닉네임" },
    { name: "전화번호" },
    { name: "이메일" },
  ],
  market_list: [
    { name: "전체" },
    { name: "차종" },
    { name: "제목" },
    { name: "매물 상태" },
    { name: "등록 일자" },
    { name: "딜러 회원번호" },
    { name: "딜러 아이디" },
    { name: "딜러 이름" },
    { name: "딜러 닉네임" },
  ],
  magazine_list: [{ name: "전체" }, { name: "등록 일자" }],
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
  advertisement_show: [{ name: "전체" }, { name: "진행 중" }, { name: "종료" }],
  etcInquiry_list: [
    { name: "전체" },
    { name: "아이디" },
    { name: "이름" },
    { name: "닉네임" },
    { name: "제목" },
    { name: "내용" },
  ],
  banner_list: [
    { name: "전체" },
    { name: "PC" },
    { name: "Mobile" },
  ],
  banner_order_list: [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "7" },
    { name: "8" },
    { name: "9" },
    { name: "10" },
  ],
  advertisement_page_list: [
    { name: "메인" },
    { name: "매장" },
    { name: "매거진" },
    { name: "커뮤니티" },
    { name: "제휴업체" },
    { name: "문의" },
    { name: "통합검색" },
    { name: "LIVE" },
  ],

  month_list: [
    { name: "1월" },
    { name: "2월" },
    { name: "3월" },
    { name: "4월" },
    { name: "5월" },
    { name: "6월" },
    { name: "7월" },
    { name: "8월" },
    { name: "9월" },
    { name: "10월" },
    { name: "11월" },
    { name: "12월" },
  ],

  year_list: [
    { name: year.toString()},
    { name: (parseInt(year.toString(),10)+1).toString() },
    { name: (parseInt(year.toString(),10)+2).toString() },
  ],
};

export const MemberListDropDownMap: DropDownMapType = {
  전체: "all",
  회원번호: "userSeq",
  아이디: "userId",
  닉네임: "userNickName",
  전화번호: "userPhone",
  이메일: "userEmail",
};

export const MemberListSwitchDropDownMap: DropDownMapType = {
  all: "전체",
  userSeq: "회원번호",
  userId: "아이디",
  userNickName: "닉네임",
  userPhone: "전화번호",
  userEmail: "이메일",
};

export const DealerInquiryListDropDownMap: DropDownMapType = {
  전체: "all",
  상사명: "comName",
  "상사 전화번호": "comPhone",
  "상사 주소": "comAddress",
  조합명: "guildName",
  "사원증 번호": "dlrNum",
};

export const DealerInquiryListSwitchDropDownMap: DropDownMapType = {
  all: "전체",
  comName: "상사명",
  comPhone: "상사 전화번호",
  comAddress: "상사 주소",
  guildName: "조합명",
  dlrNum: "사원증 번호",
};

export const AdminListDropDownMap: DropDownMapType = {
  전체: "all",
  닉네임: "nickname",
  이메일: "email",
  전화번호: "phone",
};

export const AdminListSwitchDropDownMap: DropDownMapType = {
  all: "전체",
  nickname: "닉네임",
  email: "이메일",
  phone: "전화번호",
};

export const MarketListDropDownMap: DropDownMapType = {
  전체: "all",
  차종: "category",
  제목: "title",
  "매물 상태": "status",
  "등록 일자": "createdDate",
  "딜러 회원번호": "dealerSeq",
  "딜러 아이디": "id",
  "딜러 닉네임": "nickname",
  "딜러 이름": "name",
};

export const MarketListSwitchDropDownMap: DropDownMapType = {
  all: "전체",
  category: "차종",
  title: "제목",
  status: "매물 상태",
  createdDate: "등록 일자",
  dealerSeq: "딜러 회원번호",
  id: "딜러 아이디",
  nickname: "딜러 닉네임",
  name: "딜러 이름",
};

export const EtcInquiryListDropDownMap: DropDownMapType = {
  전체: "all",
  아이디: "userId",
  이름: "userName",
  닉네임: "userNickname",
  제목: "title",
  내용: "contents",
};
export const EtcInquiryListSwitchDropDownMap: DropDownMapType = {
  all: "전체",
  userId: "아이디",
  userName: "이름",
  userNickname: "닉네임",
  title: "제목",
  contents: "내용",
};
export const BannerListDropDownMap: DropDownMapType = {
  전체: "",
  PC: "D",
  Mobile: "M",
};
export const CooperationListDropDownMap: DropDownMapType = {
  전체: "ALL",
  업체명: "companyName",
  업종: "category",
  주소: "address",
};

export const CooperationListSwitchDropDownMap: DropDownMapType = {
  ALL: "전체",
  companyName: "업체명",
  category: "업종",
  address: "주소",
};

export const BannerOrderList: DropDownMapType = {
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "10": "10",
};

export const AdvertisementSetPageSwitchDropDownMap: DropDownMapType = {
  "메인": "SM001",
  "매장": "SM002",
  "매거진": "SM003",
  "커뮤니티": "SM004",
  "제휴업체": "SM005",
  "문의": "SM006",
  "통합검색": "SM007",
  "LIVE": "SM008",
};

export const AdvertisementSetMonthSwitchDropDownMap: DropDownMapType = {
  "1월": "1",
  "2월": "2",
  "3월": "3",
  "4월": "4",
  "5월": "5",
  "6월": "6",
  "7월": "7",
  "8월": "8",
  "9월": "9",
  "10월": "10",
  "11월": "11",
  "12월": "12",
};

export const AdvertisementSetYearSwitchDropDownMap: DropDownMapType = {
  "1": year.toString(),
  "2": (parseInt(year.toString(),10)+1).toString(),
  "3": (parseInt(year.toString(),10)+2).toString(),
};