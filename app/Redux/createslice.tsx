import { createSlice } from "@reduxjs/toolkit";

export interface SavedTypes {
  id: number;
  url: string;
  name: string;
  category: string;
  year: string;
  image1: string;
  image2: string;
  image3: string;
  age: string;
  time: string;
  rate: string;
  bgImg: string;
  description: string;
  saved: string;
  save: string;
}

interface initial_state {
  PhoneNumber: string;
  CheckLogin: boolean;
  OneMonthAuto: boolean;
  OneMonth: boolean;
  ThreeMonth: boolean;
  SixMonth: boolean;
  SavedList: SavedTypes[];
}

const initialState: initial_state = {
  PhoneNumber: "",
  CheckLogin: false,
  OneMonthAuto: false,
  OneMonth: false,
  ThreeMonth: false,
  SixMonth: false,
  SavedList: [],
};

export const bebinimReducers = createSlice({
  name: "bebinimReducers",
  initialState,
  reducers: {
    GetNumber: (state, { payload }: { payload: string }) => {
      state.PhoneNumber = payload;
    },
    CreateAccount: (state, { payload }: { payload: boolean }) => {
      state.CheckLogin = payload;
      // console.log(payload);
    },
    ChangeOneMonthAuto: (state, { payload }: { payload: boolean }) => {
      state.OneMonthAuto = payload;
      console.log(payload);
    },
    ChangeOneMonth: (state, { payload }: { payload: boolean }) => {
      state.OneMonth = payload;
    },
    ChangeThreeMonth: (state, { payload }: { payload: boolean }) => {
      state.ThreeMonth = payload;
    },
    ChangeSixMonth: (state, { payload }: { payload: boolean }) => {
      state.SixMonth = payload;
    },
    AddToSavedList: (state, { payload }: { payload: SavedTypes }) => {
      let savedItem = [...state.SavedList];
      savedItem.push(payload);
      state.SavedList = savedItem;
    },
    DeleteItem: (state, { payload }: { payload: any }) => {
      let removedList = state.SavedList.filter((elem) => elem.id !== payload);
      state.SavedList = removedList;
    },
  },
});

export const {
  GetNumber,
  CreateAccount,
  ChangeOneMonthAuto,
  ChangeOneMonth,
  ChangeThreeMonth,
  ChangeSixMonth,
  AddToSavedList,
  DeleteItem,
} = bebinimReducers.actions;
export default bebinimReducers.reducer;
