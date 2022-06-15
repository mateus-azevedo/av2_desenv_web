import React from "react";
import { WrapperPage, CardMarvel } from "../../../../components";
import * as Styled from "./styles";

export default (props) => {
  const { characters } = props;

  return (
    <WrapperPage>
      <Styled.Title>Seus Favoritos</Styled.Title>
      <Styled.CardList>
        {characters?.map((character) => {
          return (
            <CardMarvel
              key={character.id}
              id={character.id}
              thumbnail={`${character.thumbnail.path}/standard_amazing.${character.thumbnail.extension}`}
              name={character.name}
              description={character.description}
              character={character}
              remove
            />
          );
        })}
      </Styled.CardList>
    </WrapperPage>
  );
};
