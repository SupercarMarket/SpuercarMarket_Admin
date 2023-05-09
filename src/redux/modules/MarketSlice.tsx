import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitMarketStateType } from "../../types/ForSaleList";
import {
  getDetailMarketItemHandler,
  getMarketListHandler,
  hiddenButtonMarketItemsHandler,
} from "../../utils/api/Market/MarketAPI";

const initState = {
  isLoading: false,
  totalCount: 0,
  totalPages: 0,
  filter: "",
  keyword: "",
  list: [],
  allChecked: false,
  checkList: [],
  isChecked: false,
  currentPage: 1,

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
    },
  },
} as InitMarketStateType;

interface MarketListDataType {
  filter: string;
  keyword: string;
  page: number;
}
// 매물 리스트 조회하기
export const getMarketList = createAsyncThunk(
  "GET/getMarketList",
  async (params: MarketListDataType, thunkApi) => {
    try {
      const response = await getMarketListHandler(
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

interface getMarketListDetailType {
  brdSeq: string;
}

export const getMarketListDetail = createAsyncThunk(
  "GET/getMarketListDetail",
  async (params: getMarketListDetailType, thunkApi) => {
    try {
      const response = await getDetailMarketItemHandler(params.brdSeq);
      console.log(response);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const hideMarketList = createAsyncThunk(
  "POST/hideMarketList",
  async (params: number[], thunkApi) => {
    try {
      return await hiddenButtonMarketItemsHandler(params);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const MarketSlice = createSlice({
  name: "MarketSlice",
  initialState: initState,
  reducers: {
    // 페이지 저장
    setMarketListCurrentPage: (state, action) => {
      state.currentPage = action.payload.isPage;
    },
    // 필터 reducer
    setMarketListFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
    // keyword reducer
    setMarketListKeyword: (state, action) => {
      state.keyword = action.payload.keyword;
    },
    // 전체 체크
    setMarketListAllChecked: (state, action) => {
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
    setMarketListEachChecked: (state, action) => {
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
  },
  extraReducers: (builder) => {
    builder
      // 매물 리스트 조회
      .addCase(getMarketList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMarketList.fulfilled, (state, action) => {
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
      .addCase(getMarketList.rejected, (state, action) => {
        state.isLoading = true;
      })
      // 매물 리스트 상세 조회
      .addCase(getMarketListDetail.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMarketListDetail.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          state.detailItem = { ...state.detailItem, ...action.payload.data };
        }
      })
      .addCase(getMarketListDetail.rejected, (state, action) => {
        state.isLoading = true;
      })
      .addCase(hideMarketList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(hideMarketList.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          alert("숨기기 완료");
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }
      })
      .addCase(hideMarketList.rejected, (state, action) => {});
  },
});

export const MarketAction = MarketSlice.actions;
export default MarketSlice.reducer;
