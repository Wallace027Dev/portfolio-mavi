import styled from 'styled-components'
import instagram from '../assets/icons/instagram.svg'
import linkedin from '../assets/icons/linkedin.svg'
import behance from '../assets/icons/behance.svg'

const Component = styled.section`
  margin-top: 4rem;
  opacity: 0;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-name: fade-in-down;

  .about-form {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    h2 {
      font-size: 3.5rem;
      color: var(--font);
    }
    h3 {
      font-size: 2.5rem;
      color: var(--inpt-font);
      font-family: 'Montserrat', sans-serif;
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
          padding: 2rem;
          font-family: 'Montserrat', sans-serif;
          color: var(--inpt-font);
          font-size: 1.6rem;
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

  .social-medias {
    display: flex;
    justify-content: space-between;
    width: 50rem;
    margin-top: 5rem;

    img {
      height: 100px;
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
      h2 {
        font-size: 2.5rem;
      }
      h3 {
        font-size: 1.5rem;
      }
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
`

function About () {

  return (
    <Component>
      <title>Sobre mim</title>
      <section className='about-form'>
        <div>
          <h2>Nascida em 2005 na cidade de Niterói.</h2>
          <h3>
            Artista e ilustradora freelancer. <br />
            Comissões abertas para novos projetos,
            <br />
            peça um orçamento pelo formulário. <br />
            Uso no meu trabalho: tinta acrílica,
            <br />
            marcadores a base d'água,
            <br />
            giz pastel oleoso, Illustrator e Photoshop.
          </h3>
        </div>
        <section className="social-medias">
          <a href="https://instagram.com/_franca_art_">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://www.linkedin.com/in/maria-vitoria-alcantara-fran%C3%A7a-4a2886247/">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://www.behance.net/mariavfranca">
            <img src={behance} alt="behance" />
          </a>
        </section>
        {/*         
        <div className='form'>
          <form
            action='/enviar'
            method='POST'
            encType='multipart/form-data'
          >
            <label htmlFor='name'>NOME</label>
            <input
              type='text'
              id='name'
              placeholder={'Seu nome aqui...'}
              onChange={event => setName(event.target.value)}
              value={name}
            />
            <label htmlFor='email'>ENDEREÇO DE EMAIL</label>
            <input
              type='text'
              id='email'
              placeholder={'Seu email aqui...'}
              onChange={event => setEmail(event.target.value)}
              value={email}
            />
            <label htmlFor='message'>Mensagem</label>
            <textarea
              id='message'
              name='message'
              rows='5'
              placeholder={'Me diga o que deseja...'}
              onChange={event => setMessage(event.target.value)}
              value={message}
            />
            <label htmlFor='anexo'>ENDEREÇO DE EMAIL</label>
            <input onChange={handleAnexoChange} type='file' id='anexo' />
            <Button type='submit' />
          </form>
        </div> */
        }
      </section>
    </Component>
  )
}

export default About
