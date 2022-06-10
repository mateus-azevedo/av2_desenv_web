import React, { useContext } from "react";
import * as Styled from "./styles";

import { FirebaseConfig } from "../../services";
import { getFirestore, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { AuthGoogle } from "../../context";

export default (props) => {
  const userAuthenticaded = useContext(AuthGoogle.Context);

  async function saveFavoriteCharacter(id, name, description, thumbnail) {
    const userId = JSON.parse(userAuthenticaded.user).uid;
    const db = getFirestore(FirebaseConfig);

    const userCharacterRef = doc(db, userId, "object");

    try {
      const res = await updateDoc(userCharacterRef, {
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

  return (
    <Styled.Wrapper>
      <Styled.Image variant="top" src={props.thumbnail} alt={props.name} />
      <Styled.Content>
        <Styled.Title>{props.name}</Styled.Title>
        <Styled.Description>{props.description}</Styled.Description>
        <Styled.SaveButton
          onClick={() => {
            saveFavoriteCharacter(
              props.character.id,
              props.character.name,
              props.character.description,
              props.character.thumbnail
            );
          }}
        >
          Go somewhere
        </Styled.SaveButton>
      </Styled.Content>
    </Styled.Wrapper>
  );
};
