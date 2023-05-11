import styled from "styled-components";
/* 
import crianca from "../assets/crianca.jpeg";
import henrry from "../assets/henrry.jpeg";
import ImageLeft from "../components/ImageLeft";
import ImageRight from "../components/ImageRight";
 */
const Main = styled.section`
  margin-top: 12rem;
  height: 55vh;
  h1 {
    font-size: 8rem;
    color: var(--inpt-font);
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
    <Main>
      <title>My Projects</title>
      <div>
        <h1 className="pulsando">In working...</h1>
      </div>
    </Main>
  );
}

export default Projects;
