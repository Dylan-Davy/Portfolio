import styles from './App.module.scss';
import Layout from './Layout/Layout';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;
