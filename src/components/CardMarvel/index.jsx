import React, { useContext } from "react";
import toast from "react-hot-toast";
import * as Styled from "./styles";

import { Firestore } from "../../services";
import { AuthGoogle } from "../../context";

export default (props) => {
  const { user } = useContext(AuthGoogle.Context);
  const userId = JSON.parse(user).uid;

  if (!props.remove) {
    // console.log("props.character:", props.character);
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
              toast.success("O personagem foi adicionado aos favoritos", {
                duration: 2000,
                style: {
                  color: "white",
                  backgroundColor: "#1e8c45",
                  marginTop: 50,
                  fontWeight: 700,
                  fontSize: 18,
                },
              });
            }}
          >
            Add Favorite
          </Styled.SaveButton>
        </Styled.Content>
      </Styled.Wrapper>
    );
  } else {
    // console.log("props.character:", props.character);
    return (
      <Styled.Wrapper>
        <Styled.Image variant="top" src={props.thumbnail} alt={props.name} />
        <Styled.Content>
          <Styled.Title>{props.name}</Styled.Title>
          <Styled.Description>{props.description}</Styled.Description>
          <Styled.SaveButton
            onClick={() => {
              Firestore.deleteFavoriteCharacter(
                userId,
                props.character.id,
                props.character.name,
                props.character.description,
                props.character.thumbnail
              );
              toast.error("O personagem foi removido dos favoritos", {
                duration: 2000,
                style: {
                  color: "white",
                  backgroundColor: "#900A22",
                  marginTop: 50,
                  fontWeight: 700,
                  fontSize: 18,
                },
              });
            }}
          >
            Remove Favorite
          </Styled.SaveButton>
        </Styled.Content>
      </Styled.Wrapper>
    );
  }
};
