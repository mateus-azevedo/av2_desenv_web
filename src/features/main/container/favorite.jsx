import React, { useEffect, useContext, useState } from "react";
import { FirebaseConfig } from "../../../services";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import { FavoriteCharacters } from "../../../context";

const database = getFirestore(FirebaseConfig);
const userCollectionRef = collection(database, "characters");

const Favorite = () => {
  // const [characters, setCharacters] = useState(null);
  const { characters, setCharacters } = useContext(FavoriteCharacters.Context);
  /**
   * TENTATIVA DE USO ARQUIVO SEPARADO
   */
  // useEffect(() => {
  //   Firestore.getCharacters();
  // }, []);

  /**
   * TENTATIVA NO MESMO ARQUIVO
   */
  useEffect(() => {
    const getCharacters = async () => {
      const data = await getDocs(userCollectionRef);
      const charactersCollection = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setCharacters(charactersCollection);
    };

    getCharacters();
  }, []);

  return <h1>firestore {JSON.stringify(characters)}</h1>;
};

export default Favorite;
