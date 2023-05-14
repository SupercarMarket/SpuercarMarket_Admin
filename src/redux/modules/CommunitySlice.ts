import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {InitCommunityStateType} from "types/CommunityType";
import {getCommunityListHandler, setCommunityHideCancelHandler, setCommunityHideHandler, deleteCommunityHandler} from "utils/api/Community/CommunityAPI";

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
    category: "all",
    searchType: "all"
} as InitCommunityStateType;

interface CommunityListDataType {
    category: string;
    searchType: string;
    keyword: string;
    page: number;
}

// 매물 리스트 조회하기
export const getCommunityList = createAsyncThunk(
    "GET/getCommunityList",
    async (params: CommunityListDataType, thunkApi) => {
        try {
            return await getCommunityListHandler(
                params.category,
                params.searchType,
                params.keyword,
                params.page
            );
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);


// 커뮤니티 게시글 숨기기 취소
export const setCommunityHideCancel = createAsyncThunk(
    "PATCH/community/hide-cancel",
    async (params: ArrNumber[], thunkApi) => {
        try {
            return await setCommunityHideCancelHandler(
                params
            );
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

// 커뮤니티 게시글 숨기기
export const setCommunityHide = createAsyncThunk(
    "PATCH/community/hide",
    async (params: ArrNumber[], thunkApi) => {
        try {
            return await setCommunityHideHandler(
                params
            );
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

// 커뮤니티 게시글 삭제
export const deleteCommunity = createAsyncThunk(
    "DELETE/community",
    async (params: any, thunkApi) => {
        try {
            const response = await deleteCommunityHandler(
                params.id
            );
            // eslint-disable-next-line no-restricted-globals
            location.reload();
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

interface ArrNumber{
    id: number;
}

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
        // 카테고리 선택
        setCommunityCategory:(state, action)=>{
            console.log(action.payload.category);
            state.category = action.payload.category
        }
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
                    state.totalElements = action.payload.data.totalCount;
                    // state.list = [];
                    state.list = action.payload.data.data;
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
