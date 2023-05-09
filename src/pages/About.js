import styled from "styled-components";
import Button from "../components/Button";

const Main = styled.main`
margin-top: 4rem;
  opacity: 0;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-name: fade-in-down;

  .about-form {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;

    h2 {
      font-size: 2rem;
      color: var(--font);
    }
    h3 {
      font-size: 1.5rem;
      color: var(--inpt-font);
    }

    .form {
      form {
        margin-top: 14rem;
        display: block;
        text-align: left;
        label {
          font-size: 2rem;
          font-weight: 500;
          color: var(--font);
        }
        input,
        textarea {
          display: block;
          width: 60rem;
          background-color: var(--inpt-bg);
          border-radius: 0.3rem;
          border: none;
          margin: 1.2rem 0 3rem 0;
          ::placeholder {
            color: var(--inpt-font);
            font-family: "Bebas Neue", cursive;
            font-size: 1.6rem;
            padding: 1rem;
          }
        }
        textarea {
          height: 13.25rem;
        }
        input {
          height: 4.25rem;
        }
      }
    }
  }

  /* Para telas menores que 1440px (tablets e celulares) */
  @media screen and (max-width: 1440px) {
    .about-form {
      margin-top: 6rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .form {
        form {
          margin-top: 6rem;
        }
      }
    }
  }

  /* Para telas menores que 768px (celulares em modo paisagem) */
  @media screen and (max-width: 768px) {
    .about {
      visibility: hidden;
      margin-top: -12rem;
    }
    .about-form {
      margin: 0 auto;
      text-align: center;
      width: 75vw;
      .form {
        form {
          margin-top: 2rem;

          input,
          textarea {
            width: 85vw;
          }
        }
      }
    }
  }
`;

function About() {
  return (
    <Main>
      <title>Sobre mim</title>
      <section className="about-form">
        <div>
          <h2>Nascida no Brasil em 2004, em Niterói.</h2>
          <h3>
            Procuro oportunidades de trabalho onde eu possa aprender e agregar
            para a empresa. Fico a disposição!
          </h3>
        </div>
        <div className="form">
          <form method="POST">
            <label htmlFor="name">NOME</label>
            <input type="text" id="name" placeholder={"Seu nome aqui..."} />
            <label htmlFor="email">ENDEREÇO DE EMAIL</label>
            <input type="email" id="email" placeholder={"Seu email aqui..."} />
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder={"Me diga o que deseja..."}
            />
            <Button />
          </form>
        </div>
      </section>
    </Main>
  );
}

export default About;
