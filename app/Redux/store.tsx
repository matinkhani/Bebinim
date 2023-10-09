import { configureStore } from "@reduxjs/toolkit";
import  bebinimReducers  from "./createSlice";

export const storee = configureStore({
    reducer:{
       Reducer : bebinimReducers
    }
})
export type RoutState = ReturnType<typeof storee.getState>
export default storee