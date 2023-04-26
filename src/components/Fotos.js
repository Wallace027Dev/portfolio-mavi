import styled from "styled-components";

const FotoDiv = styled.div`
  .container {
    overflow: hidden;
  }
  img {
    width: 620px;
    height: 360px;
    object-fit: cover;
  }
`;

function Fotos(props) {
  return (
    <FotoDiv className="container">
      <img src={props.foto} alt="Isso é uma foto" />
    </FotoDiv>
  );
}

export default Fotos;
