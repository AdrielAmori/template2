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
        <FaGithub size={40}/>
        <FaLinkedin size={40}/>
        <FaFigma size={40}/>
      </div>
    </div>
  )
}

export default Footer
