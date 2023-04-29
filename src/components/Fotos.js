import styled from "styled-components";

const FotoDiv = styled.div`
  position: relative;
  margin: 0 1rem;
  .container {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 80vh;
    :hover {
      cursor: pointer;
      .desc-arte {
        opacity: 1;
        transition: opacity 0.75s ease;
        color: white;
      }
    }
  }

  img {
    width: 100%;
    object-fit: cover;
    :hover {
      filter: brightness(25%);
    }
  }
  .desc-arte {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  /* Para telas menores que 768px (celulares em modo paisagem) */
  @media screen and (max-width: 768px) {
		.container {
    height: 20vh;
		}
    img {
      height: 20vh;
    }
  }
`;

function Fotos(props) {
  return (
    <FotoDiv>
      <div className="container">
        <img src={props.foto} alt={props.alt} />
        <div className="desc-arte">
          <h1>{props.alt}</h1>
        </div>
      </div>
    </FotoDiv>
  );
}

export default Fotos;
