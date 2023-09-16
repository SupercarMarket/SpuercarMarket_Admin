import ClientAxios from "../AxiosAPI/ClientAxios";
import { AxiosError } from "axios";

type paramsInterface = { [key: string]: string | number | boolean };

// 딜러요청 리스트 조회
export const getDealerInquiryListHandler = async (filter: string, keyword: string, page: number) => {
    try {
        const params: paramsInterface = {
            page: page,
        };
        if (keyword !== "") {
            params.filter = filter;
            params.keyword = keyword;
        }
        return await ClientAxios.get(`inquiry/dealer`, {
            params: params,
        });
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 딜러요청 상세정보 조회
export const getDealerInquiryListDetailHandler = async (brdSeq: string) => {
    try {
        return await ClientAxios.get(`inquiry?category=dealer&brdSeq=${brdSeq}`, {});
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 딜러등록 승인
export const dealerAcceptHandler = async (brdSeq: number) => {
    try {
        return await ClientAxios.post("inquiry/dealer/accept", {
            seq: brdSeq,
        });
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 딜러등록 반려
export const dealerRejectHandler = async (brdSeq: number, comment: string) => {
    try {
        return await ClientAxios.patch("inquiry/dealer/reject", {
            brdSeq: brdSeq,
            comment: comment,
        });
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};
