import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/_variables.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SpaceRoutes } from "./SpaceRoutes";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <SpaceRoutes />
    </StrictMode>
  </QueryClientProvider>
);
