// 매거진 리스트 initial type
export interface MagazineListType {
    brdSeq: number;
    title: string;
    createdDate: string;
    likeCount: number;
    cmtCount: number;
    viewCount: number;
    hidden: boolean;
}

interface MagazineWriterType {
    id: number;
    nickName: string;
    call: string;
    profileSrc: string;
}

// 매거진 상세 리스트 type
interface MagazineDetailType {
    title: string;
    totalCommentCount: number;
    hidden: boolean;
    id: number;
    thumbnail: string;
    view: number;
    contentHtml: string;
    isScraped: boolean;
    isCounseling: boolean;
    createdAt: string;
    updatedAt: string;
    user: MagazineWriterType;
}

// reducer initial type
export interface InitMagazineStateType {
    isLoading: boolean;
    totalCount: number;
    totalPages: number;
    keywordAll?: string;
    keywordTitle?: string;
    allDate: boolean;
    startDate: Date;
    endDate: Date;
    allChecked: boolean;
    list: MagazineListType[];
    checkList: number[];
    isChecked: boolean;
    currentPage: number;
    // 상세 조회
    detailItem: MagazineDetailType;
}
