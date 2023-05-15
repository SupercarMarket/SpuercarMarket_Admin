import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InitCooperationStateType } from "types/CooperationType";
import {
  getCooperationInquiryListHandler,
  getCooperationListHandler,
  getDetailCooperationItemHandler,
} from "../../utils/api/Cooperation/CooperationAPI";

const initState = {
  isLoading: false,
  totalElements: 0,
  totalPages: 0,
  filter: "",
  keyword: "",
  list: [],
  inquiryList: [],
  allChecked: false,
  checkList: [],
  inquiryCheckList: [],
  inquiryAllChecked: false,
  isChecked: false,
  currentPage: 1,
} as InitCooperationStateType;

interface CooperationListDataType {
  filter: string;
  keyword: string;
  page: number;
}
// 제휴업체 리스트 조회하기
export const getCooperationList = createAsyncThunk(
  "GET/getCooperationtList",
  async (params: CooperationListDataType, thunkApi) => {
    try {
      const response = await getCooperationListHandler(
        params.filter,
        params.keyword,
        params.page
      );
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
// 제휴업체 문의 리스트 조회하기
export const getCooperationInquiryList = createAsyncThunk(
  "GET/getCooperationtInquiryList",
  async (params: CooperationListDataType, thunkApi) => {
    try {
      const response = await getCooperationInquiryListHandler(
        params.filter,
        params.keyword,
        params.page
      );
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

interface getCooperationDetailType {
  brdSeq: string;
}

export const getCooperationDetail = createAsyncThunk(
  "GET/getCooperationDetail",
  async (params: getCooperationDetailType, thunkApi) => {
    try {
      console.log(params.brdSeq);
      const response = await getDetailCooperationItemHandler(params.brdSeq);
      console.log(response);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const CooperationSlice = createSlice({
  name: "CooperationSlice",
  initialState: initState,
  reducers: {
    // 페이지 저장
    setCooperationListCurrentPage: (state, action) => {
      state.currentPage = action.payload.isPage;
    },
    // 필터 reducer
    setCooperationListFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
    // keyword reducer
    setCooperationListKeyword: (state, action) => {
      state.keyword = action.payload.keyword;
    },
    // 전체 체크
    setCooperationListAllChecked: (state, action) => {
      if (action.payload.allChecked) {
        const checked: number[] = [];
        state.list.forEach((list) => {
          // if (!list.pdtApper) {
          checked.push(list.brdSeq);
          // }
        });
        state.checkList = checked;
      } else {
        state.checkList = [];
      }
      state.allChecked = !state.allChecked;
    },
    // 각각 체크
    setCooperationListEachChecked: (state, action) => {
      if (action.payload.isChecked) {
        state.checkList = [...state.checkList, action.payload.brdSeq];
        state.allChecked = true;
      } else {
        state.checkList = state.checkList.filter(
          (item) => item !== action.payload.brdSeq
        );
        state.allChecked = false;
      }
    },
    // 문의 전체 체크
    setCooperationInquiryListAllChecked: (state, action) => {
      if (action.payload.allChecked) {
        const checked: number[] = [];
        state.inquiryList.forEach((list) => {
          // if (!list.pdtApper) {
          checked.push(list.brdSeq);
          // }
        });
        state.inquiryCheckList = checked;
      } else {
        state.inquiryCheckList = [];
      }
      state.inquiryAllChecked = !state.inquiryAllChecked;
    },
    // 문의 각각 체크
    setCooperationInquiryListEachChecked: (state, action) => {
      if (action.payload.isChecked) {
        state.inquiryCheckList = [
          ...state.inquiryCheckList,
          action.payload.brdSeq,
        ];
        state.inquiryAllChecked = true;
      } else {
        state.inquiryCheckList = state.inquiryCheckList.filter(
          (item) => item !== action.payload.brdSeq
        );
        state.inquiryAllChecked = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // 제휴업체 리스트 조회
      .addCase(getCooperationList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCooperationList.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          state.totalPages = action.payload.data.totalPages;
          state.totalElements = action.payload.data.totalElements;
          // state.list = [];
          state.list = action.payload.data.adminPartnershipDtoList;
        } else {
          return state;
        }
      })
      .addCase(getCooperationList.rejected, (state, action) => {
        state.isLoading = true;
      })

      // 매물 리스트 상세 조회
      .addCase(getCooperationDetail.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCooperationDetail.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          state.detailItem = { ...state.detailItem, ...action.payload.data };
        }
      })
      .addCase(getCooperationDetail.rejected, (state, action) => {
        state.isLoading = true;
      })

      // 제휴업체 문의 리스트 조회
      .addCase(getCooperationInquiryList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCooperationInquiryList.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          state.totalPages = action.payload.data.totalPages;
          state.totalElements = action.payload.data.totalElements;
          // state.list = [];
          state.inquiryList = action.payload.data.contents;
        } else {
          return state;
        }
      })
      .addCase(getCooperationInquiryList.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const CooperationAction = CooperationSlice.actions;
export default CooperationSlice.reducer;
