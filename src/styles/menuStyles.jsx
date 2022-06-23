
import styled from 'styled-components'

export const AsideMenuStyles = styled.aside`
  background-color: #2a2b2cca;
  border-radius: 0 1em 1em 0;
  height: 80vh;
  margin-right: auto;
  width: 30vw;
  left: 0;
  min-width: fit-content;
  min-height: fit-content;
  max-height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  transform: translateX(${({showMenu})=> showMenu ? '-100vw': '0'});


  button {
    background-color: #f30606b9;
    border: none;
    padding: 1em;
    border-radius: 1em;
    margin: 1em;
    height: 10%;
    min-height: fit-content;
    width: 80%;
    min-width: fit-content;
    text-align: center;
    font-size: medium;
    font-weight: bolder;
    color: white;

    :hover {
      transform: scale(1.2);
    }
  }
`;
