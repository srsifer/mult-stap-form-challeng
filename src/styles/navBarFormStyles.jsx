import styled from "styled-components";

export const NavbarFormStyles = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center;
  min-width: 60%;

  div {
    border: 1px solid black;
    width: 40%;
    margin: 4px;
    border-radius: 15px;
    max-height: 10px;
    padding: 5px;
    max-width: 60%;
  }

  button {
    border: none;
    background-color: white;
  }

  svg {
    font-weight: bolder;
    font-size: xx-large;
  }
`