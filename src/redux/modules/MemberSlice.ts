import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InitMemberStateType } from "types/MemberList";
import { getMemberListHandler, getDetailMemberHandler } from "utils/api/Member/MemberAPI";

const initState = {
  isLoading: false,
  totalCount: 0,
  totalPages: 0,
  filter: "",
  keyword: "",
  allDate: true,
  startDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
  endDate: new Date(),
  role: "all",
  level: [],
  list: [],
  allChecked: false,
  checkList: [],
  isChecked: false,
  currentPage: 1,

  detailItem: {
    dlrSeq: 0,
    comName: "",
    comPhone: "",
    comAddress: "",
    guildName: "",
    dlrNum: "",
    dlrEmployeeCardFront: "",
    dlrEmployeeCardBack: "",
    dlrPorileImage: "",
    userId: "",
    userNickName: "",
    userEmail: "",
    userPhone: "",
    userRating: "",
    createdDate: "",
    postCount: 0,
    commentCount: 0,
    regAdmin: "",
    regAdminEmail: "",
    regAdminNickname: "",
  },
} as InitMemberStateType;

interface MemberListDataType {
  filter: string;
  keyword: string;
  allDate: boolean;
  startDate: Date;
  endDate: Date;
  role: string;
  level: string[];
  page: number;
}

// 매물 리스트 조회하기
export const getMemberList = createAsyncThunk("GET/getMemberList", async (params: MemberListDataType, thunkApi) => {
  try {
    const response = await getMemberListHandler(params.filter, params.keyword, params.allDate, params.startDate, params.endDate, params.role, params.level, params.page);
    console.log(response);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

interface getMemberListDetailType {
  dlrSeq: string;
}

export const getMemberListDetail = createAsyncThunk("GET/getMemberListDetail", async (params: getMemberListDetailType, thunkApi) => {
  try {
    const response = await getDetailMemberHandler(params.dlrSeq);
    console.log(response);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const MemberSlice = createSlice({
  name: "MemberSlice",
  initialState: initState,
  reducers: {
    // 페이지 저장
    setMemberListCurrentPage: (state, action) => {
      state.currentPage = action.payload.isPage;
    },
    // 필터 reducer
    setMemberListFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
    // keyword reducer
    setMemberListKeyword: (state, action) => {
      state.keyword = action.payload.keyword;
    },
    // 전체 범위 reducer
    setMemberListAllDate: (state, action) => {
      state.allDate = action.payload.allDate;
    },
    // 날짜 범위 reducer
    setMemberListStartDate: (state, action) => {
      state.startDate = action.payload.startDate;
    },
    setMemberListEndDate: (state, action) => {
      state.endDate = action.payload.endDate;
    },
    // 딜러 여부 reducer
    setMemberListRole: (state, action) => {
      state.role = action.payload.role;
    },
    // 등급 reducer
    setMemberListLevel: (state, action) => {
      state.level = action.payload.level;
    },
    // 전체 체크
    setMemberListAllChecked: (state, action) => {
      if (action.payload.allChecked) {
        const checked: number[] = [];
        state.list.forEach((list) => {
          if (!list.isBanned) {
            checked.push(list.userSeq);
          }
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
    setMemberListEachChecked: (state, action) => {
      if (action.payload.isChecked) {
        state.checkList = [...state.checkList, action.payload.userSeq];
        const length = state.list.filter((list) => !list.isBanned).length;
        if (length === state.checkList.length) {
          state.allChecked = true;
        }
      } else {
        state.checkList = state.checkList.filter((item) => item !== action.payload.userSeq);
        state.allChecked = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // 멤버 리스트 조회
      .addCase(getMemberList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMemberList.fulfilled, (state, action) => {
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
      .addCase(getMemberList.rejected, (state, action) => {
        state.isLoading = true;
      })
      // 매물 리스트 상세 조회
      .addCase(getMemberListDetail.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMemberListDetail.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          state.detailItem = { ...state.detailItem, ...action.payload.data };
        }
      })
      .addCase(getMemberListDetail.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const MemberAction = MemberSlice.actions;
export default MemberSlice.reducer;
