import styles from './Contact.module.css';


function Contact() {



  return (
    <section id='contact' className={styles.contact}>
      <h2>Contacto</h2>
      <p>Puedes contactarme por correo electrónico y de esta forma podemos conversar y discutir tus ideas o proyectos en curso. Estoy abierto a colaboraciones y oportunidades emocionantes. ¡No dudes en escribirme!</p>
      <div className={styles.contactContainer}>
        <button>
          <a href=''>sebastianolayae@gmail.com</a>
        </button>
        <button>
          <a href='https://www.linkedin.com/in/solayae/' target='_blank' rel="noopener noreferrer">linkedin.com/in/solayae</a>
        </button>
      </div>
    </section>
  );
}

Contact.propTypes = {};

export default Contact;
