import React from "react";
import { RoutesConfig } from "./config";

import { AuthGoogle, FavoriteCharacters } from "./context";

import "./global.styles.css";

export default function App() {
  return (
    <AuthGoogle.Provider>
      <FavoriteCharacters.Provider>
        <RoutesConfig />
      </FavoriteCharacters.Provider>
    </AuthGoogle.Provider>
  );
}
