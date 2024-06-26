import Card from '../elements/Card'
import img1 from '../image/img1.svg'
import styles from './Projects.module.css'

function Projects() {
  return(
    <div className={styles.projects}>
      <div>
        <h2>Projetos</h2>
      </div>
      <div className={styles.division}>
        <div>
          <Card
          img={img1}
          title="Projeto 1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div>
          <Card
          img={img1}
          title="Projeto 2"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
      <div className={styles.division}>
        <div>
          <Card
          img={img1}
          title="Projeto 3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div>
          <Card
          img={img1}
          title="Projeto 4"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </div>
  )
}

export default Projects;
