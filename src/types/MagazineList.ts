// 매거진 리스트 initial type
export interface MagazineListType {
    id: number;
    title: string;
    createdDate: string;
    scrapCount: number;
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
    contents: string;
    isScraped: boolean;
    isCounseling: boolean;
    createAt: string;
    updateAt: string;
    user: MagazineWriterType;
    editHistory: MagazineEditHistoryType[];
}

interface MagazineEditHistoryType {
    dateTime: string;
    historySeq: string;
    contents: string;
    admin: string;
    magazine: string;
}

// reducer initial type
export interface InitMagazineStateType {
    isLoading: boolean;
    isHistoryLoading: boolean;
    totalCount: number;
    totalPages: number;
    keyword?: string;
    title?: string;
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
