import ClientAxios from "../AxiosAPI/ClientAxios";
import { AxiosError } from "axios";

type paramsInterface = { [key: string]: string | number | boolean };
function leftPad(value: any) {
  if (value >= 10) {
    return value;
  }

  return `0${value}`;
}
function toStringByFormatting(source: any, delimiter = "-") {
  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());

  return [year, month, day].join(delimiter);
}
// 멤버 리스트 조회
export const getMemberListHandler = async (
  filter: string,
  keyword: string,
  allDate: boolean,
  startDate: Date,
  endDate: Date,
  role: string,
  level: string[],
  page: number
) => {
  try {
    const params: paramsInterface = {
      page: page,
    };
    if (keyword !== "") {
      params.filter = filter;
      params.keyword = keyword;
    }
    if (!allDate) {
      params.startDate = toStringByFormatting(startDate);
      params.endDate = toStringByFormatting(endDate);
    }
    if (role === "1") {
      params.isDealer = false;
    } else if (role === "2") {
      params.isDealer = true;
    }
    if (level.length !== 0 && level.length !== 5) {
      params.level = level.join();
    }
    // console.log(params);
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
export const getDetailMemberHandler = async (dlrSeq: string) => {
  try {
    return await ClientAxios.get(`member/${dlrSeq}`, {});
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
    return await ClientAxios.post(`member/un-ban`, {
      userSeq: userSeq,
    });
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};
