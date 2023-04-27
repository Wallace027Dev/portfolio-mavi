import styled from "styled-components";

const FotoDiv = styled.div`
  position: relative;
  .container {
    overflow: hidden;
  }
	:hover {
		.desc-arte {
			opacity: 1;
			transition: opacity 0.75s ease;
			color: white;
		}
	}
  img {
    width: 620px;
    height: 360px;
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
    <FotoDiv className="container">
      <img src={props.foto} alt={props.alt} />
      <div className="desc-arte">
        <h1>{props.alt}</h1>
        <h2>2023</h2>
      </div>
    </FotoDiv>
  );
}

export default Fotos;
