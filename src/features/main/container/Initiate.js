import React, { useEffect } from "react";
import { Home } from "../pages";
import { api } from "../../../services";

const Initiate = () => {
  useEffect(() => {
    api
      .get("characters")
      .then((response) => console.log(response.data.data))
      .catch((err) => console.log(err));
  }, []);

  return <Home />;
};

export default Initiate;
