import styles from './Navbar.module.css'

import Nav from 'react-bootstrap/Nav';
import { FaGithub, FaLinkedin  } from "react-icons/fa";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
      <a href='#projetos'>
        <Nav.Link>Projetos</Nav.Link>
      </a>
      <a href='#tech'>
        <Nav.Link>Tecnologias</Nav.Link>
      </a>
      <a href='#sobre'>
        <Nav.Link>Sobre mim</Nav.Link>
      </a>
      </div>
      <div className={styles.icons}>
        <a href='https://github.com/adrielamori' target='blank'><FaGithub size={30}/></a>
        <a href='https://www.linkedin.com/in/adriel-amorim-738ba720/' target='blank'><FaLinkedin size={30}/></a>
      </div>
    </div>

  )
}

export default Navbar;
