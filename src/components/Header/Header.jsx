import React from 'react';
import styles from './Header.module.css';
import { MoonSat } from 'iconoir-react';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <figure className={styles.figure}>
          <img src='' alt='logo' />
        </figure> */}
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Sobre Mi
            </Link>
          </li>
          <span className={styles.spacing}></span>
          <li>
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Proyectos
            </Link>
          </li>
          <span className={styles.spacing}></span>
          <li>
            <Link
              activeClass='active'
              to='skills'
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Habilidades
            </Link>
          </li>
          <span className={styles.spacing}></span>
          <li>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          <MoonSat height={30} width={30} strokeWidth={1} />
        </button>
      </div>
    </header>
  );
}
