import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { weatherReducer } from "./weather/weatherSlice";
import { pageReducer } from "./weather/pageSlice";

const persistConfig = {
  key: "weather",
  storage,
  whitelist: ["weather-forecast"],
};

export const store = configureStore({
  reducer: {
    weather: persistReducer(persistConfig, weatherReducer),
    page: pageReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
