import styled from "styled-components";

import bairro from "../images/bairro.jpeg";
import ImageLeft from "../components/ImageLeft";
import ImageRight from "../components/ImageRight";
import panificadora from "../images/panificadora.jpeg";

const Main = styled.section`
  margin-top: 18rem;

  /* Para telas menores que 1440px (tablets e celulares) */
  @media screen and (max-width: 1440px) {
    margin-top: 20rem;
  }

  /* Para telas menores que 768px (celulares em modo paisagem) */
  @media screen and (max-width: 768px) {
		margin-top: 12rem;
  }
`;

function Landscapes() {
  return (
    <Main>
      <ImageLeft foto={bairro} alt="Bairro Ataíde" />
      <ImageRight foto={panificadora} alt="Bairro Ataíde" />
    </Main>
  );
}

export default Landscapes;
