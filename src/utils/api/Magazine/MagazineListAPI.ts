import ClientAxios from "../AxiosAPI/ClientAxios";
import { AxiosError } from "axios";

type paramsInterface = { [key: string]: string | number | boolean };

// 매거진 리스트 조회
export const getMagazineListHandler = async (keyword: string, title: string, allDate: boolean, startDate: Date, endDate: Date, page: number) => {
    try {
        const params: paramsInterface = {
            page: page,
        };
        if (keyword !== "") {
            params.keyword = keyword;
        }
        if (title !== "") {
            params.title = title;
        }
        if (!allDate) {
            params.startDate = startDate.toString().split("T")[0].replace("-", "");
            params.endDate = endDate.toString().split("T")[0].replace("-", "");
        }
        return await ClientAxios.get(`magazine`, {
            params: params,
        });
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 매거진 정보 상세 조회
export const getDetailMagazineHandler = async (brdSeq: string) => {
    try {
        return await ClientAxios.get(`magazine/${brdSeq}`, {});
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 매거진 숨기기
export const undiscloseMagazineHandler = async (magazineIds: number[], undisclosed: boolean) => {
    try {
        return await ClientAxios.patch(`magazine/undisclosed`, {
            magazineIds: magazineIds,
            undisclosed: undisclosed,
        });
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 매거진 삭제하기
export const deleteMagazineHandler = async (brdSeq: string) => {
    try {
        return await ClientAxios.delete(`magazine/${brdSeq}`, {});
    } catch (error) {
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

// 매거진 수정하기
export const updateMagazineHandler = async (brdSeq: string, contents: string, thumbnail: string, title: string) => {
    try {
        return await ClientAxios.put(`magazine/${brdSeq}`, {
            contents: contents,
            thumbnail: thumbnail,
            title: title,
        });
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
