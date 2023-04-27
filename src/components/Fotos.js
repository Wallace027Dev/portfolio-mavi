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
