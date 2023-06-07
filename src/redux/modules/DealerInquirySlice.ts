import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InitDealerInquiryStateType } from "types/DealerInquiryList";
import {
  getDealerInquiryListHandler,
  getDealerInquiryListDetailHandler,
} from "utils/api/Member/DealerInquiryAPI";

const initState = {
  isLoading: false,
  totalCount: 0,
  totalPages: 0,
  filter: "all",
  keyword: "",
  list: [],
  currentPage: 1,

  detailItem: {
    brdSeq: 0,
    comName: "",
    comPhone: "",
    comAddress: "",
    guildName: "",
    dlrNum: "",
    dlrEmployeeCardFront: "",
    dlrEmployeeCardBack: "",
    dlrProfileImage: "",
    accepted: "R",
    userSeq: 0,
    userId: "",
    userName: "",
    userNickName: "",
    userEmail: "",
    userPhone: "",
    userRating: "1",
    createdDate: "",
    postCount: 0,
    commentCount: 0,
    comment: "",
    regAdmin: "",
    regAdminNickname: "",
  },
} as InitDealerInquiryStateType;

interface DealerInquiryListDataType {
  filter: string;
  keyword: string;
  page: number;
}

// 딜러요청 리스트 조회하기
export const getDealerInquiryList = createAsyncThunk(
  "GET/getDealerInquiryList",
  async (params: DealerInquiryListDataType, thunkApi) => {
    try {
      const response = await getDealerInquiryListHandler(
        params.filter,
        params.keyword,
        params.page
      );
      console.log(response);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

interface getDealerInquiryListDetailType {
  dlrSeq: string;
}

// 딜러 상세정보 조회하기
export const getDealerInquiryListDetail = createAsyncThunk(
  "GET/getDealerInquiryListDetail",
  async (params: getDealerInquiryListDetailType, thunkApi) => {
    try {
      const response = await getDealerInquiryListDetailHandler(params.dlrSeq);
      console.log(response);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const DealerInquirySlice = createSlice({
  name: "DealerInquirySlice",
  initialState: initState,
  reducers: {
    // 페이지 저장
    setDealerInquiryListCurrentPage: (state, action) => {
      state.currentPage = action.payload.isPage;
    },
    // 검색 정보 저장
    setDealerInquiryListSearchData: (state, action) => {
      state.filter = action.payload.filter;
      state.keyword = action.payload.keyword;
      state.currentPage = action.payload.page;
    },
    setDealerInquiryListCount: (state, action) => {
      state.totalCount = action.payload.totalCount;
    },
    setDealerInquiryList: (state, action) => {
      state.list = action.payload.list;
    },
    setDealerInquiryDetailAcceptedStatus: (state, action) => {
      state.detailItem.accepted = action.payload.accepted;
    },
  },
  extraReducers: (builder) => {
    builder
      // 멤버 리스트 조회
      .addCase(getDealerInquiryList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getDealerInquiryList.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          state.totalPages = action.payload.data.totalPages;
          state.totalCount = action.payload.data.totalCount;
          state.list = [];
          state.list = action.payload.data.list;
        } else {
          return state;
        }
      })
      .addCase(getDealerInquiryList.rejected, (state, action) => {
        state.isLoading = true;
      })
      // 딜러 상세 조회
      .addCase(getDealerInquiryListDetail.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getDealerInquiryListDetail.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          state.detailItem = action.payload.data.data;
        }
      })
      .addCase(getDealerInquiryListDetail.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const DealerInquiryAction = DealerInquirySlice.actions;
export default DealerInquirySlice.reducer;
