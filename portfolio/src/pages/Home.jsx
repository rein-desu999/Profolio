import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import profilePic from '../assets/profile.jpg';
import keImage from '../assets/KERSCA.jpg';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section*/}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>My Name is<br /><span>Boi Hoanh Lam</span></h1>
          <p>Welcome to my Computer Engineering portfolio</p>
        </div>
        <div className={styles.profileImage}>
          <img src={profilePic} alt="Boi Hoanh Lam" />
        </div>
      </div>

      {/* About Me Section*/}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h2>About Me</h2>
          <p>
            I'm Boi Hoanh Lam (but you can call me Hoanh), a Computer Engineering undergrad at Cal Poly Pomona 
            with a passion for hardware design, system engineering, and embedded systems. I'm currently leading 
            several exciting projects involving PCB development, power optimization, and real-time control systems.
          </p>
          <p>
            I love creating new things and frequently go on side missions to build projects and tinker with 
            electronics and art. Currently, I serve as co-project manager for KittyEclipse - 
            an innovative robotics project developing therapeutic companion animals that provide comfort and 
            emotional support. This project is sponsored by Women In Technology (WIT), with Dr. Beverly Quon as the advisor.
          </p>
          <div className={styles.projectLinks}>
            <Link to="/kittyeclipse" className={styles.projectButton}>
              Learn More About KittyEclipse
            </Link>
            <a href="https://www.calpolywit.org/" target="_blank" rel="noopener noreferrer" className={`${styles.projectButton} ${styles.secondary}`}>
              WIT Organization
            </a>
          </div>
        </div>
        
        <div className={styles.projectShowcase}>
          <img 
            src={keImage} 
            alt="KittyEclipse at CPP RSCA Conference" 
            className={styles.projectImage} 
          />
          <p className={styles.projectCaption}>
            Showcasing initial development at Cal Poly Pomona Student Research, 
            Scholarship & Creative Activities Conference (CPP Student RSCA Conference)
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;