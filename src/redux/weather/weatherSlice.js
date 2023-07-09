import { createSlice } from "@reduxjs/toolkit";
import { getWeather, searchWeather } from "./operations";

const initialState = {
  list: [],
  cityForecast: [],
  city: "",
  isLoading: false,
  error: null,
};

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
      state.city = action.payload.city;
    },
    [getWeather.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [searchWeather.pending](state) {
      state.isLoading = true;
    },
    [searchWeather.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.cityForecast.push(action.payload.list);
    },
    [searchWeather.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const weatherReducer = weatherSlice.reducer;
