import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA';

function Presentation() {
  return (
    <div className={styles.presentation}>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua.
      </p>
      <ButtonA text="Saber mais"/>
    </div>
  )
}

export default Presentation;
