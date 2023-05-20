import React from 'react';
import PropTypes from 'prop-types';
import styles from './Skills.module.css';
import skills from './skills';

function Skills(props) {
  return (
    <div id='skills'>
      <h2>Mis Habilidades</h2>
      <section className={styles.skillsContainer}>
        <div className={styles.skillsCards}>
          {skills.data.map((e) => (
            <div key={e.skill} className={styles.skill}>
              <img src={e.img} alt='svg' />
              <p>{e.skill}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

Skills.propTypes = {};

export default Skills;
