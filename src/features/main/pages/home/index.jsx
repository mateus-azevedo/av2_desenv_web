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
  const { characters } = props;

  if (signed) {
    const userName = JSON.parse(user).displayName;

    return (
      <WrapperPage>
        <Styled.Title>
          Hello,
          {` ${userName}`}
        </Styled.Title>
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
    return (
      <WrapperPage>
        <h1>FALA O LOGIN</h1>
      </WrapperPage>
    );
  }
};
