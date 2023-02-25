interface Member {
  userSeq: number;
  userId: string;
  userName: string;
  userNickName: string;
  userPhone: string;
  userEmail: string;
  createdDate: string;
  userRating: number;
  postNumber: number;
  commentNumber: number;
  isDealer: boolean;
  isBanned: boolean;
  isDelete: boolean;
}

interface Dealer {
  userSeq: number;
  comName: string;
  comPhone: string;
  comAddress: string;
  guildName: string;
  dlrNum: string;
  dlrEmployeeCardFront: string;
  dlrEmployeeCardBack: string;
  dlrProfileImage: string;
  comment: string | null;
  regAdmin: string;
}

interface Admin {
  _id: number;
  ProfileImg: string;
  adminId: string;
  adminName: string;
  adminNickname: string;
  adminEmail: string;
  adminPhone: string;
  magazineNumber: number;
}

export type { Member, Dealer, Admin };
