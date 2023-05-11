import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigator = styled.nav`
  .navigation {
		background-color: var(--inpt-bg);
		height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5rem;
		color: var(--font);
  }

  /* Para telas menores que 768px (celulares em modo paisagem) */
  @media screen and (max-width: 768px) {
    div {
      margin-top: 0rem;
    }
  }
`;

function Nav() {
  return (
    <>
      <Navigator>
        <div className="navigation">
          <h1>MARIA FRANÇA</h1>
        </div>
      </Navigator>
    </>
  );
}

export default Nav;
