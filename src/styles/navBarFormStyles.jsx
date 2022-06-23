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

  button {
    border: none;
    background-color: #61d09513;
    color: white;
    padding: 0%;
    :hover {
      transform: scale(1.2);
    }
  }
`

export const StepDivAnimation = styled.div`
    background-color: ${({step}) => step >= 1 ? '#369465;' : 'white'};
`
export const StepDivAnimation2 = styled.div`
    background-color: ${({step}) => step >= 2 ? '#369465;' : 'white'};
`
export const StepDivAnimation3 = styled.div`
    background-color: ${({step}) => step >= 3  ? '#369465;' : 'white'};
`
export const StepDivAnimation4 = styled.div`
    background-color: ${({step}) => step  >= 4 ? '#369465;' : 'white'};
`
