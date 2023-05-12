import styled from "styled-components";

const Main = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 12rem;

  img,
  .imageDesc {
    opacity: 0;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  img {
    width: 35vw;
    animation-name: fade-in-right;
  }

  .imageDesc {
    width: 35vw;
    margin-right: 2.5%;

    animation-name: fade-in-left;
  }

  h1 {
    font-size: 3.5rem;
    color: var(--font);
  }
  p {
    font-size: 2.5rem;
    color: var(--inpt-font);
    font-family: 'Montserrat', sans-serif;
  }

  /* Para telas menores que 1440px (tablets e celulares) */
  @media screen and (max-width: 1440px) {
    margin-bottom: 14rem;
    h1 {
    font-size: 3rem;
  }
  p {
    font-size: 2rem;
  }
  }

  /* Para telas menores que 768px (celulares em modo paisagem) */
  @media screen and (max-width: 768px) {
		margin-bottom: 6rem;
    img {
      width: 40vw;
    }
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

function ImageRight(props) {
  return (
    <Main>
      <div className="imageDesc">
        <h1>{props.alt}</h1>
        <p>
          {props.desc} <br />
          Material usado: {props.material} <br />
          Feita em: {props.date} <br />
          Tamanho: {props.measure}
        </p>
      </div>
      <div>
        <img src={props.foto} alt={props.alt} />
      </div>
    </Main>
  );
}

export default ImageRight;
