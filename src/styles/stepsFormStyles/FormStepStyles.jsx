import styled from 'styled-components'

export const FormStepStyles = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
`;

export const SectionInputs = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  justify-items: center;
  align-items: center;

  p {
    font-size: x-large;
    font-weight: bold;
    text-align: center;
  }

  input {
    text-align: center;
    width: 95%;
    min-width: 200px;
    height: 4em;
    margin: 1em;
    border-radius: 1em;
    background-color: #82dfa2;
    text-align: center;
    font-size: larger;
    font-weight: bolder;
    color: white;
    border: 1px solid white;
  }
`;

export const ButtonNextStep = styled.button`
  background-color: #369465;
  border: none;
  padding: 1em;
  border-radius: 1em;
  margin: 1em;
  height: min-content;
  width: min-content;
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
  color: white;
  :hover {
    transform: scale(1.2);
  }
`
