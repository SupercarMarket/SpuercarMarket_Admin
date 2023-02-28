import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { EtcInquiryInitType } from "../../types/EtcInquiryList";
import {
    getDetailEctInquiryItemHandler,
    getEtcInquiryListHandler, setEtcInquiryProgressHandler
} from "../../utils/api/Inquiry/EtcInquiryAPI";
import {getDetailForSaleInquiryItemHandler} from "../../utils/api/Market/ForSaleInquiryAPI";
const initState = {
    isLoading : false,
    totalCount : 0,
    totalPages : 0,
    currentPage : 1,
    progressCount : 0,
    filter : '',
    keyword : '',
    updated : false,
    list : [],
    allChecked : false,
    checkList : [],
    isChecked : false,
    detailItem : {
        brdSeq : 0,
        title : '',
        contents : '',
        progress : 0,
        userSeq : 0,
        userId : '',
        userName : '',
        userNickName: '',
        userEmail: '',
        userPhone: '',
        userRating: '',
        createdDate : '',
        postCount : 0,
        commentCount: 0
      }
} as EtcInquiryInitType;

interface getEtcInquiryListParamsType {
    filter : string,
    keyword : string,
    page : number
}
interface getDetailParamsType {
    brdSeq : string
}interface setReplyParamsType {
    reply : string,
    brdSeq : string
}
interface setEtcInquiryProgressParamsType {
    checkList : number[]
}

// 기타 문의 리스트 조회
export const getEtcInquiryList = createAsyncThunk('GET/getEtcInquiryList', async( data : getEtcInquiryListParamsType, thunkApi ) => {
    try{
        const response = await getEtcInquiryListHandler( data.filter, data.keyword, data.page );
        // console.log(response);
        return response;
    }catch( error ){
        return thunkApi.rejectWithValue( error );
    }
});
// 기타 문의 상세 조회
export const getEctInquiryDetailItem = createAsyncThunk(
    "GET/getEctInquiryDetailItem",
    async ( params : getDetailParamsType, thunkApi) => {
        try {
            const response = await getDetailEctInquiryItemHandler( params.brdSeq );
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue( error );
        }
    }
);

// 기타 문의 상태 변경
export const setEtcInquiryProgress = createAsyncThunk('POST/setEtcInquiryProgress', async( data : setEtcInquiryProgressParamsType, thunkApi ) => {
    try{
        const response = await setEtcInquiryProgressHandler( data.checkList );
        // console.log(response);
        return response;
    }catch( error ){
        return thunkApi.rejectWithValue( error );
    }
});


const EtcInquirySlice = createSlice({
    name : 'EtcInquiryListSlice',
    initialState : initState,
    reducers : {
        // 현재 페이지 수 설정
        setEtcInquiryListCurrentPage : ( state, action ) => {
            state.currentPage = action.payload.isPage;
        },
        // filter 값 쓰기 위해서
        setEtcInquiryListFilter : ( state, action ) => {
            state.filter = action.payload.filter;
        },
        // keyword 값 쓰기 위해서
        setEtcInquiryListKeyword : ( state, action ) => {
            state.keyword = action.payload.keyword;
        },// 전체 체크
        setEtcInquiryListAllChecked : ( state, action ) => {
            if( action.payload.allChecked ){

                const checked : number[] = [];
                state.list.forEach( list => {
                    if( list.progress === 0 ){
                        checked.push( list.brdSeq );
                    }
                });
                state.checkList = checked;
            }else{
                state.checkList = [];
            }
            state.allChecked = !state.allChecked;
            console.log( state.checkList );
        },
        // 각각 체크
        setEtcInquiryListEachChecked : ( state, action ) => {
            if( action.payload.isChecked ){
                state.checkList = [...state.checkList, action.payload.brdSeq ];
                const length = state.list.filter( list => list.progress === 0 ).length;
                if( length === state.checkList.length ){
                    state.allChecked = true;
                }
            }else{
                state.checkList = state.checkList.filter( item => item !== action.payload.brdSeq );
                state.allChecked = false;
            }
            console.log( state.checkList );
        }
    },
    extraReducers: ( builder ) => {
        builder
        // 기타 문의 리스트 조회
        .addCase( getEtcInquiryList.pending, ( state, action ) => {
            state.isLoading = true;
        })
        .addCase( getEtcInquiryList.fulfilled, ( state, action ) => {
            if( action.payload?.status === 200 ){
                state.isLoading = false;
                state.totalPages = action.payload.data.totalPages;
                state.totalCount = action.payload.data.totalCount;
                state.progressCount = action.payload.data.progressCount;
                state.list = [];
                state.checkList = [];
                state.allChecked = false;
                state.list = action.payload.data.list;
            }
            return state;
        })
        .addCase( getEtcInquiryList.rejected, ( state, action ) => {
            state.isLoading = true;
        })
        //기타 문의 상태 변경
        .addCase( setEtcInquiryProgress.fulfilled, ( state, action ) => {
            if( action.payload?.status === 200 ){
                state.updated = !state.updated;
                return state;
            }
            return state;
        })
        //기타 문의 상세 조회
        .addCase(getEctInquiryDetailItem.pending, ( state, action ) => {
            state.isLoading = true;
        })
        //기타 문의 상세 조회
        .addCase(getEctInquiryDetailItem.fulfilled, ( state, action ) => {
            if( action.payload?.status === 200 ) {
                state.isLoading = false;
                console.log(action.payload.data);
                state.detailItem = action.payload.data.data;
                console.log(state.detailItem);
            }
        })
        //기타 문의 상세 조회
        .addCase(getEctInquiryDetailItem.rejected, ( state, action ) => {
            state.isLoading = true;
        })

    },
});

export const EtcInquiryAction = EtcInquirySlice.actions;
export default EtcInquirySlice.reducer;