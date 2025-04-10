import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>BHL</Link>
      
      <button 
        className={styles.mobileMenuButton}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <FaBars />
      </button>
      
      <nav>
        {/* Desktop Navigation */}
        <ul className={styles.navList}>
          <li>
            <Link 
              to="/projects" 
              className={`${styles.navLink} ${location.pathname === '/projects' ? 'active' : ''}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/leadership" 
              className={`${styles.navLink} ${location.pathname === '/leadership' ? 'active' : ''}`}
            >
              Leadership
            </Link>
          </li>
          <li>
            <Link 
              to="/resume" 
              className={`${styles.navLink} ${location.pathname === '/resume' ? 'active' : ''}`}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`${styles.navLink} ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
        
        {/* Mobile Navigation */}
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ''}`}>
          <Link 
            to="/projects" 
            className={styles.navLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="/leadership" 
            className={styles.navLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Leadership
          </Link>
          <Link 
            to="/resume" 
            className={styles.navLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Resume
          </Link>
          <Link 
            to="/contact" 
            className={styles.navLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}