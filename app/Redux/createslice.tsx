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
  Name: string;
  Email: string;
  CheckLogin: boolean;
  OneMonthAuto: boolean;
  OneMonth: boolean;
  ThreeMonth: boolean;
  SixMonth: boolean;
  ShowPhoneNumber: string;
  SavedList: SavedTypes[];
}

const initialState: initial_state = {
  PhoneNumber: '',
  Name: '',
  Email: '',
  CheckLogin: false,
  OneMonthAuto: false,
  OneMonth: false,
  ThreeMonth: false,
  SixMonth: false,
  SavedList: [],
  ShowPhoneNumber: '',
};

export const bebinimReducers = createSlice({
  name: "bebinimReducers",
  initialState,
  reducers: {
    GetNumber: (state, { payload }: { payload: string }) => {
      state.PhoneNumber = payload;
    },
    ShowNumber: (state, { payload }: { payload: string }) => {
      state.ShowPhoneNumber = payload;
    },
    GetName: (state, { payload }: { payload: string }) => {
      state.Name = payload;
    },
    GetEmail: (state, { payload }: { payload: string }) => {
      state.Email = payload;
    },
    CreateAccount: (state, { payload }: { payload: boolean }) => {
      state.CheckLogin = payload;
    },
    ChangeOneMonthAuto: (state, { payload }: { payload: boolean }) => {
      state.OneMonthAuto = payload;
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
  GetName,
  GetEmail,
  CreateAccount,
  ChangeOneMonthAuto,
  ChangeOneMonth,
  ChangeThreeMonth,
  ChangeSixMonth,
  AddToSavedList,
  DeleteItem,
  ShowNumber,
} = bebinimReducers.actions;
export default bebinimReducers.reducer;
