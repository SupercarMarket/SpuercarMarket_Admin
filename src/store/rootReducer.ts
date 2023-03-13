import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import MarketSlice from "../redux/modules/MarketSlice";
import ForSaleListSlice from "../redux/modules/ForSaleInquirySlice";
import EtcInquirySlice from "../redux/modules/EtcInquirySlice";
import MemberSlice from "redux/modules/MemberSlice";
import DealerInquirySlice from "redux/modules/DealerInquirySlice";
import AdminSlice from "redux/modules/AdminSlice";

export const store = configureStore({
    reducer: {
        MarketSlice: MarketSlice,
        ForSaleListSlice: ForSaleListSlice,
        EtcInquirySlice: EtcInquirySlice,
        MemberSlice: MemberSlice,
        DealerInquirySlice: DealerInquirySlice,
        AdminSlice: AdminSlice,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
