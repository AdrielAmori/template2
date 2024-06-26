import styles from './Card.module.css'
import ButtonB from './ButtonB'

function Card({img, title, text}) {
  return(
    <div className={styles.card}>
      <img src={img} alt= "Error"/>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href='https://www.google.com' target='blank'>
        <ButtonB text="Clique Aqui"/>
      </a>
    </div>
  )
}

export default Card
