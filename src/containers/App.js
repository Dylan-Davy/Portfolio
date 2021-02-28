import styles from './App.module.scss';
import Layout from './Layout/Layout';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
      <Layout>
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
