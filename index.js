import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RoutesConfig } from "./src/config";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RoutesConfig />
  </StrictMode>
);
