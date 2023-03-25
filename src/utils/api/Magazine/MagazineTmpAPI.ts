import ClientAxios from "../AxiosAPI/ClientAxios";
import { AxiosError } from "axios";

type paramsInterface = { [key: string]: string | number | boolean };

// 매거진 리스트 조회
export const getMagazineTmpListHandler = async (page: number) => {
    try {
        const params: paramsInterface = {
            page: page,
        };
        return await ClientAxios.get(`magazine/storage`, {
            params: params,
        });
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 매거진 정보 상세 조회
export const getDetailMagazineTmpHandler = async (brdSeq: string) => {
    try {
        return await ClientAxios.get(`magazine/storage/${brdSeq}`, {});
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 매거진 작성하기
export const newMagazineTmpHandler = async (contents: string, thumbnail: string, title: string) => {
    try {
        return await ClientAxios.post(`magazine/storage/`, {
            contents: contents,
            thumbnail: thumbnail,
            title: title,
        });
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};
// 매거진 수정하기
export const updateMagazineTmpHandler = async (brdSeq: string, contents: string, thumbnail: string, title: string) => {
    try {
        return await ClientAxios.patch(`magazine/storage/${brdSeq}`, {
            contents: contents,
            thumbnail: thumbnail,
            title: title,
        });
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 매거진 삭제하기
export const deleteMagazineTmpHandler = async (brdSeq: string) => {
    try {
        return await ClientAxios.delete(`magazine/storage/${brdSeq}`, {});
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};
// 매거진 히스토리 조회하기
export const getMagazineHistoryHandler = async (brdSeq: string) => {
    try {
        return await ClientAxios.get(`magazine/${brdSeq}/history`, {});
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};
