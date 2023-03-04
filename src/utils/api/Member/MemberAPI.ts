import ClientAxios from "../AxiosAPI/ClientAxios";
import { AxiosError } from "axios";

// 멤버 리스트 조회
export const getMemberListHandler = async (filter: string, keyword: string, allDate: boolean, startDate: Date, endDate: Date, role: string, level: string[], page: number) => {
  try {
    const params = allDate
      ? {
          filter: filter,
          keyword: keyword,
          role: role,
          level: level.join(),
          page: page,
        }
      : {
          filter: filter,
          keyword: keyword,
          startDate: startDate,
          endDate: endDate,
          role: role,
          level: level.join(),
          page: page,
        };
    return await ClientAxios.get(`member`, {
      params: params,
    });
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};

// 멤버 카운트 정보 조회
export const getMemberCountInfoHandler = async () => {
  try {
    return await ClientAxios.get("member/count", {});
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};

// 멤버 정보 상세 조회
export const getDetailMemberHandler = async (userSeq: string) => {
  try {
    return await ClientAxios.get(`inquiry/${userSeq}`, {});
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};

// 회원 등급 변경
export const changeMemberRatingHandler = async (userSeq: string, rating: string) => {
  try {
    return await ClientAxios.patch(`member`, {
      userSeq: userSeq,
      grade: rating,
    });
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};

// 회원 차단하기
export const banMemberHandler = async (banSeqList: number[]) => {
  try {
    return await ClientAxios.post(`member/ban`, {
      banSeqList: banSeqList,
    });
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};

// 회원 차단 해제하기
export const unbanMemberHandler = async (userSeq: number) => {
  try {
    return await ClientAxios.post(`member/ban`, {
      userSeq: userSeq,
    });
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};
