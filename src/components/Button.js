import styled from "styled-components";

const Btn = styled.div`
  background-color: var(--inpt-bg);
  border-radius: 2rem;
  border: none;
  color: var(--font);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 4rem;
  font-size: 1.8rem;
  font-family: "Bebas Neue", cursive;
	
  :hover {
    cursor: pointer;
		background-color: var(--inpt-font);
		color: var(--bg-color);
  }
`;

function Button() {
  return <Btn>ENVIAR</Btn>;
}

export default Button;
