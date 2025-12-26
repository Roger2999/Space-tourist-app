import { SpaceApp } from "./SpaceApp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import {
  CrewPage,
  DestinationPage,
  HomePage,
  TechnologyPage,
} from "./public/pages";
export const SpaceRoutes = () => {
  return (
    <BrowserRouter>
      <SpaceApp>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/tech" element={<TechnologyPage />} />
        </Routes>
      </SpaceApp>
    </BrowserRouter>
  );
};
