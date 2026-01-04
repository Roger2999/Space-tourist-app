import { lazy } from "react";

export const Moon = lazy(() => import("../public/pages/DestinationPage/Moon"));
export const Mars = lazy(() => import("../public/pages/DestinationPage/Mars"));
export const Europa = lazy(
  () => import("../public/pages/DestinationPage/Europa")
);
export const Titan = lazy(
  () => import("../public/pages/DestinationPage/Titan")
);
