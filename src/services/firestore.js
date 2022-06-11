import { FirebaseConfig } from ".";
import {
  doc,
  setDoc,
  arrayUnion,
  getFirestore,
  updateDoc,
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

// export async function getCharacters() {
//   // const [characters, setCharacters] = useState(null);

//   const data = await getDocs(userCollectionRef);
//   const charactersCollection = data.docs.map((doc) => ({
//     ...doc.data(),
//     id: doc.id,
//   }));

//   setCharacters(charactersCollection);
// }
