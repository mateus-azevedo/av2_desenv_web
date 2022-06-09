import React, { useState, useEffect } from "react";
import { Home } from "../pages";
import { api } from "../../../services";

const Initiate = () => {
  const [characters, setCharacters] = useState([]);
  let offset = 0;

  const fetchCharacters = () => {
    api
      .get("characters", {
        params: {
          offset: offset,
        },
      })
      .then((response) => {
        const newCharacter = [];

        response.data.data.results.forEach((res) => {
          newCharacter.push(res);
        });

        setCharacters((oldCharacter) => [...oldCharacter, ...newCharacter]);
      })
      .catch((err) => console.log(err));

    offset += 20;
  };

  const handleScroll = (e) => {
    // console.log("top: ", e.target.documentElement.scrollTop);
    // console.log("win: ", window.innerHeight);
    // console.log("bottom: ", e.target.documentElement.scrollHeight);

    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      // console.log("at the bottom of the page");
      fetchCharacters();
    }
  };

  useEffect(() => {
    fetchCharacters();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return <Home characters={characters} />;
};

export default Initiate;
