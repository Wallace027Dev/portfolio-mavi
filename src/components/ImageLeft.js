import styled from "styled-components";

const Main = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  margin-bottom: 12rem;

  img,
  .imageDesc {
    opacity: 0;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  img {
    width: 25vw;
    animation-name: fade-in-left;
  }

  .imageDesc {
    width: 25vw;
    margin-left: 2.5%;

    animation-name: fade-in-right;
  }

  h1 {
    font-size: 2.5rem;
    color: var(--font);
  }
  p {
    font-size: 1.5rem;
    color: var(--inpt-font);
  }

  /* Para telas menores que 1440px (tablets e celulares) */
  @media screen and (max-width: 1440px) {
    margin-bottom: 14rem;
  }

  /* Para telas menores que 768px (celulares em modo paisagem) */
  @media screen and (max-width: 768px) {
    img {
      width: 40vw;
    }
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;

function ImageLeft(props) {
  return (
    <Main>
      <div>
        <img src={props.foto} alt={props.alt} />
      </div>
      <div className="imageDesc">
        <h1>{props.alt}</h1>
        <p>
          {props.desc} <br />
          Material usado: {props.material} <br />
          Feita em: {props.date} <br />
          Tamanho: {props.measure}
        </p>
      </div>
    </Main>
  );
}

export default ImageLeft;
