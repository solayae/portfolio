import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyProjects.module.css';
import { GitHub, PageRight } from 'iconoir-react';

function MyProjects(props) {
  return (
    <div id='projects'>
        <h2>Proyectos</h2>
        <p>Aquí algunos de mis proyectos en los que he trabajado</p>
        <div className={styles.projectsContainer}>
          <div className={styles.projectCard}>
            <figure className={styles.figureCard}>
              <img
                src='https://static.semrush.com/blog/uploads/media/4c/2d/4c2d910434b2e1841d7e10abeb1fbd01/LP-Example.png'
                alt='Imagen Proyecto'
              />
            </figure>
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
            <div className={styles.projectsLinks}>
              <button > 
                <GitHub height={23}  width={23} strokeWidth={1.8}/>
              </button>
              <button>
                <PageRight height={23}  width={23} strokeWidth={1.8}/>
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}

MyProjects.propTypes = {};

export default MyProjects;
