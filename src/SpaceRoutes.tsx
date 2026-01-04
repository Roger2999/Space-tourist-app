import { SpaceApp } from "./SpaceApp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { RouterLoader } from "./components";
import {
  CrewPage,
  DestinationPage,
  Europa,
  HomePage,
  Mars,
  Moon,
  PageNotFound,
  TechnologyPage,
  Titan,
} from "./utilites/lazyImports";

export const SpaceRoutes = () => {
  return (
    <BrowserRouter>
      <SpaceApp>
        <Suspense fallback={<RouterLoader />}>
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/crew" element={<CrewPage />} />
            <Route path="/destination" element={<DestinationPage />}>
              <Route index element={<Moon />} />
              <Route path="Mars" element={<Mars />} />
              <Route path="Europa" element={<Europa />} />
              <Route path="Titan" element={<Titan />} />
            </Route>
            <Route path="/tech" element={<TechnologyPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </SpaceApp>
    </BrowserRouter>
  );
};
