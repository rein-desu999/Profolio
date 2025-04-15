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
import Smartphone from './pages/projects/Smartphone';
import NGCP from './pages/projects/NGCP';
import BLADE from './pages/projects/BLADE';
import Pneumonia from './pages/projects/Pneumonia';
import Sappling from './pages/projects/Sappling';

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
          <Route path="/projects/smartphone" element={<Smartphone/>} />
          <Route path="/projects/ngcp" element={<NGCP />} />
          <Route path="/projects/blade" element={<BLADE />} />
          <Route path="/projects/pneumonia" element={<Pneumonia />} />
          <Route path="/projects/sappling" element={<Sappling />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}