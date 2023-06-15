import ClientAxios from "../AxiosAPI/ClientAxios";
import { AxiosError } from "axios";

type paramsInterface = { [key: string]: string | number | boolean };

// 매거진 리스트 조회
export const getMagazineInquiryListHandler = async (page: number) => {
  try {
    const params: paramsInterface = {
      page: page,
    };
    return await ClientAxios.get(`magazine/inquiry`, {
      params: params,
    });
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};

// 매거진 리스트 조회
export const confirmMagazineInquiryButtonOnClickHandler = async (
  seqListDto: number[]
) => {
  try {
    // const params: paramsInterface = {
    //   page: page,
    // };
    return await ClientAxios.post(`magazine/inquiry`, seqListDto);
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};
