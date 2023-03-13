import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InitAdminStateType } from "types/AdminList";
import { getAdminListHandler, getAdminDetailHandler, banAdminHandler, unbanAdminHandler, addAdminHandler, modifyAdminDetailHandler } from "utils/api/Member/AdminAPI";

const initState = {
    isLoading: false,
    totalCount: 0,
    totalPages: 0,
    filter: "all",
    keyword: "",
    list: [],
    currentPage: 1,

    detailItem: {
        admSeq: 0,
        admProfileImageUrl: "",
        admName: "",
        admPhone: "",
        admEmail: "",
        admNickname: "",
        regMagazineCount: 0,
    },
} as InitAdminStateType;

interface AdminListDataType {
    filter: string;
    keyword: string;
    page: number;
}

// 관리자 리스트 조회하기
export const getAdminList = createAsyncThunk("GET/getAdminList", async (params: AdminListDataType, thunkApi) => {
    try {
        const response = await getAdminListHandler(params.filter, params.keyword, params.page);
        console.log(response);
        return response;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

interface AdminListDetailType {
    admSeq: number;
}

// 관리자 상세정보 조회하기
export const getAdminListDetail = createAsyncThunk("GET/getAdminListDetailType", async (params: AdminListDetailType, thunkApi) => {
    try {
        const response = await getAdminDetailHandler(params.admSeq);
        console.log(response);
        return response;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

interface AdminType {
    name: string;
    phone: string;
    email: string;
}

// 관리자 추가
export const setNewAdmin = createAsyncThunk("POST/setNewAdmin", async (params: AdminType, thunkApi) => {
    try {
        const response = await addAdminHandler(params.name, params.phone, params.email);
        // console.log(response);
        return response;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

// 관리자 차단
export const setAdminBlock = createAsyncThunk("PATCH/setAdminBlock", async (params: AdminListDetailType, thunkApi) => {
    try {
        const response = await banAdminHandler(params.admSeq);
        // console.log(response);
        return response;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

// 관리자 차단 해제
export const setAdminUnblock = createAsyncThunk("PATCH/setAdminUnblock", async (params: AdminListDetailType, thunkApi) => {
    try {
        const response = await unbanAdminHandler(params.admSeq);
        // console.log(response);
        return response;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

interface AdminModifyType {
    admSeq: number;
    name: string;
    phone: string;
    email: string;
    nickname: string;
}

// 관리자 정보 변경
export const setAdminInfo = createAsyncThunk("PATCH/setAdminInfo", async (params: AdminModifyType, thunkApi) => {
    try {
        const response = await modifyAdminDetailHandler(params.admSeq, params.name, params.phone, params.email, params.nickname);
        // console.log(response);
        return response;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

const AdminSlice = createSlice({
    name: "AdminSlice",
    initialState: initState,
    reducers: {
        // 페이지 저장
        setAdminListCurrentPage: (state, action) => {
            state.currentPage = action.payload.isPage;
        },
        // 검색 정보 저장
        setAdminListSearchData: (state, action) => {
            state.filter = action.payload.filter;
            state.keyword = action.payload.keyword;
            state.currentPage = action.payload.page;
        },
        setAdminListCount: (state, action) => {
            state.totalCount = action.payload.totalCount;
        },
        setAdminList: (state, action) => {
            state.list = action.payload.list;
        },
    },
    extraReducers: (builder) => {
        builder
            // 멤버 리스트 조회
            .addCase(getAdminList.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getAdminList.fulfilled, (state, action) => {
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
            .addCase(getAdminList.rejected, (state, action) => {
                state.isLoading = true;
            })
            // 딜러 상세 조회
            .addCase(getAdminListDetail.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getAdminListDetail.fulfilled, (state, action) => {
                if (action.payload?.status === 200) {
                    state.isLoading = false;
                    state.detailItem = action.payload.data.data;
                }
            })
            .addCase(getAdminListDetail.rejected, (state, action) => {
                state.isLoading = true;
            });
    },
});

export const AdminAction = AdminSlice.actions;
export default AdminSlice.reducer;
