import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
