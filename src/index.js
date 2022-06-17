import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.js";
require("dotenv").config();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Toaster />
    <App />
  </StrictMode>
);
