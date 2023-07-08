import { createSlice } from "@reduxjs/toolkit";
import { getWeather } from "./operations";

const initialState = { list: [], city: null, isLoading: false, error: null };

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: {
    [getWeather.pending](state) {
      state.isLoading = true;
    },
    [getWeather.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.list = action.payload.list;
      state.city = action.payload.city.name;
    },
    [getWeather.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const weatherReducer = weatherSlice.reducer;
