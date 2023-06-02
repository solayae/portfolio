import styles from './MyProjects.module.css';
import projects from './projects';
import { GitHub, OpenNewWindow } from 'iconoir-react';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

function MyProjects() {
  const handleButtonClick = (link) => {
    window.open(link, '_blank');
  };

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      // backgroundColor: theme.palette.common.white,
      // color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
      fontFamily: 'inherit',
    },
  }));

  return (
    <div id='projects' className={styles.projects}>
      <h2>Proyectos</h2>
      <p className={styles.projectsFirstP}>
        Aquí algunos de mis proyectos en los que he trabajado
      </p>
      <div className={styles.projectsContainer}>
        {projects.data?.map((e) => (
          <div key={e.name} className={styles.projectCard}>
            <figure className={styles.figureCard}>
              <img src={e.img} alt={e.name} />
            </figure>
            <h3>{e.name}</h3>
            <p>{e.description}</p>
            <div className={styles.technologies}>
              {e.technologies?.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            <div className={styles.projectsLinks}>
              <LightTooltip title='Repositorio' placement='left'>
                <button onClick={() => handleButtonClick(`${e.repo}`)}>
                  <GitHub height={23} width={23} strokeWidth={1.5} />
                </button>
              </LightTooltip>
              <LightTooltip title='Demo' placement='right'>
                <button onClick={() => handleButtonClick(`${e.deploy}`)}>
                  <OpenNewWindow height={23} width={23} strokeWidth={1.5} />
                </button>
              </LightTooltip>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

MyProjects.propTypes = {};

export default MyProjects;
