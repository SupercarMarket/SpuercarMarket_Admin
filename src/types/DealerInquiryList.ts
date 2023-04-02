// 딜러요청 리스트  type
export interface DealerInquiryListType {
    userSeq: number;
    comName: string;
    comAddress: string;
    comPhone: string;
    guildName: string;
    dlrNum: string;
    dlrEmployeeCardFront: string;
    dlrEmployeeCardBack: string;
    dlrProfileImage: string;
    comment: string;
}

// 딜러요청 상세정보 type
interface DealerInquiryListDetailType {
    dlrSeq: number;
    comName: string;
    comPhone: string;
    comAddress: string;
    guildName: string;
    dlrNum: string;
    dlrEmployeeCardFront: string;
    dlrEmployeeCardBack: string;
    dlrProfileImage: string;
    userId: string;
    userName: string;
    userNickName: string;
    userEmail: string;
    userPhone: string;
    userRating: string;
    createdDate: string;
    postCount: number;
    commentCount: number;
    comment: string;
    regAdmin: string;
    regAdminEmail: string;
    regAdminNickname: string;
}

// reducer initial type
export interface InitDealerInquiryStateType {
    isLoading: boolean;
    totalCount: number;
    totalPages: number;
    filter: string;
    keyword: string;
    list: DealerInquiryListType[];
    currentPage: number;
    // 상세 조회
    detailItem: DealerInquiryListDetailType;
}
