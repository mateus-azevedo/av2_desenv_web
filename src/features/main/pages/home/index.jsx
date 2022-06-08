import React from "react";
import * as Styled from "./styles";

import { CardMarvel, WrapperPage } from "../../../../components";
// import { WrapperPage } from "@components";

export default (props) => {
  const { characters } = props;

  return (
    <WrapperPage>
      <Styled.Title>Hello World</Styled.Title>

      <Styled.CardList>
        {characters.map((character) => {
          if (character.description) {
            return (
              <CardMarvel
                key={character.id}
                thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                name={character.name}
                description={character.description}
              />
            );
          }
        })}
      </Styled.CardList>
    </WrapperPage>
  );
};
