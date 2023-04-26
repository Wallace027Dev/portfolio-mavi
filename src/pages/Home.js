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
      <Fotos foto={bairro} />
      <Fotos foto={crianca} />
      <Fotos foto={feira} />
      <Fotos foto={henri} />
      <Fotos foto={panificadora} />
    </Main>
  );
}

export default Home;
