import { createSlice } from "@reduxjs/toolkit";

interface initial_state {
  PhoneNumber: number;
  CheckLogin: boolean;
}

const initialState: initial_state = {
  PhoneNumber: 0,
  CheckLogin: false,
};

export const bebinimReducers = createSlice({
  name: "bebinimReducers",
  initialState,
  reducers: {
    GetNumber: (state, { payload }: { payload: number }) => {
      state.PhoneNumber = payload;
    },
    CreateAccount: (state, { payload }: { payload: boolean }) => {
      state.CheckLogin = payload;
    },
  },
});

export const { GetNumber, CreateAccount } = bebinimReducers.actions;
export default bebinimReducers.reducer;
