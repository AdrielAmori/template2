import styles from './Sobre.module.css'
import time from '../image/time.svg'

function Sobre() {
  return (
    <div className={styles.sobre}>
      <h2>Sobre mim</h2>
      <div>
        <img src={time}/>
      </div>
    </div>
  );
}

export default Sobre;
