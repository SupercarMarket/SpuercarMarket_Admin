// 매거진 리스트 initial type
export interface MagazineTmpListType {
    id: number;
    title: string;
    created: string;
}

// 매거진 상세 리스트 type
interface MagazineDetailType {
    title: string;
    brdSeq: number;
    thumbnail: string;
    contents: string;
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
