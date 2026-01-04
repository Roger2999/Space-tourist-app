import { lazy } from "react";
export const HomePage = lazy(() => import("../public/pages/HomePage/HomePage"));
export const CrewPage = lazy(() => import("../public/pages/CrewPage/CrewPage"));
export const DestinationPage = lazy(
  () => import("../public/pages/DestinationPage/DestinationPage")
);
export const TechnologyPage = lazy(
  () => import("../public/pages/TechnologyPage/TechnologyPage")
);

export const Moon = lazy(() => import("../public/pages/DestinationPage/Moon"));
export const Mars = lazy(() => import("../public/pages/DestinationPage/Mars"));
export const Europa = lazy(
  () => import("../public/pages/DestinationPage/Europa")
);
export const Titan = lazy(
  () => import("../public/pages/DestinationPage/Titan")
);
export const PageNotFound = lazy(
  () => import("../components/PageNotFound/PageNotFound")
);
