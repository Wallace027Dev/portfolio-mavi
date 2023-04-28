import styled from "styled-components";

const Foot = styled.footer`
  .container {
    margin-top: 8rem;
    background-color: var(--inpt-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12rem;
    p {
      color: var(--inpt-font);
      font-size: 1.2rem;
			span {
				visibility: hidden;
			}
      a {
        text-decoration: none;
				color: var(--font);
      }
    }
  }
`;

function Footer() {
  return (
    <Foot>
      <div className="container">
        <p>
          Feito com 🤍 por<span>..</span>
          <a href="https://wallacevieira.vercel.app/">Wallace</a>
        </p>
      </div>
    </Foot>
  );
}

export default Footer;
