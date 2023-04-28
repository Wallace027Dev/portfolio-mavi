import styled from "styled-components";

import bairro from "../images/bairro.jpeg";
import ImageLeft from "../components/ImageLeft";
import ImageRight from "../components/ImageRight";
import panificadora from "../images/panificadora.jpeg";

const Main = styled.section`
  margin-top: 18rem;
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
