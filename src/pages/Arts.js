import styled from "styled-components";

import tenis from "../assets/tenis.png";
import panificadora from "../assets/panificadora.png";
import bairro from "../assets/bairro.jpeg";
import feira from "../assets/bairro.jpeg";
import maviBlue from "../assets/mavi-blue.jpeg";
import maviOrange from "../assets/mavi-orange.jpeg";
import ImageLeft from "../components/ImageLeft";
import ImageRight from "../components/ImageRight";

const Main = styled.section`
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

function Arts() {
  return (
    <Main>
      <title>Artes</title>
      <div>
        <ImageLeft
          foto={feira}
          alt="Dia de Feira"
          material="Tinta Acrílica e Marcador"
          date="jul/2022"
          measure="50x70 (cm)"
        />
        <ImageRight
          foto={bairro}
          alt="Vista da Janela"
          material="Tinta Acrílica e Marcador"
          date="fev/2022"
          measure="30x60 (cm)"
        />
        <ImageLeft
          foto={tenis}
          alt="Tênis no Fio"
          material="Tinta Acrílica e Marcador"
          date="mar/2022"
          measure="40x40 (cm)"
        />
        <ImageRight
          foto={panificadora}
          alt="Vista da Janela"
          material="Tinta Acrílica e Marcador"
          date="fev/2022"
          measure="40x60 (cm)"
        />
        <ImageLeft
          foto={maviBlue}
          alt="Velha Infância I"
          material="Tinta Acrílica e Marcador"
          date="abril/2023"
          measure="30x60 (cm)"
        />
        <ImageRight
          foto={maviOrange}
          alt="Velha Infância II"
          material="Tinta Acrílica e Marcador"
          date="abril/2023"
          measure="30x60 (cm)"
        />
      </div>
    </Main>
  );
}

export default Arts;
