import ClientAxios from "../AxiosAPI/ClientAxios";
import { AxiosError } from "axios";

// 매물 리스트 조회
export const getMarketListHandler = async ( filter : string, keyword : string, page : number ) => {
    try{
        return await ClientAxios.get(`product`, {
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

// 매물 리스트 상세 조회
export const getDetailMarketItemHandler = async ( brdSeq : string ) => {
    try{
        return await ClientAxios.get(`product/${brdSeq}`);
    }catch( error ){
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 매물 리스트 숨기기, 해제
export const hiddenButtonMarketItemsHandler = async ( brdSeq : number ) => {
    try{
        return await ClientAxios.post(`product/${brdSeq}`)
    }catch( error ){
        const { response } = error as unknown as AxiosError;
        return response;
    }
}


// 매물 리스트 삭제하기