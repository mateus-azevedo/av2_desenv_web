import React from "react";
import { RoutesConfig } from "./config";
import { Header } from "./components";

import { AuthGoogle, FavoriteCharacters } from "./context";

import "./global.styles.css";

export default function App() {
  return (
    <AuthGoogle.Provider>
      <FavoriteCharacters.Provider>
        <Header />
        <RoutesConfig />
      </FavoriteCharacters.Provider>
    </AuthGoogle.Provider>
  );
}
