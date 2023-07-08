import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "20a1790bb70256b9cc082b6d5160a3ae";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (value, thunkAPI) => {
    try {
      const { lat, lon } = value;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&lat=${lat}&lon=${lon}&units=metric`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
