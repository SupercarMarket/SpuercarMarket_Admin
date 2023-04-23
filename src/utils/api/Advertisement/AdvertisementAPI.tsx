import ClientAxios from "../AxiosAPI/ClientAxios";
import { AxiosError } from "axios";

// 광고 리스트 조화
export const getAdvertisementListHandler = async (
  filter: string,
  keyword: string,
  page: number
) => {
  try {
    return await ClientAxios.get(`ad`, {
      params: {
        filter: filter,
        keyword: keyword,
        page: page,
      },
    });
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};

// 광고 상세 조회
export const getDetailAdvertisementItemHandler = async (brdSeq: string) => {
  try {
    return await ClientAxios.get(`ad/${brdSeq}`);
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};

export const closeAdvertisementHandler = async (closeSeqList: number[]) => {
  try {
    return await ClientAxios.post(`ad/complete`, {
      checkList: closeSeqList,
    });
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};

// 광고 문의 리스트 조화
export const getAdvertisementInquiryListHandler = async (
  keyword: string,
  page: number
) => {
  try {
    return await ClientAxios.get(`inquiry/ad`, {
      params: {
        keyword: keyword,
        page: page,
      },
    });
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};

// 광고 문의 상세 조화
export const getAdvertisementInquiryDetailHandler = async (brdSeq: string) => {
  try {
    return await ClientAxios.get(`inquiry`, {
      params: {
        category: "ad",
        adSeq: brdSeq,
      },
    });
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};

// 광고 완료 처리
export const setAdvertisementInquiryProgressHandler = async (
  closeSeqList: number[]
) => {
  try {
    return await ClientAxios.post(`inquiry/ad/confirm`, {
      seq: closeSeqList,
    });
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};

// 광고 날짜 체크
export const advertisementDateCheck = async (
  version: string | undefined,
  page: string | undefined,
  position: string | undefined,
  year: number
) => {
  try {
    return await ClientAxios.post(
      "ad/impossible-date",
      {
        adType: version,
        adPage: page,
        adPosition: position,
        year: year,
      },
      {}
    );
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};
