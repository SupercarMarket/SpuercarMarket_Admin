// import {AdvertisementListType} from "./AdvertisementType";

export interface AdvertisementPropsType {
    offset : number;
    postsPerPage : number;
    totalContentsCount : number;
}



export interface InitAdvertisementStateType {
    isLoading: boolean;
    totalElements: number;
    totalPages: number;
    filter?: string;
    keyword?: string;
    allChecked: boolean;
    list: AdvertisementListType[];
    checkList: number[];
    isChecked: boolean;
    currentPage: number;
    updated : boolean,
    showImage : boolean;
    detail? : AdvertisementDetailType;
    inquiryList: AdvertisementInquiryListType[];
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
    adSeq: number;
    userSeq: number;
    id: string;
    name: string;
    nickname: string;
    phone: string;
    email: string;
    title: string;
    contents: string;
    confirm: string;
    link: string;
}