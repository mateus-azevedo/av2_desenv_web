import React, { useEffect, useContext } from "react";
import { FirebaseConfig } from "../../../services";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import { FavoritePage } from "../pages";
import { FavoriteCharacters } from "../../../context";

const database = getFirestore(FirebaseConfig);
const userCollectionRef = collection(database, "characters");

const Favorite = () => {
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
      const charactersCollection = data.docs.map((doc) => {
        // console.log(doc);
        console.log(doc._document.data.value.mapValue.fields.id.integerValue);
        const idCharacter =
          doc._document.data.value.mapValue.fields.id.integerValue;

        return {
          ...doc.data(),
          id: idCharacter,
        };
      });

      console.log("charactersCollection", charactersCollection);
      setCharacters(charactersCollection);
    };

    getCharacters();
  }, []);

  // console.log(characters);

  // return <h1>firestore {JSON.stringify(characters)}</h1>;
  return <FavoritePage characters={characters} />;
};

export default Favorite;
