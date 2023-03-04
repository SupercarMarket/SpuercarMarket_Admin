export interface MemberListPropsType {
  // offset
  offset: number;
  // 페이지 수
  postsPerPage: number;
  // 전체 데이터 개수
  totalContentsCount: number;
}

// 멤버 리스트 initial type
export interface MemberListType {
  userSeq: number;
  userId: string;
  userName: string;
  nickname: string;
  phone: string;
  email: string;
  signUpDate: string;
  userRating: string;
  postNumber: number;
  commentNumber: number;
  isDealer: boolean;
  isBanned: boolean;
  isDelete: boolean;
}

// 딜러 상세 리스트 type
interface MarketItemDetailType {
  dlrSeq: number;
  comName: string;
  comPhone: string;
  comAddress: string;
  guildName: string;
  dlrNum: string;
  dlrEmployeeCardFront: string;
  dlrEmployeeCardBack: string;
  dlrPorileImage: string;
  userId: string;
  userNickName: string;
  userEmail: string;
  userPhone: string;
  userRating: string;
  createdDate: string;
  postCount: number;
  commentCount: number;
  regAdmin: string;
  regAdminEmail: string;
  regAdminNickname: string | null;
}

// reducer initial type
export interface InitMemberStateType {
  isLoading: boolean;
  totalCount: number;
  totalPages: number;
  filter?: string;
  keyword?: string;
  allDate: boolean;
  startDate: Date;
  endDate: Date;
  role: string;
  level: string[];
  allChecked: boolean;
  list: MemberListType[];
  checkList: number[];
  isChecked: boolean;
  currentPage: number;
  // 상세 조회
  detailItem?: MarketItemDetailType;
}
