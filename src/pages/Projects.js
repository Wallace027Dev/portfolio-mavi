import styled from "styled-components";
/* 
import crianca from "../assets/crianca.jpeg";
import henrry from "../assets/henrry.jpeg";
import ImageLeft from "../components/ImageLeft";
import ImageRight from "../components/ImageRight";
 */
const Main = styled.section`
  margin-top: 12rem;
  height: 40vh;
  h1 {
    font-size: 10rem;
    color: var(--inpt-font);
  }

  /* Para telas menores que 1440px (tablets e celulares) */
  @media screen and (max-width: 1440px) {
		height: 30vh;
    h1 {
      font-size: 8rem;
    }
  }

  /* Para telas menores que 768px (celulares em modo paisagem) */
  @media screen and (max-width: 768px) {
		h1 {
      font-size: 4rem;
    }
  }
`;

function Projects() {
  return (
    <Main>
      <title>My Projects</title>
      <div>
        <h1>In working...</h1>
      </div>
    </Main>
  );
}

export default Projects;
