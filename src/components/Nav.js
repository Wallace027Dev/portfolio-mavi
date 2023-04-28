import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigator = styled.nav`
  div {
    margin-top: 7rem;
  }
  a,
  h1 {
    color: var(--font);
  }
  .navigation {
    position: absolute;
    left: 2rem;
    top: 0;
    a {
      display: inline-block;
      margin-right: 2rem;
      text-decoration: none;
      font-size: 2.5rem;
    }
  }
  .user-title {
    position: absolute;
    top: 2%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
  }

  /* Para telas menores que 768px (celulares em modo paisagem) */
  @media screen and (max-width: 768px) {
    .user-title {
      margin-top: 14rem;
      h1 {
        font-size: 3.5rem;
      }
    }
    .navigation {
      visibility: hidden;
    }
  }
`;

function Nav() {
  return (
    <>
      <Navigator>
        <div className="navigation">
          <Link to="/">WORK</Link>
          <Link to="/about">ABOUT & CONTACT</Link>
        </div>
        <div className="user-title">
          <h1>MARIA FRANÇA</h1>
        </div>
      </Navigator>
    </>
  );
}

export default Nav;
