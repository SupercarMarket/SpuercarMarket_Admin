export interface CooperationPropsType {
  offset: number;
  postsPerPage: number;
  totalContentsCount: number;
}

// 매물 카테고리 type
interface CategoryMapType {
  [key: string]: string;
}

export const CategoryMap: CategoryMapType = {
  ALL: "전체",
  commpanyName: "업체명",
  category: "업종",
  address: "주소",
};

export const TypeOfBusiness: CategoryMapType = {
  DEALER_SHOP: "자동차 매장",
  CAR_CENTER: "공업사",
  DETAILING: "디테일링",
  ETC: "기타",
};

export interface CooperationListType {
  brdSeq: number;
  userName: string;
  address: string;
  category: string;
  treatedItem: string;
  workingTime: string;
  website: string;
  wiredNumber: string;
  phoneNumber: string;
  createdDate: string;
  companyName: string;
}

export interface InitCooperationStateType {
  isLoading: boolean;
  totalElements: number;
  totalPages: number;
  filter?: string;
  keyword?: string;
  allChecked: boolean;
  list: CooperationListType[];
  checkList: number[];
  isChecked: boolean;
  currentPage: number;
  // 상세 조회
}
