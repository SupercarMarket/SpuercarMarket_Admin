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
export const getDetailMagazineTmpHandler = async (storageId: string) => {
    try {
        return await ClientAxios.get(`magazine/storage/${storageId}`, {});
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
export const updateMagazineTmpHandler = async (storageId: string, contents: string, thumbnail: string, title: string) => {
    try {
        return await ClientAxios.patch(`magazine/storage/${storageId}`, {
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
export const deleteMagazineTmpHandler = async (storageIds: number[]) => {
    try {
        return await ClientAxios.post(`magazine/storage/deletion`, {
            storageIds: storageIds,
        });
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

export const newMagazineHandler = async (contents: string, thumbnail: string, title: string) => {
    try {
        return await ClientAxios.post(`magazine/`, {
            contents: contents,
            thumbnail: thumbnail,
            title: title,
        });
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};
