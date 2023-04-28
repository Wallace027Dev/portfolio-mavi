import styled from "styled-components";
import banner from "../images/banner.webp";

const Main = styled.main`
  .about {
    margin-top: 18rem;
    .imgBanner {
      width: 100%;
    }
  }
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
          font-family: "Bebas Neue", cursive;
          font-size: 1.6rem;
          padding: 1rem;
          color: var(--inpt-font);
        }
        textarea {
          height: 13.25rem;
        }
        input {
          height: 4.25rem;
        }
        button {
          border-radius: 2rem;
          border: none;
          width: 9rem;
          height: 4rem;
          font-size: 1.8rem;
          font-family: "Bebas Neue", cursive;
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
      margin-top: 24rem;
      .imgBanner {
        position: absolute;
        object-fit: cover;
        height: 10vh;
        top: 0;
        left: 0;
      }
    }
    .about-form {
      margin: 6rem auto;
      text-align: center;
      width: 75vw;
      .form {
        form {
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
      <div className="about">
        <img className="imgBanner" src={banner} alt="Banner" />
      </div>
      <section className="about-form">
        <div>
          <h2>Nascida no Brasil em 2004, No Espírito Santo.</h2>
          <h3>
            Procuro oportunidades de trabalho onde eu possa aprender e agregar
            para a empresa. Fico a disposição!
          </h3>
        </div>
        <div className="form">
          <form method="POST">
            <label for="name">NOME</label>
            <input type="text" id="name" value={"Seu nome aqui..."} />
            <label for="email">ENDEREÇO DE EMAIL</label>
            <input type="email" id="email" value={"Seu email aqui..."} />
            <label for="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={"Me diga o que deseja..."}
            />
            <button>ENVIAR</button>
          </form>
        </div>
      </section>
    </Main>
  );
}

export default About;