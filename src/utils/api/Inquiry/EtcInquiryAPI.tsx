import ClientAxios from "../AxiosAPI/ClientAxios";
import { AxiosError } from "axios";

// 기타 문의 리스트 조회
export const getEtcInquiryListHandler = async ( filter : string, keyword : string, page : number ) => {
    try{
        return await ClientAxios.get(`inquiry/etc`, {
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

//기타 문의 상세 조회
export const getDetailEctInquiryItemHandler = async ( brdSeq : string ) => {
    try{
        return await ClientAxios.get(`inquiry/etc/`+brdSeq, {
        })
    }catch( error ){
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 기타 문의 상태 변경
export const setEtcInquiryProgressHandler = async ( checkList : number[]) => {
    try{
        return await ClientAxios.post(`inquiry/etc/progress`, {
            checkList : checkList
        })
    }catch( error ){
        const { response } = error as unknown as AxiosError;
        return response;
    }
};