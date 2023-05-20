import ClientAxios from "../AxiosAPI/ClientAxios";
import {AxiosError} from "axios";

// 커뮤니티 리스트 조회
export const getCommunityListHandler = async (
    category: string,
    searchType: string,
    keyword: string,
    page: number
) => {
    try {
        return await ClientAxios.get(`community`, {
            params: {
                category: category,
                searchType: searchType,
                keyword: keyword,
                page: page,
            },
        });
    } catch (error) {
        const {response} = error as unknown as AxiosError;
        return response;
    }
};

// 커뮤니티 게시글 숨기기 취소
export const setCommunityHideCancelHandler = async (
    ids: any,
) => {
    try {
        return await ClientAxios.patch(`community/hide-cancel`, ids);
    } catch (error) {
        const {response} = error as unknown as AxiosError;
        return response;
    }
};

// 커뮤니티 게시글 숨기기
export const setCommunityHideHandler = async (
    ids: any,
) => {
    try {
        return await ClientAxios.patch(`community/hide`, ids);
    } catch (error) {
        const {response} = error as unknown as AxiosError;
        return response;
    }
};

interface ArrNumber {
    id: number;
}

// 커뮤니티 삭제
export const deleteCommunityHandler = async (
    id: number
) => {
    try {
        return await ClientAxios.delete(`community`, {
            data: [{
                id: id,
            }],
        });
    } catch (error) {
        const {response} = error as unknown as AxiosError;
        return response;
    }
};