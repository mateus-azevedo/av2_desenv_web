import React, { useState, useEffect } from "react";
import { Home } from "../pages";
import { api } from "../../../services";

const Initiate = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    await api
      .get("characters")
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return <Home characters={characters} />;
};

export default Initiate;
