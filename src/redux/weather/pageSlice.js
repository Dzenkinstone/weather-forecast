import { createSlice } from "@reduxjs/toolkit";

const initialPage = 1;

export const pageSlice = createSlice({
  name: "page",
  initialState: initialPage,
  reducers: {
    setPage(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setPage } = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
