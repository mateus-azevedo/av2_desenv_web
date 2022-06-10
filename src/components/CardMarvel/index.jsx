import React, { useContext } from "react";
import * as Styled from "./styles";

import { FirebaseConfig } from "../../services";
import {
  addDoc,
  getFirestore,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
import { AuthGoogle } from "../../context";

const database = getFirestore(FirebaseConfig);
const userCollectionRef = collection(database, "characters");

export default (props) => {
  const userAuthenticaded = useContext(AuthGoogle.Context);
  // const userId = JSON.parse(userAuthenticaded.user).uid;
  // console.log(userId);

  async function saveFavoriteCharacter() {
    try {
      const userId = JSON.parse(userAuthenticaded.user).uid;
      // console.log(userId);

      // const character = await setDoc(
      //   doc(database, "characters", props.character.id.toString()),
      //   {
      //     id: props.character.id,
      //     name: props.character.name,
      //     description: props.character.description || null,
      //     thumbnail: props.character.thumbnail,
      //   }
      // );

      const users = await setDoc(doc(database, "users", userId), {
        userId: userId,
        characters: [
          {
            id: props.character.id,
            name: props.character.name,
            description: props.character.description || null,
            thumbnail: props.character.thumbnail,
          },
        ],
      });

      console.log("setDoc:", users);
    } catch (e) {
      console.log("Error setDoc: ", e);
    }
  }

  return (
    <Styled.Wrapper>
      <Styled.Image variant="top" src={props.thumbnail} alt={props.name} />
      <Styled.Content>
        <Styled.Title>{props.name}</Styled.Title>
        <Styled.Description>{props.description}</Styled.Description>
        <Styled.SaveButton
          onClick={() => {
            saveFavoriteCharacter();
          }}
        >
          Go somewhere
        </Styled.SaveButton>
      </Styled.Content>
    </Styled.Wrapper>
  );
};
