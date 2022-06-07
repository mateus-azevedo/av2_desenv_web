import styled from "styled-components";
import logo_unicarioca from "../../assets/logo_unicarioca.png";
import logo_marvel from "../../assets/logo_marvel.svg";

export const Wrapper = styled.nav`
  background-color: red;
  padding-top: 3px;
  padding-bottom: 5px;
`;

export const WrapperContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
`;

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: column;

  width: 60px;
`;

export const UniLogo = styled.img.attrs({ src: logo_unicarioca })`
  margin-bottom: 5px;
`;

export const MarvelLogo = styled.img.attrs({ src: logo_marvel })``;

export const WrapperRight = styled.div`
  display: flex;
  align-items: center;
`;

export const Navbar = styled.ul`
  display: flex;
  /* align-self: center; */
  list-style-type: none;
`;

export const NavbarItem = styled.li`
  color: white;
  font-weight: bold;
  font-size: 20px;

  cursor: pointer;

  margin-right: 10px;
  padding: 5px;
  border: 3px solid #fff;
  border-radius: 30px;

  &:hover {
    transition: 0.5s;
    border: 3px solid red;
    color: red;
    background-color: white;
  }
`;

export const LoginButton = styled.button`
  background-color: white;
  color: red;
  font-size: 20px;

  padding: 10px;

  border: 3px solid;
  border-radius: 30px;

  cursor: pointer;

  &:hover {
    transition: 0.5s;
    opacity: 0.7;
  }
`;
