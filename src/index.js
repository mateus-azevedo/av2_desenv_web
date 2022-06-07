import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
