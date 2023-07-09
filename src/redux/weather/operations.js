import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "20a1790bb70256b9cc082b6d5160a3ae";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (value, thunkAPI) => {
    try {
      const { lat, lon } = value;
      const responce = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&lat=${lat}&lon=${lon}&units=metric`
      );
      const data = responce.data.list.map(
        ({ dt, dt_txt, weather, main, wind }) => {
          return {
            dt,
            dt_txt,
            weather,
            main,
            wind,
            name: responce.data.city.name,
          };
        }
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const searchWeather = createAsyncThunk(
  "weather/searchWeather",
  async (value, thunkAPI) => {
    try {
      const responce = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${API_KEY}&units=metric`
      );
      const data = responce.data.list.map(
        ({ dt, dt_txt, weather, main, wind }) => {
          return {
            dt,
            dt_txt,
            weather,
            main,
            wind,
            name: responce.data.city.name,
          };
        }
      );

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
