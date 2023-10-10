import { createSlice } from "@reduxjs/toolkit";

interface initial_state {
  PhoneNumber: string;
  CheckLogin: boolean;
}

const initialState: initial_state = {
  PhoneNumber: "",
  CheckLogin: false,
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
  },
});

export const { GetNumber, CreateAccount } = bebinimReducers.actions;
export default bebinimReducers.reducer;
