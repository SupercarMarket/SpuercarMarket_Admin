
export interface EtcInquiryListPropsType {
    // offset
    offset : number;
    // 페이지 수
    postsPerPage : number;
    // 전체 데이터 개수
    totalContentsCount : number;
};




/* 기타 문의 리스트 */
export interface EtcInquiryInitType {
    isLoading : boolean,
    totalPages : number,
    totalCount : number,
    currentPage : number,
    progressCount : number,
    filter : string,
    keyword : string,
    updated : boolean,
    allChecked : boolean,
    checkList : number[],
    showAnswer : boolean,
    list : EtcInquiryListType[],

    detailItem? : EtcInquiryItemDetailType
}
// 기타 문의 리스트 initial type
interface EtcInquiryListType {
    brdSeq : number,
    title : string,
    contents : string,
    reply : string,
    progress : number,
    userSeq : number,
    userId : string,
    userName : string,
    nickname : string,
    email : string,
    phone : string
}

// 기타 문의 상세 type
interface EtcInquiryItemDetailType {
    brdSeq : number,
    title : string,
    contents : string,
    reply : string,
    progress : number,
    userSeq : number,
    userId : string,
    userName : string,
    userNickName: string,
    userEmail: string,
    userPhone: string,
    userRating: string,
    createdDate : string,
    postCount : number,
    commentCount: number
}

// interface EtcInquiryItemUserInfo {
//     userSeq : number,
//     userId : string,
//     userName : string,
//     userNickName: string,
//     userEmail: string,
//     userPhone: string,
//     createdDate : string,
//     postCount : number,
//     commentCount: number
// }