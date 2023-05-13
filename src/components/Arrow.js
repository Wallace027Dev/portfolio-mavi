import { Link } from "react-router-dom";
import styled from "styled-components";
import seta from '../assets/seta.png'

const Component = styled.div`
img {
  height: 5rem;
  position: fixed;
  left: 3.5rem;
  top: 3.5rem;
}

/* Para telas menores que 768px (celulares em modo paisagem) */
@media screen and (max-width: 768px) {
  img {
    height: 3rem;
    top: 4.5rem;
  }
}
`

function Arrow() {
  return (
    <Component Component>
    <Link to="/">
      <img src={seta} alt="Arrow back page" />
    </Link>
    </Component>
  )
}

export default Arrow;