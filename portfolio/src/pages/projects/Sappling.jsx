import styles from './Sappling.module.css';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import demoImage from '../../assets/sappling/demo.png';
import logoImage from '../../assets/sappling.png';

const Sappling = () => {
  const skills = [
    'React Native', 'Expo', 'TypeScript', 
    'API Integration', 'UI/UX Design', 'Mobile Development'
  ];

  return (
    <div className={styles.container}>
      {/* Logo Header */}
      <div className={styles.logoHeader}>
        <img src={logoImage} alt="Sappling Logo" className={styles.logo} />
      </div>

      {/* Project Header */}
      <header className={styles.header}>
        <h1>SpecialEduAI - Early Childhood Education Ecosystem</h1>
        <p className={styles.date}>March 23, 2025 (2.5-day Hackathon)</p>
        <p className={styles.subtitle}>AI For A Better Future (76 competing teams)</p>
      </header>

      {/* Project Overview Section */}
      <section className={styles.overview}>
        <div className={styles.textContent}>
          <h2>Project Inspiration</h2>
          <p>
            During an intense 2.5-day "AI for A Better Future" hackathon, our team tackled a critical challenge: 
            ensuring equitable access to quality early childhood education. We developed Sappling, an AI-powered education 
            ecosystem designed to identify unique learning needs in children aged 3-12 and deliver adaptive learning solutions. 
            Recognizing the significant disparities in educational outcomes – with approximately 44 million children in the US, 
            including an estimated 11 million living under the poverty line, 500,000 diagnosed with Specific Learning Disabilities 
            (SLD) or Autism, and a staggering 7.7 million potentially undiagnosed – we aimed to create a proactive tool for early intervention.
          </p>
          <p>
            Although our project didn't make it to the finals, I'm incredibly proud of what we 
            accomplished in such a short timeframe and the opportunity it gave me to dive deep 
            into mobile app development.
          </p>
        </div>
        {demoImage && (
          <div className={styles.imageWithCaption}>
            <img src={demoImage} alt="App demo" className={styles.cleanImage} />
            <p className={styles.caption}>Fig. 1 - SpecialEduAI App Interface</p>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Key Features</h2>
        <ul className={styles.featureList}>
          <li>Early detection of special learning needs through gamified interactions</li>
          <li>Adaptive learning paths based on individual needs</li>
          <li>Progress tracking and analytics</li>
          <li>Parent/Educator dashboard</li>
          <li>Accessibility options for diverse needs</li>
          <li>Multi-language support</li>
          <li>Model: Open AI - o4</li>
        </ul>
      </section>

      {/* My Contributions Section */}
      <section className={styles.contributions}>
        <h2>My Contributions</h2>
        <p>
          As the frontend developer, I implemented the UI/UX design and integrated the API developed 
          by my teammate Devin. In just 2.5 days, I:
        </p>
        <ul>
          <li>Built the core app navigation and screens</li>
          <li>Implemented the adaptive learning interface</li>
          <li>Created the progress tracking visualization</li>
          <li>Integrated the AI service API endpoints</li>
          <li>Ensured accessibility compliance</li>
        </ul>
        
        <div className={styles.linksContainer}>
          <p className={styles.githubText}>For demo and further details:</p>
          
          <div className={styles.linkButtons}>
            <a 
              href="https://github.com/Women-in-Tech-Competition-Team/Special" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.githubButton}
            >
              <FaGithub className={styles.githubIcon} />
              View on GitHub
            </a>
            
            <a 
              href="https://youtu.be/P_i92S_vIuA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.youtubeButton}
            >
              <FaYoutube className={styles.youtubeIcon} />
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

export default Sappling;
