import ClientAxios from "../AxiosAPI/ClientAxios";
import { AxiosError } from "axios";

// 매물 리스트 조회
export const getForSaleListHandler = async ( filter : string, keyword : string, page : number ) => {
    try{
        return await ClientAxios.get(`inquiry/product`, {
            params:{
                filter : filter,
                keyword : keyword,
                page : page
            },
        })
    }catch( error ){
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 판매차량 리스트 상세 조회
// category : product
export const getDetailForSaleInquiryItemHandler = async ( category : string, brdSeq : string ) => {
    try{
        return await ClientAxios.get(`inquiry`, {
            params:{
                category,
                brdSeq
            }
        })
    }catch( error ){
        const { response } = error as unknown as AxiosError;
        return response;
    }
}; 

// 판매차량 매물 승인
export const confirmForSaleItemHandler = async ( brdSeq : string ) => {
    try{
        return await ClientAxios.post(`inquiry/product/confirm/${brdSeq}`);
    }catch( error ){
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 판매차량 매물 거절
export const rejectForSaleItemHandler = async ( accept : boolean, brdSeq : number, comment : string ) => {
    try{
        return await ClientAxios.post('inquiry/product/reject');
    }catch( error ){
        const { response } = error as unknown as AxiosError;
        return response;
    }
};