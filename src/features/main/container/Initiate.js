import React, { useState, useEffect, useCallback } from "react";
import { Home } from "../pages";
import { api } from "../../../services";

const Initiate = () => {
  const [characters, setCharacters] = useState([]);
  let offset = 0;

  // const fetchMoreCharacters = (characters, charactersLength) => {
  //   useCallback(async () => {
  //     try {
  //       const response = await api.get("characters", {
  //         params: {
  //           offset: charactersLength,
  //         },
  //       });

  //       let resultResponse = [];

  //       response.data.data.results.map((res) => {
  //         if (res.description) {
  //           resultResponse.push(res);
  //         }
  //       });

  //       setCharacters([...characters, resultResponse]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });
  // };

  const fetchCharacters = async () => {
    await api
      .get(`characters?offset=${offset}`)
      .then((response) => {
        const newCharacter = [];
        response.data.data.results.forEach((res) => {
          newCharacter.push(res);
        });
        setCharacters((oldCharacter) => [...oldCharacter, ...newCharacter]);
        // setCharacters(response.data.data.results);
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

  return <Home characters={characters} updateCharacters={setCharacters} />;
};

export default Initiate;
