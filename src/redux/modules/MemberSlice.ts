import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InitMemberStateType } from "types/MemberList";
import { getMemberListHandler, getDetailMemberHandler, getMemberCountInfoHandler } from "utils/api/Member/MemberAPI";

const initState = {
    isLoading: false,
    userTotal: 0,
    userBanned: 0,
    userOut: 0,
    totalCount: 0,
    totalPages: 0,
    filter: "all",
    keyword: "",
    allDate: true,
    startDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    endDate: new Date(),
    role: "0",
    levelAllChecked: true,
    level: ["1", "2", "3", "4", "5"],
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
        dlrProfileImage: "",
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

// 멤버 리스트 조회하기
export const getMemberList = createAsyncThunk("GET/getMemberList", async (params: MemberListDataType, thunkApi) => {
    try {
        const response = await getMemberListHandler(params.filter, params.keyword, params.allDate, params.startDate, params.endDate, params.role, params.level, params.page);
        // console.log(response);
        return response;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

// 유저수 데이터 조회하기
export const getMemberCountInfo = createAsyncThunk("GET/getMemberCountInfo", async (params, thunkApi) => {
    try {
        const response = await getMemberCountInfoHandler();
        // console.log(response);
        return response;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

interface getMemberListDetailType {
    dlrSeq: string;
}

// 딜러 상세정보 조회하기
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
        // 검색 정보 저장
        setMemberListSearchData: (state, action) => {
            state.filter = action.payload.filter;
            state.keyword = action.payload.keyword;
            state.allDate = action.payload.allDate;
            state.startDate = action.payload.startDate;
            state.endDate = action.payload.endDate;
            state.role = action.payload.role;
            state.level = action.payload.level;
            state.levelAllChecked = action.payload.levelAllChecked;
            state.currentPage = action.payload.page;
        },
        // 전체 체크
        setMemberListAllChecked: (state, action) => {
            state.allChecked = action.payload.allChecked;
            if (action.payload.allChecked) {
                const checked: number[] = [];
                state.list.forEach((list) => {
                    if (!list.isBanned) {
                        checked.push(list.userSeq);
                    }
                });
                state.checkList = checked;
            } else {
                state.checkList = [];
            }
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
        // 차단 유저수 업데이트
        setMemberCountBanned: (state, action) => {
            state.userBanned = action.payload.userBanned;
        },
        // 유저 리스트 업데이트
        setMemberList: (state, action) => {
            state.list = action.payload.list;
        },
        // 체크리스트 수정
        setMemberListCheckedList: (state, action) => {
            state.checkList = action.payload.checkList;
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
            // 멤버수 정보 조회
            .addCase(getMemberCountInfo.fulfilled, (state, action) => {
                state.userTotal = action.payload?.data.memberTotal;
                state.userBanned = action.payload?.data.memberBanned;
                state.userOut = action.payload?.data.memberOut;
            })
            // 딜러 상세 조회
            .addCase(getMemberListDetail.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getMemberListDetail.fulfilled, (state, action) => {
                if (action.payload?.status === 200) {
                    state.isLoading = false;
                    state.detailItem = action.payload.data.data;
                }
            })
            .addCase(getMemberListDetail.rejected, (state, action) => {
                state.isLoading = true;
            });
    },
});

export const MemberAction = MemberSlice.actions;
export default MemberSlice.reducer;
