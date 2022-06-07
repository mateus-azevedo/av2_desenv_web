import React from "react";
import * as Styled from "./styles";

export default (props) => {
  return (
    <Styled.Wrapper>
      <Styled.WrapperContent>{props.children}</Styled.WrapperContent>
    </Styled.Wrapper>
  );
};
