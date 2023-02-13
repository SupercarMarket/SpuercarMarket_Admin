interface User {
  _id: number;
  userid: string;
  username: string;
  nickname: string;
  phone: string;
  email: string;
  signupDate: string;
  class: string;
  role: string;
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

export type { User, Dealer, Admin };
