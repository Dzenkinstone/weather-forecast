import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

const API_KEY = "ca0f0e080c31e1e31448da75c1772395";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (value, thunkAPI) => {
    try {
      const { lat, lon } = value;
      const responce = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&lat=${lat}&lon=${lon}&units=metric&lang=ua`
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
        `http://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${API_KEY}&units=metric&lang=ua`
      );

      return responce.data;
    } catch (e) {
      toast("Такого міста не знайдено", {
        duration: 2000,
        style: {
          backgroundColor: "red",
          color: "white",
          fontSize: "20px",
        },
      });
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
