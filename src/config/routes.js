import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Header } from "../components";
import { MainFeature } from "../features";

import { AuthGoogle } from "../context";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainFeature.Container.Initiate />} />
        <Route
          path="/myfavorite"
          element={
            <RequireAuth>
              <MainFeature.Container.Favorite />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

function useAuth() {
  return React.useContext(AuthGoogle.Context);
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  console.log(auth);

  if (!auth.user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default RoutesConfig;
