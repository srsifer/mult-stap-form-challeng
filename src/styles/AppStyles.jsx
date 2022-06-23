import styled from 'styled-components'

export const HeaderApp = styled.header`
  text-align: center;
  margin: 1%;
  font-size: large;
  font-weight: bold;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  position: relative;
   z-index: 1;


  input {
    z-index: 1;
    position: absolute;
  }

  svg {
    font-size: xx-large;
    font-weight: bold;
    z-index: 1;
    position: absolute;
  }
`

export const BodyAppSection = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
`;

export const ClientListStyles = styled.ul`
  margin: 1em;
  list-style: none;
  border-radius: 1em;
  padding: 1em;
  width: 90%;
  max-width: max-content;
  left: auto;
  right: auto;
  background-color: #25bd82;

  li {
    border: 1px solid #00ff9d;
    margin: 1vw;
    text-align: center;
    font-size: 22px;
    font-weight: bolder;
    padding: 1vw;
    border-radius: 1em;
    :hover {
      transform: scale(1.1);
      box-shadow: #25bd82;
    }
    .info-slide:hover, .info-slide:active{
      transform: scale(1.1);
      box-shadow: #25bd82;
 }
  }
`
