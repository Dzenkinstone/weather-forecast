import { createSlice } from "@reduxjs/toolkit";
import { getWeather, searchWeather } from "./operations";

const initialState = {
  mainForecast: [],
  cityForecast: [],
  cities: [],
  isLoading: false,
  error: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    deleteCard(state, action) {
      state.cityForecast = state.cityForecast.filter((item, idx) => {
        return idx !== action.payload;
      });
      state.cities = state.cities.filter((item, idx) => {
        return idx !== action.payload;
      });
    },
  },
  extraReducers: {
    [getWeather.pending](state) {
      state.isLoading = true;
    },
    [getWeather.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.mainForecast = action.payload;
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
      state.cities.push(action.payload.city.name);
    },
    [searchWeather.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const deleteCard = weatherSlice.actions.deleteCard;
export const weatherReducer = weatherSlice.reducer;
