import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InitMagazineInquiryStateType } from "types/MagazineInquiry";
import { getMagazineInquiryListHandler } from "utils/api/Magazine/MagazineInquiryAPI";

const initState = {
  isLoading: false,
  totalCount: 0,
  totalPages: 0,
  list: [],
  allChecked: false,
  checkList: [],
  isChecked: false,
  currentPage: 1,

  detailItem: {
    brdSeq: 0,
    title: "",
    userId: "",
    userName: "",
    userPhone: "",
    status: "",
    createDate: "",
  },
} as InitMagazineInquiryStateType;

interface MagazineInquiryListDataType {
  page: number;
}

// 매거진 리스트 조회하기
export const getMagazineInquiryList = createAsyncThunk(
  "GET/getMagazineInquiryList",
  async (params: MagazineInquiryListDataType, thunkApi) => {
    try {
      const response = await getMagazineInquiryListHandler(params.page);
      // console.log(response);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const MagazineInquirySlice = createSlice({
  name: "MagazineInquirySlice",
  initialState: initState,
  reducers: {
    // 페이지 저장
    setMagazineListCurrentPage: (state, action) => {
      state.currentPage = action.payload.isPage;
    },
    // 검색 정보 저장
    setMagazineListSearchData: (state, action) => {
      state.currentPage = action.payload.page;
    },
    // 전체 체크
    setMagazineListAllChecked: (state, action) => {
      state.allChecked = action.payload.allChecked;
      if (action.payload.allChecked) {
        const checked: number[] = [];
        state.list.forEach((list) => {
          checked.push(list.brdSeq);
        });
        state.checkList = checked;
      } else {
        state.checkList = [];
      }
    },
    // 각각 체크
    setMagazineListEachChecked: (state, action) => {
      if (action.payload.isChecked) {
        state.checkList = [...state.checkList, action.payload.brdSeq];
        const length = state.list.length;
        if (length === state.checkList.length) {
          state.allChecked = true;
        }
      } else {
        state.checkList = state.checkList.filter(
          (item) => item !== action.payload.brdSeq
        );
        state.allChecked = false;
      }
    },
    // 유저 리스트 업데이트
    setMagazineList: (state, action) => {
      state.list = action.payload.list;
    },
    // 체크리스트 수정
    setMagazineListCheckedList: (state, action) => {
      state.checkList = action.payload.checkList;
    },
  },
  extraReducers: (builder) => {
    builder
      // 매거진 임시저장 리스트 조회
      .addCase(getMagazineInquiryList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMagazineInquiryList.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          state.totalPages = action.payload.data.totalPages;
          state.totalCount = action.payload.data.totalCount;
          state.list = [];
          state.list = action.payload.data.data;
        } else {
          return state;
        }
      })
      .addCase(getMagazineInquiryList.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const MagazineInquiryAction = MagazineInquirySlice.actions;
export default MagazineInquirySlice.reducer;
