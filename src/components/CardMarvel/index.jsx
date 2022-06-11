import React, { useContext } from "react";
import * as Styled from "./styles";

import { Firestore } from "../../services";
import { AuthGoogle } from "../../context";

export default (props) => {
  const { user } = useContext(AuthGoogle.Context);
  const userId = JSON.parse(user).uid;

  console.log(!props.remove);

  if (!props.remove) {
    return (
      <Styled.Wrapper>
        <Styled.Image variant="top" src={props.thumbnail} alt={props.name} />
        <Styled.Content>
          <Styled.Title>{props.name}</Styled.Title>
          <Styled.Description>{props.description}</Styled.Description>
          <Styled.SaveButton
            onClick={() => {
              Firestore.saveFavoriteCharacter(
                userId,
                props.character.id,
                props.character.name,
                props.character.description,
                props.character.thumbnail
              );
            }}
          >
            Add Favorite
          </Styled.SaveButton>
        </Styled.Content>
      </Styled.Wrapper>
    );
  } else {
    return (
      <Styled.Wrapper>
        <Styled.Image variant="top" src={props.thumbnail} alt={props.name} />
        <Styled.Content>
          <Styled.Title>{props.name}</Styled.Title>
          <Styled.Description>{props.description}</Styled.Description>
          <Styled.SaveButton
            onClick={() => {
              Firestore.saveFavoriteCharacter(
                userId,
                props.character.id,
                props.character.name,
                props.character.description,
                props.character.thumbnail
              );
            }}
          >
            Remove Favorite
          </Styled.SaveButton>
        </Styled.Content>
      </Styled.Wrapper>
    );
  }
};
