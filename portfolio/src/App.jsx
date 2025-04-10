import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Leadership from './pages/Leadership';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import KittyEclipse from './pages/KittyEclipse';

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
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}