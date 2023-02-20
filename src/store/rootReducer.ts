import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import MarketSlice from "../redux/modules/MarketSlice";

export const store = configureStore({
    reducer:{
        MarketSlice : MarketSlice
    }
});

export type RootState = ReturnType< typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector : TypedUseSelectorHook< RootState > = useSelector;
export const useAppDispatch : () => AppDispatch = useDispatch;