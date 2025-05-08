import styles from './Pneumonia.module.css';
import { FaGithub, FaYoutube } from 'react-icons/fa';

const Pneumonia = () => {
  const skills = [
    'HTML/CSS', 'React', 'UI/UX Design', 'Multidisciplinary Collaboration'
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Pneumonia Detection Chatbot</h1>
        <p className={styles.date}>March 2024</p>
        <p className={styles.subtitle}>AI-powered healthcare solution (Top 5 Finalist)</p>
      </header>

      <section className={styles.projectOverview}>
        <div className={styles.textContent}>
          <h2>Overview</h2>
          <p>
            Pneumonia is a severe respiratory infection that affects almost 450 million people globally 
            and accounts for approximately 7% of all causes of mortality every year. It particularly 
            impacts children under five and adults over 65.
          </p>
          <p>
            We created a chatbot for early detection and treatment of pneumonia within a polished website. 
            Our solution simplifies the pneumonia diagnosis process and enhances efficiency in management 
            for healthcare providers. Following HIPAA policies, we want to implemented multiple cybersecurity 
            protocols to protect patient information.
          </p>
          
          <div className={styles.roleSection}>
            <p>
              <strong>My Role:</strong> As the UI/UX developer, I designed the website layout using HTML/CSS 
              and worked closely with the backend developer to integrate the AI model. This was my first 
              experience with React, and despite the learning curve, our team made it to the Top 5 finalists. 
              This project was a valuable learning experience, and I hope to further develop my skills in 
              implementing AI models in the future.
            </p>
          </div>

          <div className={styles.linksContainer}>
            <a 
              href="https://github.com/plexin123/Hackathon-Project" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.githubButton}
            >
              <FaGithub className={styles.githubIcon} />
              View on GitHub
            </a>
          </div>
        </div>

        <div className={styles.videoWrapper}>
          <div className={styles.videoContainer}>
            <iframe
              src="https://www.youtube.com/embed/gaxeE40JDRY"
              title="Pneumonia Detection Demo"
              allowFullScreen
              className={styles.video}
            ></iframe>
          </div>
        </div>
      </section>

      <section className={styles.skills}>
        <h2>Technologies & Skills</h2>
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

export default Pneumonia;
