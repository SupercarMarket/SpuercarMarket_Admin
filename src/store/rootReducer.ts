import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

export type ReducerType = ReturnType< typeof rootReducer >;
export default rootReducer;