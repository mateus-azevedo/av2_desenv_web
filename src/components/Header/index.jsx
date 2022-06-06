import React from "react";
import * as Styled from "./styles";

export default () => {
  return (
    <Styled.Wrapper>
      <Styled.WrapperLogo>
        <Styled.UniLogo />
        <Styled.MarvelLogo />
      </Styled.WrapperLogo>

      <Styled.WrapperRight>
        <Styled.Navbar>
          <Styled.NavbarItem>HOME</Styled.NavbarItem>
          <Styled.NavbarItem>USUÁRIO</Styled.NavbarItem>
        </Styled.Navbar>

        <Styled.LoginButton
          onClick={() => {
            console.log("Login Button");
          }}
        >
          LOGIN
        </Styled.LoginButton>
      </Styled.WrapperRight>
    </Styled.Wrapper>
  );
};
