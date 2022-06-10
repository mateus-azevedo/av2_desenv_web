import React from "react";
import { WrapperPage, CardMarvel } from "../../../../components";
import * as Styled from "./styles";

export default (props) => {
  return (
    <WrapperPage>
      <Styled.CardList>
        {props.characters.map((character) => {
          return (
            <CardMarvel
              key={character.id}
              thumbnail={`${character.thumbnail.path}/standard_amazing.${character.thumbnail.extension}`}
              name={character.name}
              description={character.description}
            />
          );
        })}
      </Styled.CardList>
    </WrapperPage>
  );
};