import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AdvertisementDetailSeqType,
  InitAdvertisementStateType,
} from "types/AdvertisementType";
import {
  closeAdvertisementHandler,
  getAdvertisementInquiryDetailHandler,
  getAdvertisementInquiryListHandler,
  getAdvertisementListHandler,
  getDetailAdvertisementItemHandler,
  setAdvertisementInquiryProgressHandler,
} from "../../utils/api/Advertisement/AdvertisementAPI";

const initState = {
  isLoading: false,
  totalElements: 0,
  totalPages: 0,
  page: "",
  year: 1,
  month: 1,
  position: "",
  companyName: "",
  version: "",
  url: "",
  date: [],
  price: 0,
  keyword: "",
  list: [],
  impossibleDate: [],
  allChecked: false,
  checkList: [],
  isChecked: false,
  currentPage: 1,
  updated: false,
  showImage: false,
  inquiryList: [],
  dateList: [],
} as InitAdvertisementStateType;

interface AdvertisementListDataType {
  filter: string;
  keyword: string;
  page: number;
}

interface AdvertisementInquiryListDataType {
  keyword: string;
  page: number;
}

interface AdvertisementCloseListDataType {
  checkList: number[];
}

// 광고 리스트 조회하기
export const getAdvertisementList = createAsyncThunk(
  "GET/getAdvertisementList",
  async (params: AdvertisementListDataType, thunkApi) => {
    try {
      return await getAdvertisementListHandler(
        params.filter,
        params.keyword,
        params.page
      );
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
// 광고 상태 변경
export const setAdvertisementComplete = createAsyncThunk(
  "POST/postAdvertisementComplete",
  async (params: AdvertisementCloseListDataType, thunkApi) => {
    try {
      return await closeAdvertisementHandler(params.checkList);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const getAdvertisementInquiryList = createAsyncThunk(
  "GET/getAdvertisementInquiryList",
  async (params: AdvertisementInquiryListDataType, thunkApi) => {
    try {
      return await getAdvertisementInquiryListHandler(
        params.keyword,
        params.page
      );
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getAdvertisementDetail = createAsyncThunk(
  "GET/getAdvertisementDetail",
  async (params: AdvertisementDetailSeqType, thunkApi) => {
    try {
      return await getDetailAdvertisementItemHandler(params.brdSeq);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getAdvertisementInquiryDetail = createAsyncThunk(
  "GET/getAdvertisementInquiryDetail",
  async (params: AdvertisementDetailSeqType, thunkApi) => {
    try {
      const response = await getAdvertisementInquiryDetailHandler(
        params.brdSeq
      );
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

interface setAdvertisementInquiryType {
  checkList: number[];
}

// 기타 문의 상태 변경
export const setAdvertisementProgress = createAsyncThunk(
  "POST/setAdvertisementInquiry",
  async (data: setAdvertisementInquiryType, thunkApi) => {
    try {
      const response = await setAdvertisementInquiryProgressHandler(
        data.checkList
      );
      // console.log(response);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const AdvertisementSlice = createSlice({
  name: "AdvertisementSlice",
  initialState: initState,
  reducers: {
    // 페이지 저장
    setAdvertisementListCurrentPage: (state, action) => {
      state.currentPage = action.payload.isPage;
    },
    // 필터 reducer
    setAdvertisementListFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
    setAdvertisementAddYear: (state, action) => {
      state.year = action.payload.year;
    },
    setAdvertisementAddMonth: (state, action) => {
      state.month = action.payload.month;
    },
    // keyword reducer
    setAdvertisementListKeyword: (state, action) => {
      state.keyword = action.payload.keyword;
    },

    // 전체 체크
    setAdvertisementListAllChecked: (state, action) => {
      if (action.payload.allChecked) {
        const checked: number[] = [];
        state.list.forEach((list) => {
          // if (!list.pdtApper) {
          checked.push(list.id);
          // }
        });
        state.checkList = checked;
        console.log(state.checkList);
      } else {
        state.checkList = [];
      }
      state.allChecked = !state.allChecked;
      console.log(state.allChecked);
    },
    // 각각 체크
    setAdvertisementListEachChecked: (state, action) => {
      if (action.payload.isChecked) {
        state.checkList = [...state.checkList, action.payload.brdSeq];
        // const length = state.list.filter((list) => !list.pdtApper).length;
        // if (length === state.checkList.length) {
        state.allChecked = true;
        // }
      } else {
        state.checkList = state.checkList.filter(
          (item) => item !== action.payload.brdSeq
        );
        state.allChecked = false;
      }
    },

    setAdvertisementShowImage(state, action) {
      state.showImage = action.payload.showImage;
    },
    // setAdvertisementImpossibleDate: (state, action) => {
    //     state.impossibleDate = action.payload.data.impossibleDate;
    // },
  },
  extraReducers: (builder) => {
    builder
      // 광고 리스트 조회
      .addCase(getAdvertisementList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAdvertisementList.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          state.totalPages = action.payload.data.totalPages;
          state.totalElements = action.payload.data.totalCount;
          // state.list = [];
          state.list = action.payload.data.list;
        } else {
          return state;
        }
      })
      .addCase(getAdvertisementList.rejected, (state, action) => {
        state.isLoading = true;
      })
      .addCase(setAdvertisementComplete.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.updated = !state.updated;
          return state;
        }
        return state;
      })
      //광고 상세 조회
      .addCase(getAdvertisementDetail.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          state.showImage = false;
          state.detail = action.payload.data.data;
        }
      })
      //광고 상세 조회
      .addCase(getAdvertisementDetail.rejected, (state, action) => {
        state.isLoading = true;
      })

      // 광고 문의 리스트 조회
      .addCase(getAdvertisementInquiryList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAdvertisementInquiryList.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          state.totalPages = action.payload.data.data.totalPages;
          state.totalElements = action.payload.data.data.totalCount;
          // state. = [];
          state.inquiryList = action.payload.data.data.list;
        } else {
          return state;
        }
      })
      .addCase(getAdvertisementInquiryList.rejected, (state, action) => {
        state.isLoading = true;
      })

      //광고 문의 상세 조회
      .addCase(getAdvertisementInquiryDetail.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAdvertisementInquiryDetail.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          state.showImage = false;
          state.inquiryDetail = action.payload.data.data.detail;

          state.inquiryDetailAttachment = action.payload.data.data.attachment;
          console.log(state.inquiryDetailAttachment);
        }
      })
      //광고 문의 상세 조회
      .addCase(getAdvertisementInquiryDetail.rejected, (state, action) => {
        state.isLoading = true;
      });
    //
    // .addCase(getAdvertisementListDetail.fulfilled, (state, action) => {
    //     if (action.payload?.status === 200) {
    //         state.isLoading = false;
    //         state.showImage = false;
    //         state.detail = action.payload.data.data;
    //     }
    // })
    // //광고 상세 조회
    // .addCase(getEctInquiryDetailItem.rejected, (state, action) => {
    //     state.isLoading = true;
    // });
  },
});

export const AdvertisementAction = AdvertisementSlice.actions;
export default AdvertisementSlice.reducer;
