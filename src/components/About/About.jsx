import styles from './About.module.css';
import { LinkedIn } from 'iconoir-react';
import { GoogleDocs } from 'iconoir-react';
import { GitHub } from 'iconoir-react';

export default function About() {
  const handleButtonClick = (link) => {
    window.open(link, '_blank');
  };
  return (
    <div id='about' className={styles.aboutMain}>
      <h1 className={styles.title}>Sebastián Olaya Escobar</h1>
      <section className={styles.aboutContainer}>
        <div className={styles.about}>
          <p>
            Soy un apasionado desarrollador web enfocado en crear sitios web
            atractivos y funcionales. Combino habilidades técnicas y creatividad
            para transformar ideas en código funcional. Valorando la
            comunicación efectiva y el trabajo en equipo, colaboro para lograr
            proyectos exitosos. ¡Estoy listo para ayudarte a alcanzar tus
            objetivos en línea! 🇨🇴
          </p>
          <div className={styles.buttons}>
            <button id={styles.cv} onClick={() => handleButtonClick('https://drive.google.com/file/d/1rS_9JtGUDFjsjAmzjM6vuG2vagdayuwI/view')}>
              <span className={styles.button_top}>
                Ver Curriculum
                <GoogleDocs height={20} width={20} strokeWidth={1.5} />
              </span>
            </button>
            <button id={styles.linkedin} onClick={() => handleButtonClick('https://www.linkedin.com/in/solayae/')}>
              <span className={styles.button_top}>
                LinkedIn
                <LinkedIn height={20} width={20} strokeWidth={1.5} />
              </span>
            </button>
            <button id={styles.github} onClick={() => handleButtonClick('https://www.github.com/solayae')}>
              <span className={styles.button_top}>
                GitHub
                <GitHub height={20} width={20} strokeWidth={1.5} />
              </span>
            </button>
          </div>
        </div>
        <figure className={styles.picture}>
          <img
            src='https://media.licdn.com/dms/image/D4E03AQE_BBcYBGkMFQ/profile-displayphoto-shrink_800_800/0/1683089882495?e=2147483647&v=beta&t=oWekNBkVdXbVKcHe7gkx68Oou5__T-f3TAhuCix27dM'
            alt='Profile Picture'
          />
        </figure>
      </section>
    </div>
  );
}
