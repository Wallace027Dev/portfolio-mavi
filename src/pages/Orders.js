import styled from "styled-components";

import crianca from "../assets/crianca.jpeg";
import henrry from "../assets/henrry.jpeg";
import romeu from "../assets/romeu.jpeg";

import ImageLeft from "../components/ImageLeft";
import ImageRight from "../components/ImageRight";

const Component = styled.section`
  margin-top: 8rem;

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
    <Component>
      <title>Encomendas</title>
      <div>
        <ImageLeft
          foto={crianca}
          alt="Amanda"
          material="Tinta Acrílica e Marcador"
          date="jan/2023"
          measure="40x50 (cm)"
        />

        <ImageRight
          foto={henrry}
          alt="Henrry"
          material="Tinta Acrílica e Marcador"
          date="mar/2023"
          measure="30x60 (cm)"
        />
                <ImageLeft
          foto={romeu}
          alt="Romeu"
          material="Tinta Acrílica e Marcador"
          date="dez/2022"
          measure="40x40 (cm)"
        />
      </div>
    </Component>
  );
}

export default Orders;
