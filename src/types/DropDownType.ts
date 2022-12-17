export interface DropDownPropsType {
    category: string;
}

export interface DropDownMapItemsType {
    [key: string]: { name: string, value: string }[];
}

// name은 해당 카테고리의 문구
// value는 해당 카테고리가 선택되었을 때, 전달해줄 의미로 두었습니다.
// selector에 들어갈 문구 및 value 값입니다.
export const DropDownItemMap: DropDownMapItemsType = {
    member_list: [
        { name: "전체", value: "member_list_all" },
        { name: "회원번호", value: "member_list_member_num" },
        { name: "아이디", value: "member_list_member_id" },
        { name: "이름", value: "member_list_member_name" },
        { name: "닉네임", value: "member_list_member_nickname" },
        { name: "전화번호", value: "member_list_member_call" },
        { name: "이메일", value: "member_list_member_email" },
    ],
    member_class: [
        { name: "브론즈", value: "member_class_bronze" },
        { name: "실버", value: "member_class_silver" },
        { name: "골드", value: "member_class_gold" },
        { name: "플레티넘", value: "member_class_platinum" },
        { name: "다이아", value: "member_class_diamond" },
        { name: "마스터", value: "member_class_master" },
    ],
    member_dealer: [
        { name: "전체", value: "member_dealer_all" },
        { name: "상사명", value: "dealer_company_name" },
        { name: "상사 전화번호", value: "member_dealer_company_call" },
        { name: "상사 주소", value: "member_dealer_company_address" },
        { name: "조합명", value: "member_dealer_union_name" },
        { name: "사원증 번호", value: "member_dealer_employee_number" },
    ],
    market_list: [
        { name: "전체", value: "market_list_all" },
        { name: "차종", value: "market_list_car_category" },
        { name: "제목", value: "market_list_title" },
        { name: "매물 상태", value: "market_list_sale_status" },
        { name: "등록 일자", value: "market_list_registration_date" },
        { name: "딜러 회원번호", value: "market_list_dealer_membership_number" },
        { name: "딜러 아이디", value: "market_list_dealer_id" },
        { name: "딜러 이름", value: "market_list_dealer_name" },
        { name: "딜러 닉네임", value: "market_list_dealer_nickname" },
    ],
    magazine_list: [
        { name: "전체", value: "magazine_list_all" },
        { name: "등록 일자", value: "magazine_list_registration_date" },
    ],
    community_list: [
        { name: "전체", value: "community_list_all" },
        { name: "제목", value: "community_list_registration_date" },
        { name: "작성자 회원번호", value: "community_list_writer_num" },
        { name: "작성자 아이디", value: "community_list_writer_id" },
        { name: "작성자 이름", value: "community_list_writer_name" },
        { name: "작성자 닉네임", value: "community_list_writer_nickname" },
        { name: "등록 일자", value: "community_list_registration_date" },
    ],
    community_list_category: [
        { name: "전체", value: "community_list_category_all" },
        { name: "제보", value: "" },
        { name: "포토 갤러리", value: "" },
        { name: "내 차 자랑", value: "" },
        { name: "차량 정보", value: "" },
    ],
    cooperation_list: [
        { name: "전체", value: "cooperation_list_all" },
        { name: "업체명", value: "" },
        { name: "업종", value: "" },
        { name: "주소", value: "" },
    ],
    advertisement_position: [
        { name: "전체", value: "" },
        { name: "위치1", value: "" },
        { name: "위치2", value: "" },
        { name: "위치3", value: "" },
        { name: "위치4", value: "" },
    ],
    advertisement_show: [
        { name: "전체", value: "" },
        { name: "진행 중", value: "" },
        { name: "종료", value: "" },
    ],
};