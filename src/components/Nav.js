import styled from "styled-components";

const Navigator = styled.nav`
  div {
    margin-top: 6rem;
  }

  .navigation {
    position: absolute;
    left: 32px;
    top: 0;
    a {
      display: inline-block;
      margin-right: 10px;
      text-decoration: none;
      color: var(--font);
			font-size: 2rem;
    }
  }

  .user-title {
    position: absolute;
    top: 2%;
    left: 50%;
    transform: translate(-50%, -50%);
		font-size: 4rem;
  }
`;

function Nav() {
  return (
    <>
      <Navigator>
        <div className="navigation">
          <a href="/">WORK</a>
          <a href="/">CONTACT</a>
        </div>
        <div className="user-title">
          <h1>MARIA FRANÇA</h1>
        </div>
      </Navigator>
    </>
  );
}

export default Nav;
