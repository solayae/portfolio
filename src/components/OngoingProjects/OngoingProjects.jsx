import styles from './OngoingProjects.module.css';
import projects from './projects';

function OngoingProjects() {
  return (
    <section>
      <h2>Proyectos en los que estoy trabajando</h2>
      <div className={styles.projectsContainer}>
        {projects.data.map((e) => (
          <div key={e.name} className={styles.projectCard}>
              <h3>{e.name}</h3>
              <div className={styles.technologies}>
                {e.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

OngoingProjects.propTypes = {};

export default OngoingProjects;
