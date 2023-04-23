// import {AdvertisementListType} from "./AdvertisementType";

export interface AdvertisementPropsType {
  offset: number;
  postsPerPage: number;
  totalContentsCount: number;
}

export interface InitAdvertisementStateType {
  isLoading: boolean;
  totalElements: number;
  totalPages: number;
  filter?: string;
  page?: string;
  year?: number;
  month?: number;
  position?: string;
  companyName?: string;
  version?: string;
  url?: string;
  image?: string;
  date?: string[];
  impossibleDate?: string[];
  price?: number;
  keyword?: string;
  allChecked: boolean;
  checkList: number[];
  isChecked: boolean;
  inquiryAllChecked: boolean;
  inquiryCheckList: number[];
  inquiryIsChecked: boolean;
  list: AdvertisementListType[];
  currentPage: number;
  updated: boolean;
  showImage: boolean;
  detail?: AdvertisementDetailType;
  inquiryList: AdvertisementInquiryListType[];
  inquiryDetail?: AdvertisementInquiryDetailType;
  inquiryDetailAttachment?: AdvertisementInquiryDetailAttachmentType[];
  dateList: string[];
}

export interface AdvertisementListType {
  id: number;
  adTitle: number;
  adType: string;
  adPage: string;
  adPosition: string;
  url: string;
  imgUrl: string;
  imageName: string;
  viewDate: string[];
  pricePerMonth: string;
  viewStatus: boolean;
  status: string;
}

export interface AdvertisementDetailType {
  isLoading: boolean;
  adTitle: string;
  adType: string;
  adPage: string;
  adPosition: string;
  url: string;
  imgUrl: string;
  imgName: string;
  viewDate: string[];
  pricePerMonth: number;
  status: boolean;
}

export interface AdvertisementDetailSeqType {
  brdSeq: string;
}

export interface AdvertisementInquiryListType {
  id: number;
  userSeq: number;
  userId: string;
  name: string;
  nickname: string;
  phone: string;
  email: string;
  title: string;
  contents: string;
  confirm: string;
  link: string;
}

export interface AdvertisementInquiryDetailType {
  isLoading: boolean;
  adSeq: number;
  commentCount: number;
  contents: string;
  createDate: string;
  email: string;
  isDealer: boolean;
  link: string;
  nickName: string;
  phone: string;
  postCount: number;
  rejectReason: string;
  title: string;
  userName: string;
  userId: string;
  userRating: string;
  userSeq: number;
}

export interface AdvertisementInquiryDetailAttachmentType {
  attUrl: string;
  originName: string;
}
