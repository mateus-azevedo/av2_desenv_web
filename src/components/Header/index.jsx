import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthGoogle } from "../../context";
import * as Styled from "./styles";

export default () => {
  const { signInWithGoogle, signOut, signed } = useContext(AuthGoogle.Context);

  const handleLoginFromGoogle = async () => {
    await signInWithGoogle();
  };

  const handleLogoutFromGoogle = async () => {
    await signOut();
  };

  if (signed) {
    return (
      <Styled.Wrapper>
        <Styled.WrapperContent>
          <Styled.WrapperLogo>
            <Styled.UniLogo />
            <Styled.MarvelLogo />
          </Styled.WrapperLogo>

          <Styled.WrapperRight>
            <Styled.Navbar>
              <Styled.LinkRouter to="/">
                <Styled.NavbarItem>HOME</Styled.NavbarItem>
              </Styled.LinkRouter>
              <Styled.LinkRouter to="/myfavorite">
                <Styled.NavbarItem>USUÁRIO</Styled.NavbarItem>
              </Styled.LinkRouter>
            </Styled.Navbar>

            <Styled.LoginButton onClick={() => handleLogoutFromGoogle()}>
              LOGOUT
            </Styled.LoginButton>
          </Styled.WrapperRight>
        </Styled.WrapperContent>
      </Styled.Wrapper>
    );
  } else {
    return (
      <Styled.Wrapper>
        <Styled.WrapperContent>
          <Styled.WrapperLogo>
            <Styled.UniLogo />
            <Styled.MarvelLogo />
          </Styled.WrapperLogo>

          <Styled.WrapperRight>
            <Styled.LoginButton onClick={() => handleLoginFromGoogle()}>
              LOGIN
            </Styled.LoginButton>
          </Styled.WrapperRight>
        </Styled.WrapperContent>
      </Styled.Wrapper>
    );
  }
};
