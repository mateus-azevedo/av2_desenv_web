import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components";
import { MainFeature } from "../features";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainFeature.Container.Initiate />} />
        <Route
          path="/myfavorite"
          element={<MainFeature.Container.Favorite />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
