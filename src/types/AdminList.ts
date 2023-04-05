// 관리자 리스트  type
export interface AdminListType {
    admSeq: number;
    admProfileImageUrl: string;
    admName: string;
    admPhone: string;
    admEmail: string;
    nickName: string;
    regMagazineCount: number;
    isBlock: boolean;
}

// 관리자 상세정보 type
interface AdminListDetailType {
    admSeq: number;
    admProfileImageUrl: string;
    admName: string;
    admPhone: string;
    admEmail: string;
    nickName: string;
    regMagazineCount: number;
    isBlock: boolean;
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
