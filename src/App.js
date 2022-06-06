import { RoutesConfig } from "./config";

import { Background } from "./components";
import "./global.styles.css";

export default function App() {
  return (
    <Background>
      <RoutesConfig />
    </Background>
  );
}
