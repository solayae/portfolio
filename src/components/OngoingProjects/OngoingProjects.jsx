import styles from './OngoingProjects.module.css';

function OngoingProjects() {
  return (
      <section>
        <h2>Proyectos en los que estoy trabajando</h2>
        <div className={styles.projectsContainer}>
          <div className={styles.projectCard}>
            <h3>Nombre del Proyecto</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, cum necessitatibus? Molestiae facilis quasi harum.
            </p>
            <div className={styles.technologies}>
              <span>React</span>
              <span>React</span>
              <span>React</span>
              <span>React</span>
            </div>
          </div>
          <div className={styles.projectCard}>
            <h3>Nombre del Proyecto</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, cum necessitatibus? Molestiae facilis quasi harum.
            </p>
            <div className={styles.technologies}>
              <span>React</span>
              <span>React</span>
              <span>React</span>
              <span>React</span>
            </div>
          </div>
        </div>
      </section>
  );
}

OngoingProjects.propTypes = {};

export default OngoingProjects;
