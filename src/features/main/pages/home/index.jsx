import React from "react";
import * as Styled from "./styles";

import { CardMarvel, WrapperPage } from "../../../../components";
// import { WrapperPage } from "@components";

export default () => {
  return (
    <WrapperPage>
      <Styled.Title>Hello World</Styled.Title>
      <CardMarvel />
    </WrapperPage>
  );
};
