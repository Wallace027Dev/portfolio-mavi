import styled from "styled-components";

import bairro from "../assets/bairro.jpeg";
import panificadora from "../assets/panificadora.jpeg";
import henrry from "../assets/henrry.jpeg";
import romeu from "../assets/romeu.jpeg";
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
      <title>My Arts</title>
      <div>
        <ImageLeft
          foto={panificadora}
          alt="Pintura da Padaria do Ataíde"
          material="Tinta Acrílica e Marcador"
          date="mai/2022"
          measure="falta (cm)"
        />
        <ImageRight
          foto={henrry}
          alt="Pintura de Henrry"
          material="Tinta Acrílica e Marcador"
          date="mar/2023"
          measure="falta (cm)"
        />
        <ImageLeft
          foto={bairro}
          alt="Pintura Tênis no Fio"
          material="Tinta Acrílica e Marcador"
          date="mar/2022"
          measure="falta (cm)"
        />
        <ImageRight
          foto={panificadora}
          alt="Pintura Vista da Janela"
          material="Tinta Acrílica e Marcador"
          date="fev/2022"
          measure="falta (cm)"
        />
        <ImageLeft
          foto={maviBlue}
          alt="Pintura Tênis no Fio"
          material="Tinta Acrílica e Marcador"
          date="mar/2022"
          measure="falta (cm)"
        />
        <ImageRight
          foto={maviOrange}
          alt="Pintura Vista da Janela"
          material="Tinta Acrílica e Marcador"
          date="fev/2022"
          measure="falta (cm)"
        />
        <ImageLeft
          foto={romeu}
          alt="Pintura Tênis no Fio"
          material="Tinta Acrílica e Marcador"
          date="mar/2022"
          measure="falta (cm)"
        />
        <ImageRight
          foto={maviOrange}
          alt="Pintura Vista da Janela"
          material="Tinta Acrílica e Marcador"
          date="fev/2022"
          measure="falta (cm)"
        />
      </div>
    </Main>
  );
}

export default Arts;
