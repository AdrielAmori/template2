import styles from './Footer.module.css'
import { FaGithub, FaLinkedin, FaFigma   } from "react-icons/fa";

function Footer() {
  return(
    <div className={styles.footer}>
      <div className={styles.link}>
        <p>
          Meu contato: <br/>
          12 988888888
        </p>
        <p>
          Email: <br/>
          xxx@xyz.com
        </p>
      </div>
      <div className={styles.icons}>
        <a href='https://www.instagram.com/adrielarruda/' target='blank'>
        <FaGithub size={40}/>
        </a>
        <a href='https://www.linkedin.com/in/adriel-amorim-738ba720/' target='blank'><FaLinkedin size={40}/></a>
        <a href='https://www.figma.com/'>
          <FaFigma size={40}/>
        </a>
      </div>
    </div>
  )
}

export default Footer
