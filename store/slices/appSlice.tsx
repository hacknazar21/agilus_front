import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {}
const initialState: IAppState = {};
const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setAppState: (
      state: IAppState,
      action: PayloadAction<
        "active" | "background" | "inactive" | "unknown" | "extension"
      >
    ) => {
      return state;
    },
  },
});

export const { setAppState } = appSlice.actions;

export default appSlice.reducer;
