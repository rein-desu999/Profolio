import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Leadership from './pages/Leadership';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import KittyEclipse from './pages/projects/KittyEclipse';
import ForkliftProject from './pages/projects/Forklift';
import DigitalCircuitProject from './pages/projects/DigitalCircuit';

export default function App() {
  return (
    <Router basename="/boihoanhlam">
      <Header />
      <main style={{ paddingBottom: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/kittyeclipse" element={<KittyEclipse />} />
          <Route path="/projects/forklift" element={<ForkliftProject />} />
          <Route path="/projects/digital-circuit" element={<DigitalCircuitProject />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}