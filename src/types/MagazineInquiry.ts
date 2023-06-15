// 매거진 리스트 initial type
export interface MagazineInquiryListType {
  brdSeq: number;
  title: string;
  userId: string;
  userName: string;
  userPhone: string;
  status: string;
  createDate: string;
}

// 매거진 상세 리스트 type
interface MagazineDetailType {
  brdSeq: number;
  title: string;
  userId: string;
  userName: string;
  userPhone: string;
  status: string;
  createDate: string;
}

// reducer initial type
export interface InitMagazineInquiryStateType {
  isLoading: boolean;
  totalCount: number;
  totalPages: number;
  allChecked: boolean;
  list: MagazineInquiryListType[];
  checkList: number[];
  isChecked: boolean;
  currentPage: number;
  // 상세 조회
  detailItem: MagazineDetailType;
}
