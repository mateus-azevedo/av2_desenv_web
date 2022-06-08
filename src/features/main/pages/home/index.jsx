import React from "react";
import * as Styled from "./styles";

import { CardMarvel, WrapperPage } from "../../../../components";
import { useCallback } from "react";
import { api } from "../../../../services";
// import { WrapperPage } from "@components";

export default (props) => {
  const { characters, updateCharacters } = props;

  const handleMore = useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await api.get("characters", {
        params: {
          offset,
        },
      });

      updateCharacters([...characters, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [characters]);

  return (
    <WrapperPage>
      <Styled.Title>Hello World</Styled.Title>

      <Styled.CardList>
        {characters.map((character) => {
          // if (character.description) {
          return (
            <CardMarvel
              key={character.id}
              thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              name={character.name}
              description={character.description}
            />
          );
          // }
        })}
      </Styled.CardList>
      <Styled.Button onClick={() => handleMore()}>Carregar</Styled.Button>
    </WrapperPage>
  );
};
