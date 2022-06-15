import React, { useEffect, useContext, useState } from "react";
import { Firestore } from "../../../services";

import { FavoritePage } from "../pages";
import { AuthGoogle } from "../../../context";

const Favorite = () => {
  const [collectionCharacters, setCollectionCharacters] = useState([]);
  const { user } = useContext(AuthGoogle.Context);
  const userId = JSON.parse(user).uid;

  useEffect(() => {
    function returnCharactersPromise() {
      return new Promise((resolve) => {
        resolve(Firestore.getAllFavoriteCharacter(userId));
      });
    }

    returnCharactersPromise().then((characters) =>
      setCollectionCharacters(characters)
    );

    // console.log("favoriteContainer:userid", userId);
  });

  // console.log("favoriteContainer:collectionCharacters", collectionCharacters);

  return <FavoritePage characters={collectionCharacters} />;
};

export default Favorite;
