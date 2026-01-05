import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/_variables.css";
import "./styles/global.css";
import "@fontsource/bellefair";
import "@fontsource/barlow-condensed";
import "@fontsource/barlow";
import { SpaceRoutes } from "./SpaceRoutes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SpaceRoutes />
  </StrictMode>
);
