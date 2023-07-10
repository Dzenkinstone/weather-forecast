import { createSlice } from "@reduxjs/toolkit";
import { getWeather, searchWeather } from "./operations";

const initialState = {
  mainForecast: [],
  cityForecast: [],
  cities: [],
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
    [getWeather.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.mainForecast = action.payload;
    },
    [getWeather.rejected](state, action) {
      state.error = action.payload;
    },
    [searchWeather.fulfilled](state, action) {
      state.error = null;
      state.cityForecast.push(action.payload.list);
      state.cities.push(action.payload.city.name);
    },
    [searchWeather.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export const deleteCard = weatherSlice.actions.deleteCard;
export const weatherReducer = weatherSlice.reducer;
