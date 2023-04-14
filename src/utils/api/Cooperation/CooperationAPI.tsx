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
    return await ClientAxios.get(`product/${brdSeq}`);
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};
