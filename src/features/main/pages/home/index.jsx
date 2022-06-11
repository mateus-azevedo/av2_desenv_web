import React, { useContext } from "react";
import * as Styled from "./styles";

import {
  ActivityIndicator,
  CardMarvel,
  WrapperPage,
} from "../../../../components";
// import { WrapperPage } from "@components";

import { AuthGoogle } from "../../../../context";

export default (props) => {
  const { signed, user } = useContext(AuthGoogle.Context);
  const userName = JSON.parse(user).displayName;
  const { characters } = props;

  if (signed) {
    return (
      <WrapperPage>
        <Styled.Title>Hello World, {userName}</Styled.Title>
        <Styled.CardList>
          {characters.map((character) => {
            return (
              <CardMarvel
                key={character.id}
                thumbnail={`${character.thumbnail.path}/standard_amazing.${character.thumbnail.extension}`}
                name={character.name}
                description={character.description}
                character={character}
              />
            );
          })}
        </Styled.CardList>
        <ActivityIndicator />
      </WrapperPage>
    );
  } else {
    return <h1>Faça Login</h1>;
  }
};
