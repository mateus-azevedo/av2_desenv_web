import { FirebaseConfig } from ".";
import {
  doc,
  setDoc,
  arrayUnion,
  getFirestore,
  getDoc,
  arrayRemove,
} from "firebase/firestore";

const db = getFirestore(FirebaseConfig);

export async function createOrUpdateUser(user, userId) {
  const userRef = doc(db, "users", userId);

  await setDoc(
    userRef,
    {
      id: userId,
      name: user.displayName,
    },
    { merge: true }
  );

  console.log("user", user);
  console.log("userId", userId);
}

export async function saveFavoriteCharacter(
  userId,
  id,
  name,
  description,
  thumbnail
) {
  const userRef = doc(db, "users", userId);

  await setDoc(
    userRef,
    {
      characters: arrayUnion({
        id,
        name,
        description: description || null,
        thumbnail,
      }),
    },
    { merge: true }
  );
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

// export async function deleteFavoriteCharacter(
//   userId,
//   id
//   // name,
//   // description,
//   // thumbnail
// ) {
//   const userRef = doc(db, "users", userId);

//   await updateDoc(
//     userRef,
//     {
//       characters: arrayRemove(id),
//     },
//     { merge: true }
//   );
// }
