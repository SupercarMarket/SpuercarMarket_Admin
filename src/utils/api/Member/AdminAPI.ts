import ClientAxios from "../AxiosAPI/ClientAxios";
import { AxiosError } from "axios";

type paramsInterface = { [key: string]: string | number | boolean };

// 관리자 리스트 조회
export const getAdminListHandler = async (filter: string, keyword: string, page: number) => {
    try {
        const params: paramsInterface = {
            page: page,
        };
        if (keyword !== "") {
            params.filter = filter;
            params.keyword = keyword;
        }
        return await ClientAxios.get("admin", {
            params: params,
        });
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 관리자 상세정보 조회
export const getAdminDetailHandler = async (admSeq: number) => {
    try {
        return await ClientAxios.get(`admin/info?adminSeq=${admSeq}`, {});
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 관리자 추가
export const addAdminHandler = async (name: string, phone: string, email: string) => {
    try {
        return await ClientAxios.post("admin/add", {
            name: name,
            phone: phone,
            email: email,
        });
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 관리자 차단
export const banAdminHandler = async (admSeq: number) => {
    try {
        return await ClientAxios.patch("admin/block", {
            admSeq: admSeq,
        });
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 관리자 차단 해제
export const unbanAdminHandler = async (adminSeq: number) => {
    try {
        return await ClientAxios.patch("admin/un-block", {
            adminSeq: adminSeq,
        });
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 타관리자 정보 수정
export const modifyAdminDetailHandler = async (adminSeq: number, name: string, phone: string, email: string, nickname: string) => {
    try {
        return await ClientAxios.patch("admin/info", {
            adminSeq: adminSeq,
            name: name,
            phone: phone,
            email: email,
            nickname: nickname,
        });
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};
