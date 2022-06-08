import React from "react";
import * as Styled from "./styles";

export default (props) => {
  return (
    <Styled.Wrapper>
      <Styled.Image variant="top" src={props.thumbnail} alt={props.name} />
      <Styled.Content>
        <Styled.Title>{props.name}</Styled.Title>
        <Styled.Description>{props.description}</Styled.Description>
        <Styled.SaveButton>Go somewhere</Styled.SaveButton>
      </Styled.Content>
    </Styled.Wrapper>
  );
};
