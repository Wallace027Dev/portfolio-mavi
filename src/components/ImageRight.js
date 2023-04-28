import styled from "styled-components";

const Main = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  margin-bottom: 12rem;

  img,
  .imageDesc {
    opacity: 0;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  img {
    width: 25vw;
    animation-name: fade-in-right;
  }

  .imageDesc {
    width: 25vw;
    margin-right: 10vw;

    animation-name: fade-in-left;
  }

  h1 {
    font-size: 2.5rem;
    color: var(--font);
  }
  p {
    font-size: 1.5rem;
    color: var(--inpt-font);
  }

  /* Para telas menores que 1440px (tablets e celulares) */
  @media screen and (max-width: 1440px) {
    margin-bottom: 14rem;
  }

  /* Para telas menores que 768px (celulares em modo paisagem) */
  @media screen and (max-width: 768px) {
    img {
      width: 40vw;
    }
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;

function ImageRight(props) {
  return (
    <Main>
      <div className="imageDesc">
        <h1>{props.alt}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus
          augue lacus, congue egestas dolor gravida in. Donec blandit justo ut
          magna fringilla egestas. Sed varius faucibus tellus, at semper turpis
          porta sit amet. Sed venenatis sapien at molestie fringilla. Aenean nec
          dolor risus. Etiam bibendum aliquam sollicitudin. Integer sed nunc
          molestie massa posuere ultricies ac vitae lacus. Aenean sit amet
          consequat ante. Aliquam lacinia enim sit amet semper sodales. Integer
          in interdum libero. Praesent eu fermentum arcu, sit amet pellentesque
          augue. Donec orci dolor, scelerisque vel lacus aliquet, luctus
          vehicula leo. Suspendisse interdum nisl eu imperdiet maximus. Donec in
          pellentesque lacus, quis pretium enim. Nulla pellentesque quam quis ex
          congue semper non a nulla. Duis pretium diam sed ante dictum
          scelerisque.
        </p>
      </div>
      <div>
        <img src={props.foto} alt={props.alt} />
      </div>
    </Main>
  );
}

export default ImageRight;
