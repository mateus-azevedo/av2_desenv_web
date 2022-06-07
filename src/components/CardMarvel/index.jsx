import React from "react";
import * as Styled from "./styles";

export default () => {
  return (
    <Styled.Wrapper>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Styled.Content>
        <Styled.Title>Card Title</Styled.Title>
        <Styled.Description>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Styled.Description>
        <Styled.SaveButton>Go somewhere</Styled.SaveButton>
      </Styled.Content>
    </Styled.Wrapper>
  );
};
