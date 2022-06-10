import { useContext, useState } from "react";
import { FirebaseConfig } from ".";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import { FavoriteCharacters } from "../context";

const database = getFirestore(FirebaseConfig);
const userCollectionRef = collection(database, "characters");

// export async function getCharacters() {
//   const { setCharacters } = useContext(FavoriteCharacters.Context);

//   const data = await getDocs(userCollectionRef);
//   const charactersCollection = data.docs.map((doc) => ({
//     ...doc.data(),
//     id: doc.id,
//   }));

//   setCharacters(charactersCollection);
// }

export async function getCharacters() {
  // const [characters, setCharacters] = useState(null);

  const data = await getDocs(userCollectionRef);
  const charactersCollection = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  setCharacters(charactersCollection);
}

// export const getCharacters = async () => {
// };
