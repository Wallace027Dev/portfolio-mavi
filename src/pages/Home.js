import styled from "styled-components";
import Fotos from "../components/Fotos";

import bairro from "../images/bairro.jpeg";
import crianca from "../images/crianca.jpeg";
import feira from "../images/feira.jpeg";
import henri from "../images/henri.jpeg";
import panificadora from "../images/panificadora.jpeg";

const Main = styled.main`
  margin: 150px 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
`;
function Home() {
  return (
    <Main>
      <Fotos foto={bairro} alt='Bairro Ataíde' />
      <Fotos foto={crianca} alt='Bairro Ataíde' />
      <Fotos foto={feira} alt='Bairro Ataíde' />
      <Fotos foto={henri} alt='Bairro Ataíde' />
      <Fotos foto={panificadora} alt='Bairro Ataíde' />
    </Main>
  );
}

export default Home;
