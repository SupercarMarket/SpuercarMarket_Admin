interface Member {
  userSeq: number;
  userId: string;
  userName: string;
  userNickName: string;
  userPhone: string;
  userEmail: string;
  createdDate: string;
  userRating: string;
  isDealer: boolean;
  postNumber: string;
  replyNumber: string;
  isBanned: boolean;
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
  email: string;
  phoneNumber: string;
  magazineNumber: number;
}

export type { Member, Dealer, Admin };
