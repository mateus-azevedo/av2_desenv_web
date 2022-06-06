import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeFeature } from "../features";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeFeature.Container.Initiate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
