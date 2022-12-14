export interface DropDownPropsType {
    category: string;
}

export interface DropDownMapSelecterType {
    [key: string]: { name: string, value: string };
}

export interface DropDownMapItemsType {
    [key: string]: { name: string, value: string }[];
}

// name은 해당 카테고리의 문구
// value는 해당 카테고리가 선택되었을 때, 전달해줄 의미로 두었습니다.
// selector에 들어갈 문구 및 value 값입니다.
export const DropDownSelecterMap: DropDownMapSelecterType = {
    member_list: { name: "전체", value: "member_list_all" },
    member_class: { name: "브론즈", value: "member_class_bronze" },
    member_dealer: { name: "전체", value: "member_dealer_all" },
    market_list: { name: "전체", value: "market_list_all" },
    market_seller: { name: "전체", value: "market_list_all" },
    magazine_list: { name: "전체", value: "magazine_list_all" },
    community_list: { name: "전체", value: "community_list_all" },
    community_list_category: { name: "전체", value: "community_list_category_all" },
    cooperation_list: { name: "전체", value: "cooperation_list_all" },
    advertisement_position: { name: "전체", value: "" },
    advertisement_show: { name: "전체", value: "" }
}

export const DropDownItemMap: DropDownMapItemsType = {
    member_list: [
        { name: "회원번호", value: "member_list_member_num" },
        { name: "아이디", value: "member_list_member_id" },
        { name: "이름", value: "member_list_member_name" },
        { name: "닉네임", value: "member_list_member_nickname" },
        { name: "전화번호", value: "member_list_member_call" },
        { name: "이메일", value: "member_list_member_email" },
    ],
    member_class: [
        { name: "실버", value: "member_class_silver" },
        { name: "골드", value: "member_class_gold" },
        { name: "플레티넘", value: "member_class_platinum" },
        { name: "다이아", value: "member_class_diamond" },
        { name: "마스터", value: "member_class_master" },
    ],
    member_dealer: [
        { name: "상사명", value: "dealer_company_name" },
        { name: "상사 전화번호", value: "member_dealer_company_call" },
        { name: "상사 주소", value: "member_dealer_company_address" },
        { name: "조합명", value: "member_dealer_union_name" },
        { name: "사원증 번호", value: "member_dealer_employee_number" },
    ],
    market_list: [
        { name: "차종", value: "market_list_car_category" },
        { name: "제목", value: "market_list_title" },
        { name: "매물 상태", value: "market_list_sale_status" },
        { name: "등록 일자", value: "market_list_registration_date" },
        { name: "딜러 회원번호", value: "market_list_dealer_membership_number" },
        { name: "딜러 아이디", value: "market_list_dealer_id" },
        { name: "딜러 이름", value: "market_list_dealer_name" },
        { name: "딜러 닉네임", value: "market_list_dealer_nickname" },
    ],
    market_seller: [
        { name: "차종", value: "market_seller_car_category" },
        { name: "제목", value: "market_seller_title" },
        { name: "매물 상태", value: "market_seller_sale_status" },
        { name: "등록 일자", value: "market_seller_registration_date" },
        { name: "딜러 회원번호", value: "market_seller_dealer_membership_number" },
        { name: "딜러 아이디", value: "market_seller_dealer_id" },
        { name: "딜러 이름", value: "market_seller_dealer_name" },
        { name: "딜러 닉네임", value: "market_seller_dealer_nickname" },
    ],
    magazine_list: [
        { name: "등록 일자", value: "magazine_list_registration_date" },
    ],
    community_list: [
        { name: "제목", value: "community_list_registration_date" },
        { name: "작성자 회원번호", value: "community_list_writer_num" },
        { name: "작성자 아이디", value: "community_list_writer_id" },
        { name: "작성자 이름", value: "community_list_writer_name" },
        { name: "작성자 닉네임", value: "community_list_writer_nickname" },
        { name: "등록 일자", value: "community_list_registration_date" },
    ],
    community_list_category: [
        { name: "제보", value: "" },
        { name: "포토 갤러리", value: "" },
        { name: "내 차 자랑", value: "" },
        { name: "차량 정보", value: "" },
    ],
    cooperation_list: [
        { name: "업체명", value: "" },
        { name: "업종", value: "" },
        { name: "주소", value: "" },
    ],
    advertisement_position: [
        { name: "위치1", value: "" },
        { name: "위치2", value: "" },
        { name: "위치3", value: "" },
        { name: "위치4", value: "" },
    ],
    advertisement_show: [
        { name: "진행 중", value: "" },
        { name: "종료", value: "" },
    ],
};