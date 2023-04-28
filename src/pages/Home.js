import styled from "styled-components";
import Fotos from "../components/Fotos";

import bairro from "../images/bairro.jpeg";
import crianca from "../images/crianca.jpeg";
import feira from "../images/feira.jpeg";
//import henri from "../images/henri.jpeg";
//import panificadora from "../images/panificadora.jpeg";

const Main = styled.main`
  margin-top: 18rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  /* Para telas menores que 1440px (tablets e celulares) */
  @media screen and (max-width: 1440px) {
    margin: 150px 6rem;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  /* Para telas menores que 768px (celulares em modo paisagem) */
  @media screen and (max-width: 768px) {
    margin: 150px 3rem;
    grid-template-columns: 1fr;
    grid-column-gap: 1;
    grid-row-gap: 1rem;
  }
`;
function Home() {
  return (
    <Main>
      <Fotos foto={bairro} alt="Paisagens" />
      <Fotos foto={crianca} alt="Realismo" />
      <Fotos foto={feira} alt="Pinturas em Tela" />
    </Main>
  );
}

export default Home;
