// 매거진 리스트 initial type
export interface MagazineTmpListType {
    brdSeq: number;
    title: string;
    createdDate: string;
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
    id: number;
    thumbnail: string;
    contentHtml: string;
    createAt: string;
    updateAt: string;
    user: MagazineWriterType;
}

// reducer initial type
export interface InitMagazineTmpStateType {
    isLoading: boolean;
    totalCount: number;
    totalPages: number;
    allChecked: boolean;
    list: MagazineTmpListType[];
    checkList: number[];
    isChecked: boolean;
    currentPage: number;
    // 상세 조회
    detailItem: MagazineDetailType;
}

