// 관리자 리스트  type
export interface AdminListType {
    admSeq: number;
    admProfileImageUrl: string;
    admName: string;
    admPhone: string;
    admEmail: string;
    admNickname: string;
    regMagazineCount: number;
}

// 딜러요청 상세정보 type
interface AdminListDetailType {
    admSeq: number;
    admProfileImageUrl: string;
    admName: string;
    admPhone: string;
    admEmail: string;
    regMagazineCount: number;
}

// reducer initial type
export interface InitAdminStateType {
    isLoading: boolean;
    totalCount: number;
    totalPages: number;
    filter: string;
    keyword: string;
    list: AdminListType[];
    currentPage: number;
    // 상세 조회
    detailItem: AdminListDetailType;
}
