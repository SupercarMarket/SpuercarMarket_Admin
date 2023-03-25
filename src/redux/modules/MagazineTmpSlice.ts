import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InitMagazineTmpStateType } from "types/MagazineTmp";
import { getDetailMagazineTmpHandler, getMagazineTmpListHandler } from "utils/api/Magazine/MagazineTmpAPI";

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
        title: "",
        id: 0,
        thumbnail: "",
        contentHtml: "",
        createAt: "",
        updateAt: "",
        user: {
            id: 0,
            nickName: "",
            call: "",
            profileSrc: "",
        },
    },
} as InitMagazineTmpStateType;

interface MagazineTmpListDataType {
    page: number;
}

// 매거진 리스트 조회하기
export const getMagazineTmpList = createAsyncThunk("GET/getMagazineList", async (params: MagazineTmpListDataType, thunkApi) => {
    try {
        const response = await getMagazineTmpListHandler(params.page);
        // console.log(response);
        return response;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

interface getMagazineTmpDetailProps {
    brdSeq: string;
}

// 매거진 상세정보 조회하기
export const getMagazineTmpDetail = createAsyncThunk("GET/getMagazineDetail", async (params: getMagazineTmpDetailProps, thunkApi) => {
    try {
        const response = await getDetailMagazineTmpHandler(params.brdSeq);
        console.log(response);
        return response;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

const MagazineTmpSlice = createSlice({
    name: "MagazineTmpSlice",
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
                state.checkList = state.checkList.filter((item) => item !== action.payload.brdSeq);
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
        // 디테일 내용 업데이트
        setMagazineDetail: (state, action) => {
            state.detailItem.title = action.payload.title;
            state.detailItem.contentHtml = action.payload.contents;
            state.detailItem.thumbnail = action.payload.thumbnail;
        },
    },
    extraReducers: (builder) => {
        builder
            // 멤버 리스트 조회
            .addCase(getMagazineTmpList.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getMagazineTmpList.fulfilled, (state, action) => {
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
            .addCase(getMagazineTmpList.rejected, (state, action) => {
                state.isLoading = true;
            })
            // 매거진 상세 조회
            .addCase(getMagazineTmpDetail.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getMagazineTmpDetail.fulfilled, (state, action) => {
                if (action.payload?.status === 200) {
                    state.isLoading = false;
                    state.detailItem = action.payload.data;
                }
            })
            .addCase(getMagazineTmpDetail.rejected, (state, action) => {
                state.isLoading = true;
            });
    },
});

export const MagazineTmpAction = MagazineTmpSlice.actions;
export default MagazineTmpSlice.reducer;
