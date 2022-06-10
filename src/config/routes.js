import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainFeature } from "../features";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainFeature.Container.Favorite />} />
        {/* <Route path="/myfavorite" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
