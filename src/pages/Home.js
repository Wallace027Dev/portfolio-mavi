import styled from "styled-components";
import Fotos from "../components/Fotos";

import bairro from "../assets/bairro.jpeg";
import crianca from "../assets/crianca.jpeg";
import feira from "../assets/feira.jpeg";
import { Link } from "react-router-dom";
import About from "../components/About";
//import henri from "../assets/henri.jpeg";
//import panificadora from "../assets/panificadora.jpeg";

const Component = styled.section`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  opacity: 0;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-name: fade-in-down;

  /* Para telas menores que 1440px (tablets e celulares) */
  @media screen and (max-width: 1440px) {
    margin: 6rem 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  /* Para telas menores que 768px (celulares em modo paisagem) */
  @media screen and (max-width: 768px) {
    margin: 4rem 1rem;
    display: flex;
    flex-direction: column;
  }
`;
function Home() {
  return (
    <>
      <title>My Portfolio</title>
      <Component>
        <Link to="orders">
          <Fotos foto={crianca} alt="Página de Encomendas" />
        </Link>
        <Link to="arts">
          <Fotos foto={bairro} alt="Página de Obras Artísticas" />
        </Link>
        <Link to="projects">
          <Fotos foto={feira} alt="Página de Projetos" />
        </Link>
      </Component>
      <About />
    </>
  );
}

export default Home;
