import styles from './Resume.module.css';
import resumeImage from '../assets/resume.jpg';

export default function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <h2>My Resume</h2>
      <img 
        src={resumeImage} 
        alt="Boi Hoanh Lam's Resume" 
        className={styles.resumeImage} 
      />
      <a 
        href={resumeImage} 
        download="Boi-Hoanh-Lam-Resume.jpg"
        className={styles.downloadButton}
      >
        Download Resume
      </a>
    </div>
  );
}