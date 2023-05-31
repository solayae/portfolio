import styles from './MyProjects.module.css';
import projects from './projects';

import { GitHub, PageRight } from 'iconoir-react';

function MyProjects() {
  return (
    <div id='projects' className={styles.projects}>
      <h2>Proyectos</h2>
      <p className={styles.projectsFirstP}>Aquí algunos de mis proyectos en los que he trabajado</p>
      <div className={styles.projectsContainer}>
        {projects.data.map((e) => (
          <div key={e.name} className={styles.projectCard}>
            <figure className={styles.figureCard}>
              <img src={e.img} alt={e.name} />
            </figure>
            <h3>{e.name}</h3>
            <p>{e.description}</p>
            <div className={styles.technologies}>
            {e.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className={styles.projectsLinks}>
              <button>
                <GitHub height={23} width={23} strokeWidth={1.8} />
              </button>
              <button>
                <PageRight height={23} width={23} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

MyProjects.propTypes = {};

export default MyProjects;
