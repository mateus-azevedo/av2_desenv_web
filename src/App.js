import React from "react";
import { RoutesConfig } from "./config";
import { Header } from "./components";

import { AuthGoogle } from "./context";

import "./global.styles.css";

export default function App() {
  return (
    <AuthGoogle.Provider>
      <Header />
      <RoutesConfig />
    </AuthGoogle.Provider>
  );
}
