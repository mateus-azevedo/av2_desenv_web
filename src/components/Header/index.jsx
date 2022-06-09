import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
import { AuthGoogle } from "../../context";
import * as Styled from "./styles";

export default () => {
  const {
    signInWithGoogle,
    // signed
  } = useContext(AuthGoogle.Context);

  const handleLoginFromGoogle = async () => {
    await signInWithGoogle();
  };

  return (
    <Styled.Wrapper>
      <Styled.WrapperContent>
        <Styled.WrapperLogo>
          <Styled.UniLogo />
          <Styled.MarvelLogo />
        </Styled.WrapperLogo>

        <Styled.WrapperRight>
          <Styled.Navbar>
            <Styled.NavbarItem>HOME</Styled.NavbarItem>
            <Styled.NavbarItem>USUÁRIO</Styled.NavbarItem>
          </Styled.Navbar>

          <Styled.LoginButton onClick={() => handleLoginFromGoogle()}>
            LOGIN
          </Styled.LoginButton>
        </Styled.WrapperRight>
      </Styled.WrapperContent>
    </Styled.Wrapper>
  );
};
