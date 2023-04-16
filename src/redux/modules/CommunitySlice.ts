import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InitCommunityStateType } from "types/CommunityType";
import { getCommunityListHandler } from "utils/api/Community/CommunityAPI";

const initState = {
  isLoading: false,
  totalElements: 0,
  totalPages: 0,
  filter: "",
  keyword: "",
  list: [],
  allChecked: false,
  checkList: [],
  isChecked: false,
  currentPage: 1,
} as InitCommunityStateType;

interface CommunityListDataType {
  filter: string;
  keyword: string;
  page: number;
}
// 매물 리스트 조회하기
export const getCommunityList = createAsyncThunk(
  "GET/getCommunitytList",
  async (params: CommunityListDataType, thunkApi) => {
    try {
      const response = await getCommunityListHandler(
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

interface getCommunityListDetailType {
  brdSeq: string;
}

// export const getMarketListDetail = createAsyncThunk(
//   "GET/getMarketListDetail",
//   async (params: getMarketListDetailType, thunkApi) => {
//     try {
//       const response = await getDetailMarketItemHandler(params.brdSeq);
//       console.log(response);
//       return response;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   }
// );

const CommunitySlice = createSlice({
  name: "CommunitySlice",
  initialState: initState,
  reducers: {
    // 페이지 저장
    setCommunityListCurrentPage: (state, action) => {
      state.currentPage = action.payload.isPage;
    },
    // 필터 reducer
    setCommunityListFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
    // keyword reducer
    setCommunityListKeyword: (state, action) => {
      state.keyword = action.payload.keyword;
    },
    // 전체 체크
    setCommunityListAllChecked: (state, action) => {
      // if (action.payload.allChecked) {
      //   const checked: number[] = [];
      //   state.list.forEach((list) => {
      //     console.log(list);
      //     if (!list.pdtApper) {
      //       checked.push(list.brdSeq);
      //     }
      //   });
      //   state.checkList = checked;
      //   console.log(state.checkList);
      // } else {
      //   state.checkList = [];
      // }
      // state.allChecked = !state.allChecked;
      // console.log(state.allChecked);
    },
    // 각각 체크
    setCommunityListEachChecked: (state, action) => {
      // if (action.payload.isChecked) {
      //   state.checkList = [...state.checkList, action.payload.brdSeq];
      //   // const length = state.list.filter((list) => !list.pdtApper).length;
      //   if (length === state.checkList.length) {
      //     state.allChecked = true;
      //   }
      // } else {
      //   state.checkList = state.checkList.filter(
      //     (item) => item !== action.payload.brdSeq
      //   );
      //   state.allChecked = false;
      // }
    },
  },
  extraReducers: (builder) => {
    builder
      // 제휴업체 리스트 조회
      .addCase(getCommunityList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCommunityList.fulfilled, (state, action) => {
        console.log(action);
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
      .addCase(getCommunityList.rejected, (state, action) => {
        state.isLoading = true;
      });
    // 매물 리스트 상세 조회
    //   .addCase(getMarketListDetail.pending, (state, action) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(getMarketListDetail.fulfilled, (state, action) => {
    //     if (action.payload?.status === 200) {
    //       state.isLoading = false;
    //       state.detailItem = { ...state.detailItem, ...action.payload.data };
    //     }
    //   })
    //   .addCase(getMarketListDetail.rejected, (state, action) => {
    //     state.isLoading = true;
    //   });
  },
});

export const CommunityAction = CommunitySlice.actions;
export default CommunitySlice.reducer;
