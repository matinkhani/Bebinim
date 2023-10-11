import { createSlice } from "@reduxjs/toolkit";

interface initial_state {
  PhoneNumber: string;
  CheckLogin: boolean;
  OneMonthAuto: boolean;
  OneMonth: boolean;
  ThreeMonth: boolean;
  SixMonth: boolean;
}

const initialState: initial_state = {
  PhoneNumber: "",
  CheckLogin: false,
  OneMonthAuto: false,
  OneMonth: false,
  ThreeMonth: false,
  SixMonth: false,
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
      console.log(payload);
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
  },
});

export const {
  GetNumber,
  CreateAccount,
  ChangeOneMonthAuto,
  ChangeOneMonth,
  ChangeThreeMonth,
  ChangeSixMonth,
} = bebinimReducers.actions;
export default bebinimReducers.reducer;
