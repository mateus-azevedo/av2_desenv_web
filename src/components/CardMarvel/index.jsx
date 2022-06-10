import React from "react";
import * as Styled from "./styles";

import { FirebaseConfig } from "../../services";
import { addDoc, getFirestore, collection } from "firebase/firestore";

const database = getFirestore(FirebaseConfig);
const userCollectionRef = collection(database, "characters");

export default (props) => {
  async function saveFavoriteCharacter() {
    try {
      const character = await addDoc(userCollectionRef, {
        id: props.character.id || null,
        name: props.character.name || null,
        description: props.character.description || null,
        thumbnail: props.character.thumbnail || null,
      });

      console.log(character);
    } catch (e) {
      console.log("Error addDoc: ", e);
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
