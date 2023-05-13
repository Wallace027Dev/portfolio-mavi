import { Link } from "react-router-dom";
import styled from "styled-components";
/* 
import crianca from "../assets/crianca.jpeg";
import henrry from "../assets/henrry.jpeg";
import ImageLeft from "../components/ImageLeft";
import ImageRight from "../components/ImageRight";
 */
const Component = styled.section`
  margin-top: 12rem;
  height: 55vh;
  h1 {
    font-size: 8rem;
    color: var(--inpt-font);
  }
  h2 {
    text-decoration: none;
    color: var(--font);
          font-size: 2.5rem;

  }

  .pulsando {
    animation: pulse 2.5s infinite;
  }

  /* Para telas menores que 1440px (tablets e celulares) */
  @media screen and (max-width: 1440px) {
    h1 {
      font-size: 6rem;
    }
  }

  /* Para telas menores que 768px (celulares em modo paisagem) */
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

function Projects() {
  return (
    <Component>
      <title>Projetos</title>
      <div>
        <h1 className="pulsando">Em breve...</h1>
        <Link to="/">
          <h2>Voltar para janela prícipal</h2>
        </Link>
      </div>
    </Component>
  );
}

export default Projects;
