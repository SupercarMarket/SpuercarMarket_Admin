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
  _id: number;
  companyName: string;
  companyPhone: string;
  companyAddress: string;
  unionName: string;
  dealerNumber: string;
  idCardFront: string;
  idCardBack: string;
  profileImg: string;
  additional: string;
  comment: string;
}

interface Admin {
  _id: number;
  adminId: string;
  adminName: string;
  adminNickname: string;
}

export type { User, Dealer, Admin };
