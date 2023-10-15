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
  SavedList: SavedTypes[];
}

// Value of CheckLogin state for localstorage
const LoginState =
  localStorage.getItem("login") !== null
    ? JSON.parse(localStorage.getItem("login") || "")
    : false;

// Value of OneMonthAuto state for localstorage
const OneAutoState =
  localStorage.getItem("oneAuto") !== null
    ? JSON.parse(localStorage.getItem("oneAuto") || "")
    : false;

// Value of OneMonth state for localstorage
const OneMonthState =
  localStorage.getItem("oneMonth") !== null
    ? JSON.parse(localStorage.getItem("oneMonth") || "")
    : false;

// Value of ThreeMonth state for localstorage
const ThreeMonthState =
  localStorage.getItem("threeMonth") !== null
    ? JSON.parse(localStorage.getItem("threeMonth") || "")
    : false;

// Value of SixMonth state for localstorage
const SixMonthState =
  localStorage.getItem("sixMonth") !== null
    ? JSON.parse(localStorage.getItem("sixMonth") || "")
    : false;

// Value of SaveList state for localstorage
const SaveListState =
  localStorage.getItem("savelist") !== null
    ? JSON.parse(localStorage.getItem("savelist") || "")
    : [];

// Value of Name state for localstorage
const NameState =
  localStorage.getItem("name") !== null
    ? JSON.parse(localStorage.getItem("name") || "")
    : "";

// Value of Email state for localstorage
const EmailState =
  localStorage.getItem("email") !== null
    ? JSON.parse(localStorage.getItem("email") || "")
    : "";

const initialState: initial_state = {
  PhoneNumber: "",
  Name: NameState,
  Email: EmailState,
  CheckLogin: LoginState,
  OneMonthAuto: OneAutoState,
  OneMonth: OneMonthState,
  ThreeMonth: ThreeMonthState,
  SixMonth: SixMonthState,
  SavedList: SaveListState,
};

export const bebinimReducers = createSlice({
  name: "bebinimReducers",
  initialState,
  reducers: {
    GetNumber: (state, { payload }: { payload: string }) => {
      state.PhoneNumber = payload;
    },
    GetName: (state, { payload }: { payload: string }) => {
      state.Name = payload;
      localStorage.setItem("name", JSON.stringify(state.Name));
    },
    GetEmail: (state, { payload }: { payload: string }) => {
      state.Email = payload;
      localStorage.setItem("email", JSON.stringify(state.Email));
    },
    CreateAccount: (state, { payload }: { payload: boolean }) => {
      state.CheckLogin = payload;
      localStorage.setItem("login", JSON.stringify(state.CheckLogin));
    },
    ChangeOneMonthAuto: (state, { payload }: { payload: boolean }) => {
      state.OneMonthAuto = payload;
      localStorage.setItem("oneAuto", JSON.stringify(state.OneMonthAuto));
    },
    ChangeOneMonth: (state, { payload }: { payload: boolean }) => {
      state.OneMonth = payload;
      localStorage.setItem("oneMonth", JSON.stringify(state.OneMonth));
    },
    ChangeThreeMonth: (state, { payload }: { payload: boolean }) => {
      state.ThreeMonth = payload;
      localStorage.setItem("threeMonth", JSON.stringify(state.ThreeMonth));
    },
    ChangeSixMonth: (state, { payload }: { payload: boolean }) => {
      state.SixMonth = payload;
      localStorage.setItem("sixMonth", JSON.stringify(state.SixMonth));
    },
    AddToSavedList: (state, { payload }: { payload: SavedTypes }) => {
      let savedItem = [...state.SavedList];
      savedItem.push(payload);
      state.SavedList = savedItem;
      localStorage.setItem("savelist", JSON.stringify(state.SavedList));
    },
    DeleteItem: (state, { payload }: { payload: any }) => {
      let removedList = state.SavedList.filter((elem) => elem.id !== payload);
      state.SavedList = removedList;
      localStorage.setItem("savelist", JSON.stringify(state.SavedList));
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
} = bebinimReducers.actions;
export default bebinimReducers.reducer;
