import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ForSaleInitType } from "../../types/ForSaleList";
import {
  getForSaleListHandler,
  getDetailForSaleInquiryItemHandler,
  confirmForSaleItemHandler,
} from "../../utils/api/Market/ForSaleInquiryAPI";
const initState = {
  isLoading: false,
  totalCount: 0,
  totalPages: 0,
  currentPage: 1,
  filter: "",
  keyword: "",
  list: [],
  detailItem: {
    carNumber: "",
    category: "",
    carName: "",
    brand: "",
    model: "",
    regDate: "",
    year: "",
    fuel: "",
    cc: "",
    mileage: 0,
    color: "",
    accident: false,
    price: "",
    sellType: 0,
    transmissionType: "",
    appear: false,
    description: "",
    introduction: "",
    imgSrc: [],
    attSrc: [],
    dealerInfo: {
      dlrSeq: 0,
      comName: "",
      comPhone: "",
      comAddress: "",
      guildName: "",
      dlrNum: "",
      dlrEmployeeCardFront: "",
      dlrEmployeeCardBack: "",
      dlrProfileImage: "",
      userId: "",
      userName: "",
      userNickName: "",
      userEmail: "",
      userPhone: "",
      userRating: "",
      createdDate: "",
      postCount: 0,
      commentCount: 0,
      regAdmin: "",
      regAdminEmail: "",
      comment: "",
    },
  },
  inquiryDetailItem: {
    carNumber: "",
    category: "",
    carName: "",
    brand: "",
    model: "",
    regDate: "",
    year: "",
    fuel: "",
    cc: "",
    mileage: 0,
    color: "",
    accident: false,
    price: "",
    sellType: 0,
    transmissionType: "",
    appear: false,
    description: "",
    introduction: "",
    imgSrc: [],
    attSrc: [],
    accept: "",
    dealerInfo: {
      dlrSeq: 0,
      comName: "",
      comPhone: "",
      comAddress: "",
      guildName: "",
      dlrNum: "",
      dlrEmployeeCardFront: "",
      dlrEmployeeCardBack: "",
      dlrProfileImage: "",
      userId: "",
      userName: "",
      userNickName: "",
      userEmail: "",
      userPhone: "",
      userRating: "",
      createdDate: "",
      postCount: 0,
      commentCount: 0,
      regAdmin: "",
      regAdminEmail: "",
      comment: "",
    },
  },
} as ForSaleInitType;

interface getForSaleListParamsType {
  filter: string;
  keyword: string;
  page: number;
}

// 판매차량 등록 문의 리스트 조회
export const getForSaleInquiryList = createAsyncThunk(
  "GET/getForSaleInquiryList",
  async (data: getForSaleListParamsType, thunkApi) => {
    try {
      const response = await getForSaleListHandler(
        data.filter,
        data.keyword,
        data.page
      );
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
// 판매차량 등록 상세 조회
interface getDetailParamsType {
  category: string;
  brdSeq: string;
}
export const getForSaleDetailItem = createAsyncThunk(
  "GET/getForSaleDetailItem",
  async (params: getDetailParamsType, thunkApi) => {
    try {
      const response = await getDetailForSaleInquiryItemHandler(
        params.category,
        params.brdSeq
      );
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getForSaleInquiryDetailItem = createAsyncThunk(
  "GET/getForSaleInquiryDetailItem",
  async (params: getDetailParamsType, thunkApi) => {
    try {
      const response = await getDetailForSaleInquiryItemHandler(
        params.category,
        params.brdSeq
      );
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
// 판매차량 등록 승인
interface confirmForSaleParamsType {
  brdSeq: string;
}
export const confrimForSaleItem = createAsyncThunk(
  "POST/confirmForSaleItem",
  async (params: confirmForSaleParamsType, thunkApi) => {
    try {
      const response = confirmForSaleItemHandler(params.brdSeq);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const ForSaleListSlice = createSlice({
  name: "ForSaleListSlice",
  initialState: initState,
  reducers: {
    // 현재 페이지 수 설정
    setForSaleListCurrentPage: (state, action) => {
      state.currentPage = action.payload.isPage;
    },
    // 필터 값을 쓰기 위해
    setForSaleListFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
    // keyword 값 쓰기 위해서
    setForSaleListKeyword: (state, action) => {
      state.keyword = action.payload.keyword;
    },
    // 매물 승인 버튼 state 관리
    setForSaleListConfirm: (state, action) => {
      state.list = state.list.map((item) => {
        if (item.brdSeq === action.payload) {
          item.isAccepted = "R";
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      // 판매차량 등록 리스트 조회
      .addCase(getForSaleInquiryList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getForSaleInquiryList.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          state.totalPages = action.payload.data.totalPages;
          state.totalCount = action.payload.data.totalCount;
          state.list = [];
          state.list = action.payload.data.list;
        }
        return state;
      })
      .addCase(getForSaleInquiryList.rejected, (state, action) => {
        state.isLoading = true;
      })
      // 판매차량 상세 조회
      .addCase(getForSaleDetailItem.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getForSaleDetailItem.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          state.detailItem = {
            ...state.detailItem,
            ...action.payload.data,
          };
        } else {
          return state;
        }
      })
      .addCase(getForSaleDetailItem.rejected, (state, action) => {
        state.isLoading = true;
      })
      // 판매차량 등록 문의 상세 조회
      .addCase(getForSaleInquiryDetailItem.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getForSaleInquiryDetailItem.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          // state.detailItem = {
          //   ...state.detailItem,
          //   ...action.payload.data,
          // };
          console.log(action);
          state.inquiryDetailItem =
            // ...state.inquiryDetailItem,
            action.payload.data;
          console.log(state.inquiryDetailItem);
        } else {
          return state;
        }
      })
      .addCase(getForSaleInquiryDetailItem.rejected, (state, action) => {
        state.isLoading = true;
      })
      // 판매차량 등록 승인
      .addCase(confrimForSaleItem.pending, (state, action) => {})
      .addCase(confrimForSaleItem.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          // eslint-disable-next-line no-restricted-globals
          location.reload();
          return state;
        }
      })
      .addCase(confrimForSaleItem.rejected, (state, action) => {});
  },
});

export const ForSaleListAction = ForSaleListSlice.actions;
export default ForSaleListSlice.reducer;
