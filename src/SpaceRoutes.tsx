import { SpaceApp } from "./SpaceApp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { RouterLoader } from "./components";

export const SpaceRoutes = () => {
  const HomePage = lazy(() => import("./public/pages/HomePage/HomePage"));
  const CrewPage = lazy(() => import("./public/pages/CrewPage/CrewPage"));
  const DestinationPage = lazy(
    () => import("./public/pages/DestinationPage/DestinationPage")
  );
  const TechnologyPage = lazy(
    () => import("./public/pages/TechnologyPage/TechnologyPage")
  );
  const Moon = lazy(() => import("./public/pages/DestinationPage/Moon"));
  const Mars = lazy(() => import("./public/pages/DestinationPage/Mars"));
  const Europa = lazy(() => import("./public/pages/DestinationPage/Europa"));
  const Titan = lazy(() => import("./public/pages/DestinationPage/Titan"));
  const PageNotFound = lazy(
    () => import("./components/PageNotFound/PageNotFound")
  );

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
