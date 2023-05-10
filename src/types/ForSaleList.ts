export interface ForSaleListPropsType {
  // offset
  offset: number;
  // 페이지 수
  postsPerPage: number;
  // 전체 데이터 개수
  totalContentsCount: number;
}

// 매물 카테고리 type
interface CategoryMapType {
  [key: string]: string;
}

export const CategoryMap: CategoryMapType = {
  all: "전체",
  "sports-car": "스포츠카",
  saloon: "세단",
  suv: "SUV",
  "pickup-truck": "픽업트럭",
  "classic-car": "클래식카&올드카",
};

// 매물 리스트 initial type
export interface MarketListType {
  brdSeq: number;
  category: string;
  title: string;
  pdtStatus: string;
  createdDate: string;
  dlrSeq: number;
  name: string;
  userId: string;
  userNickName: string;
  pdtAppear: boolean;
  pdtDelete: boolean;
}
// 매물 상세 리스트 type
interface MarketItemDetailType {
  carNumber: string;
  category: string;
  carName: string;
  brand: string;
  model: string;
  regDate: string;
  year: string;
  fuel: string;
  cc: string;
  mileage: number;
  color: string;
  accident: boolean;
  // 두개 바뀐듯
  price: string;
  sellType: number;
  //
  transmissionType: string;
  appear: boolean;
  description: string;
  introduction: string;
  imgSrc: string[];
  attSrc: AttchType;
  dealerInfo: MarketItemUserInfo;
}

// 매물 문의 상세 리스트 type
interface MarketInquiryItemDetailType {
  carNumber: string;
  category: string;
  carName: string;
  brand: string;
  model: string;
  regDate: string;
  year: string;
  fuel: string;
  cc: string;
  mileage: number;
  color: string;
  accident: boolean;
  // 두개 바뀐듯
  price: string;
  sellType: number;
  //
  transmissionType: string;
  appear: boolean;
  description: string;
  introduction: string;
  imgSrc: string[];
  attSrc: AttchType;
  accept: string;
  dealerInfo: MarketItemUserInfo;
}

// 매물 등록자 정보
interface MarketItemUserInfo {
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
  regAdmin: string;
  regAdminEmail: string;
  comment: string;
}

// attchSrc type
type AttchType = {
  originName: string;
  attAttachmentUrl: string;
}[];

// reducer initial type
export interface InitMarketStateType {
  isLoading: boolean;
  totalCount: number;
  totalPages: number;
  filter?: string;
  keyword?: string;
  allChecked: boolean;
  list: MarketListType[];
  checkList: number[];
  isChecked: boolean;
  currentPage: number;
  // 상세 조회
  detailItem?: MarketItemDetailType;
}

/* 판매차량 리스트 */
export interface ForSaleInitType {
  isLoading: boolean;
  totalPages: number;
  totalCount: number;
  currentPage: number;
  filter: string;
  keyword: string;
  list: ForSaleListType[];

  detailItem?: MarketItemDetailType;
  inquiryDetailItem?: MarketInquiryItemDetailType;
}

interface ForSaleListType {
  brdSeq: number;
  pinfCarNumber: string;
  category: string;
  title: string;
  model: string;
  brand: string;
  pinfYear: string;
  pinfRegDate: string;
  pinfFuel: string;
  pinfCc: string;
  pinfMileage: number;
  pinfColor: string;
  pinfAccidentHistory: boolean;
  pdtSellType: string;
  pdtPrice: number;
  isAccepted: string;
}
