import { FirebaseConfig } from ".";
import {
  doc,
  setDoc,
  arrayUnion,
  getFirestore,
  getDoc,
  collection,
  arrayRemove,
} from "firebase/firestore";

const db = getFirestore(FirebaseConfig);
const userCollectionRef = collection(db, "users");

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
  console.log("GAFC:data.characters: ", data.data().characters);
  const charactersObjectArray = data.data().characters;

  return charactersObjectArray;
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
