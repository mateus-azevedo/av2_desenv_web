import React from "react";
import { RoutesConfig } from "./config";

import { AuthGoogle } from "./context";

import "./global.styles.css";

export default function App() {
  return (
    <AuthGoogle.Provider>
      <RoutesConfig />
    </AuthGoogle.Provider>
  );
}
