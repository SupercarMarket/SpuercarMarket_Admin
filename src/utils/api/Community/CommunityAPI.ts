import ClientAxios from "../AxiosAPI/ClientAxios";
import { AxiosError } from "axios";

// 커뮤니티 리스트 조화
export const getCommunityListHandler = async (
  filter: string,
  keyword: string,
  page: number
) => {
  try {
    return await ClientAxios.get(`community`, {
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
