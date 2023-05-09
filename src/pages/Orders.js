import styled from "styled-components";

import crianca from "../assets/crianca.jpeg";
import henrry from "../assets/henrry.jpeg";
import ImageLeft from "../components/ImageLeft";
import ImageRight from "../components/ImageRight";

const Main = styled.section`
  margin-top: 18rem;

  /* Para telas menores que 1440px (tablets e celulares) */
  @media screen and (max-width: 1440px) {
    margin-top: 5rem;
  }

  /* Para telas menores que 768px (celulares em modo paisagem) */
  @media screen and (max-width: 768px) {
    margin-top: 12rem;
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
          measure="40L x 50A (cm)"
        />

        <ImageRight
          foto={henrry}
          alt="Pintura de Henrry"
          material="Tinta Acrílica e Marcador"
          date="mar/2023"
          measure="30L x 60A (cm)"
        />
        <ImageLeft
          foto={crianca}
          alt="Pintura de Amanda"
          material="Tinta Acrílica e Marcador"
          date="jan/2023"
          measure="40L x 50A (cm)"
        />

        <ImageRight
          foto={henrry}
          alt="Pintura de Henrry"
          material="Tinta Acrílica e Marcador"
          date="mar/2023"
          measure="30L x 60A (cm)"
        />
      </div>
    </Main>
  );
}

export default Orders;
