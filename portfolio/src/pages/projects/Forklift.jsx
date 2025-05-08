import styles from './Forklift.module.css';
import frontImage from '../../assets/forklift/front.JPG';
import sideImage from '../../assets/forklift/side.JPG';
import flowchart from '../../assets/forklift/data_flowchart.drawio.png';
import uiImage from '../../assets/forklift/ui.png';
import { FaGithub } from 'react-icons/fa';

const ForkliftProject = () => {
  const skills = [
    'Arduino Programming', 'C++', 'Bluetooth Integration', 
    'Circuit Design', 'Project Management', 'MBSE',
    'Hardware Prototyping'
  ];

  return (
    <div className={styles.container}>
      {/* Project Header */}
      <header className={styles.header}>
        <h1>Mini Forklift Project</h1>
        <p className={styles.date}>March 2024 - May 2024</p>
        <p className={styles.subtitle}>A collaborative engineering project to assist individuals with disabilities</p>
      </header>

      {/* Project Overview Section */}
      <section className={styles.overview}>
        <div className={styles.textContent}>
          <h2>Project Inspiration</h2>
          <p>
            Our team of five freshmen designed this animated forklift within an $80 budget to assist individuals with disabilities. 
            The forklift combines electronic and mechanical components to move smoothly, carry objects, and provide safety features 
            like proximity sensors and warning lights.
          </p>
          <p>
            The final product is a fully functional RC forklift (10"L × 6"W × 12"H) built from scratch for $94.61 (including $15 donation material), using Bluetooth 
            mobile systems, servos, and motors. This project gave us practical experience with the engineering design process and 
            opened our eyes to solutions that can improve lives.
          </p>
        </div>
        <div className={styles.imageGroup}>
          <div className={styles.imageWithCaption}>
            <img src={frontImage} alt="Forklift front view" className={styles.cleanImage} />
            <p className={styles.caption}>Fig. 1 - Front view of forklift</p>
        </div>
        <div className={styles.imageWithCaption}>
          <img src={sideImage} alt="Forklift side view" className={styles.cleanImage} />
          <p className={styles.caption}>Fig. 2 - Side view of forklift</p>
        </div>
      </div>
      </section>

      {/* My Contributions Section */}
      <section className={styles.contributions}>
        <h2>My Key Contributions</h2>
        <p>
          As Project Engineer, I led the hardware and software development using Arduino. My standout contribution was implementing 
          wireless Bluetooth control via the ArduinoBlue app instead of traditional RC controllers, simplifying the interface for users.
        </p>
        <p>
          I programmed the forklift in C++ using three key libraries:
        </p>
        <ul>
          <li><strong>ArduinoBlue.h</strong> - For mobile control interface</li>
          <li><strong>SoftwareSerial.h</strong> - Bluetooth module communication</li>
          <li><strong>Servo.h</strong> - Servo motor control</li>
        </ul>
        <p>
          The system was broken into functional components with clear inputs/outputs. For example, we programmed the wheels to move 
          forward when values were positive, brake at zero, and reverse when negative. The system also activated warning lights and 
          sounds when objects were detected on the lifting platform. CCW is for lifting up the platform, and CW is for lowering it.
        </p>
        <p className={styles.githubText}>For more technical details, please check out my project on GitHub:</p>
  
        <a 
          href="https://github.com/rein-desu999/Mini-Forklift" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.githubButton}>
          <FaGithub className={styles.githubIcon} />
          View on GitHub
        </a>
      </section>

      {/* System Diagrams Section */}
      <section className={styles.diagrams}>
        <h2>System Design</h2>
        <div className={styles.diagramGroup}>
          <div className={styles.imageWithCaption}>
            <img src={flowchart} alt="Data flowchart diagram" className={styles.cleanDiagram} />
            <p className={styles.caption}>Fig. 3 - System data flowchart</p>
          </div>
          <div className={styles.imageWithCaption}>
            <img src={uiImage} alt="Control interface UI" className={styles.cleanDiagram} />
            <p className={styles.caption}>Fig. 4 - Mobile control interface</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skills}>
        <h2>Top Skills Utilized</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillBox}>
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ForkliftProject;