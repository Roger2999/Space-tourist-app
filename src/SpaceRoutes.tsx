import { SpaceApp } from "./SpaceApp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
export const SpaceRoutes = () => {
  const HomePage = lazy(() => import("./public/pages/HomePage/HomePage"));
  const CrewPage = lazy(() => import("./public/pages/CrewPage/CrewPage"));
  const DestinationPage = lazy(
    () => import("./public/pages/DestinationPage/DestinationPage")
  );
  const TechnologyPage = lazy(
    () => import("./public/pages/TechnologyPage/TechnologyPage")
  );

  return (
    <BrowserRouter>
      <Suspense fallback={<article>Loading...</article>}>
        <SpaceApp>
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/crew" element={<CrewPage />} />
            <Route path="/destination" element={<DestinationPage />} />
            <Route path="/tech" element={<TechnologyPage />} />
          </Routes>
        </SpaceApp>
      </Suspense>
    </BrowserRouter>
  );
};
