import styled from "styled-components";
import logo_unicarioca from "../../assets/logo_unicarioca.png";
import logo_marvel from "../../assets/logo_marvel.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

export const WrapperLogo = styled.span`
  display: flex;
  flex-direction: column;
`;

export const UniLogo = styled.img.attrs({ src: logo_unicarioca })`
  margin-bottom: 5px;
`;

export const MarvelLogo = styled.img.attrs({ src: logo_marvel })``;

export const Navbar = styled.nav``;
