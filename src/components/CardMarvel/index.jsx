import React from "react";
import * as Styled from "./styles";

import { FirebaseConfig } from "../../services";
import {
  addDoc,
  getFirestore,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";

const database = getFirestore(FirebaseConfig);
const userCollectionRef = collection(database, "characters");

export default (props) => {
  async function saveFavoriteCharacter() {
    try {
      // const character = await addDoc(userCollectionRef, {
      //   id: props.character.id || null,
      //   name: props.character.name || null,
      //   description: props.character.description || null,
      //   thumbnail: props.character.thumbnail || null,
      // });

      // const character = await userCollectionRef.doc(props.character.id).set({
      //   id: props.character.id || null,
      //   name: props.character.name || null,
      //   description: props.character.description || null,
      //   thumbnail: props.character.thumbnail || null,
      // });

      // const character = await setDoc(
      //   doc(database, "characters", props.character.id),
      //   {
      //     id: props.character.id || null,
      //     name: props.character.name || null,
      //     description: props.character.description || null,
      //     thumbnail: props.character.thumbnail || null,
      //   }
      // );

      // const character = await database
      //   .collection("characters")
      //   .doc(props.character.id)
      //   .set({
      //     id: props.character.id || null,
      //     name: props.character.name || null,
      //     description: props.character.description || null,
      //     thumbnail: props.character.thumbnail || null,
      //   });

      const character = await setDoc(
        doc(database, "characters", props.character.id.toString()),
        {
          id: props.character.id,
          name: props.character.name,
          description: props.character.description || null,
          thumbnail: props.character.thumbnail,
        }
      );

      console.log(character);
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
