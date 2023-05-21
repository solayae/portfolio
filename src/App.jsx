import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import MyProjects from './components/MyProjects/MyProjects';
import OngoingProjects from './components/OngoingProjects/OngoingProjects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header />
    <About />
    <MyProjects />
    <OngoingProjects />
    <Skills />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
