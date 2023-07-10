import "./App.css";

import { lazy } from "react";

import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const WeatherPage = lazy(() => import("./pages/WeatherPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/weather-forecast" element={<WeatherPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
