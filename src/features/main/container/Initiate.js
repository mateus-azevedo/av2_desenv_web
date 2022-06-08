import React, { useState, useEffect, useCallback } from "react";
import { Home } from "../pages";
import { api } from "../../../services";

const Initiate = () => {
  const [characters, setCharacters] = useState([]);

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
      .get("characters")
      .then((response) => {
        // let resultResponse = [];

        // response.data.data.results.map((res) => {
        //   if (res.description) {
        //     resultResponse.push(res);
        //   }
        // });

        // setCharacters(resultResponse);
        setCharacters(response.data.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return <Home characters={characters} updateCharacters={setCharacters} />;
};

export default Initiate;
