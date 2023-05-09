import styled from "styled-components";

import crianca from "../assets/crianca.jpeg";
import henrry from "../assets/henrry.jpeg";
import ImageLeft from "../components/ImageLeft";
import ImageRight from "../components/ImageRight";

const Main = styled.section`
  margin-top: 18rem;

  /* Para telas menores que 1440px (tablets e celulares) */
  @media screen and (max-width: 1440px) {
    margin-top: 6rem;
  }

  /* Para telas menores que 768px (celulares em modo paisagem) */
  @media screen and (max-width: 768px) {
    margin-top: 4rem;
  }
`;

function Orders() {
  return (
    <Main>
      <title>My Orders</title>
      <div>
        <ImageLeft
          foto={crianca}
          alt="Pintura de Amanda"
          material="Tinta Acrílica e Marcador"
          date="jan/2023"
          measure="40x50 (cm)"
        />

        <ImageRight
          foto={henrry}
          alt="Pintura de Henrry"
          material="Tinta Acrílica e Marcador"
          date="mar/2023"
          measure="30x60 (cm)"
        />
        <ImageLeft
          foto={crianca}
          alt="Pintura de Amanda"
          material="Tinta Acrílica e Marcador"
          date="jan/2023"
          measure="40x50 (cm)"
        />

        <ImageRight
          foto={henrry}
          alt="Pintura de Henrry"
          material="Tinta Acrílica e Marcador"
          date="mar/2023"
          measure="30x60 (cm)"
        />
      </div>
    </Main>
  );
}

export default Orders;
