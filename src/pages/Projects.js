import styled from "styled-components";
/* 
import crianca from "../assets/crianca.jpeg";
import henrry from "../assets/henrry.jpeg";
import ImageLeft from "../components/ImageLeft";
import ImageRight from "../components/ImageRight";
 */
const Main = styled.section`
  margin-top: 18rem;
	h1 {
		font-size: 10rem;
		color: white;
	}

  /* Para telas menores que 1440px (tablets e celulares) */
  @media screen and (max-width: 1440px) {
    margin-top: 6rem;
  }

  /* Para telas menores que 768px (celulares em modo paisagem) */
  @media screen and (max-width: 768px) {
    margin-top: 4rem;
  }
`;

function Projects() {
  return (
    <Main>
      <title>My Projects</title>
      <div>
        <h1>Um olá mundo bem grandão<br/> pra tampar o vazio</h1>
      </div>
    </Main>
  );
}

export default Projects;
