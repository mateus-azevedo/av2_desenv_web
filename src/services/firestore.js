import { FirebaseConfig } from ".";
import {
  doc,
  setDoc,
  arrayUnion,
  getFirestore,
  updateDoc,
  getDoc,
} from "firebase/firestore";

const db = getFirestore(FirebaseConfig);

export async function createOrUpdateUser(user, userId) {
  const userRef = doc(db, "users", userId);

  try {
    await updateDoc(userRef, {});
  } catch {
    await setDoc(userRef, {
      id: userId,
      name: user.displayName,
      characters: [],
    });
  }
}

export async function saveFavoriteCharacter(
  userId,
  id,
  name,
  description,
  thumbnail
) {
  const userRef = doc(db, "users", userId);

  try {
    const res = await updateDoc(userRef, {
      characters: arrayUnion({
        id,
        name,
        description: description || null,
        thumbnail,
      }),
    });
    console.log("Res sucess:", res);
  } catch (e) {
    console.log("Erro res: ", e);
  }
}

export async function getAllFavoriteCharacter(userId) {
  const userRef = doc(db, "users", userId);

  const data = await getDoc(userRef);
  console.log("GAFC:data: ", data);

  const charactersArray =
    data._document.data.value.mapValue.fields.characters.arrayValue.values;
  console.log("GAFC:values", charactersArray);

  const characterField = charactersArray.map((value) => {
    return value.mapValue.fields;
  });
  console.log("GAFC:characterField", characterField);

  const characterObjectArray = [];
  characterField.map((value) => {
    const object = {
      description: value.description.stringValue || null,
      id: value.id.integerValue,
      name: value.name.stringValue,
      thumbnail: {
        extension: value.thumbnail.mapValue.fields.extension.stringValue,
        path: value.thumbnail.mapValue.fields.path.stringValue,
      },
    };

    characterObjectArray.push(object);
    console.log("GAFC:characterObject", value);
  });

  console.log("GAFC:characterObjectArray:", characterObjectArray);

  return characterObjectArray;
}

// export async function getCharacters() {
//   // const [characters, setCharacters] = useState(null);

//   const data = await getDocs(userCollectionRef);
//   const charactersCollection = data.docs.map((doc) => ({
//     ...doc.data(),
//     id: doc.id,
//   }));

//   setCharacters(charactersCollection);
// }
