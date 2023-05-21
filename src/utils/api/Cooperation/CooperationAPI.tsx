import ClientAxios from "../AxiosAPI/ClientAxios";
import { AxiosError } from "axios";

// 제휴업체 리스트 조화
export const getCooperationListHandler = async (
  filter: string,
  keyword: string,
  page: number
) => {
  try {
    return await ClientAxios.get(`partnerships`, {
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

// 제휴업체 리스트 상세 조회
export const getDetailCooperationItemHandler = async (brdSeq: string) => {
  try {
    return await ClientAxios.get(`partnerships/${brdSeq}`);
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};

export const getCooperationInquiryListHandler = async (
  filter: string,
  keyword: string,
  page: number
) => {
  try {
    return await ClientAxios.get(`partnerships/inquiry`, {
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

// 제휴업체 문의 상세 조회
export const getDetailCooperationInquiryItemHandler = async (
  brdSeq: string
) => {
  try {
    return await ClientAxios.get(`partnerships/${brdSeq}/inquiry`);
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};

// 제휴업체 문의 승인
export const setPartnershipInquiryProgressHandler = async (brdSeq: string) => {
  try {
    return await ClientAxios.post(`partnerships/${brdSeq}/accepted`);
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};
