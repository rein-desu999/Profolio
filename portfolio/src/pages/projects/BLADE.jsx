import styles from './BLADE.module.css';
import { useState } from 'react';
import cubesatImage from '../../assets/blade/cubesat.png';
import missionImage from '../../assets/blade/mission.png';
import demoVideo from '../../assets/blade/demo.mp4';

// Import slideshow images
import codrImage from '../../assets/blade/codr.png';
import pdrImage from '../../assets/blade/pdr.png';
import cdrImage from '../../assets/blade/cdr.png';
import cdrCubesatImage from '../../assets/blade/cdr_cubesat.png';
import electricalImage from '../../assets/blade/electrical.png';
import demoGroupImage from '../../assets/blade/demo_group.png';

const slides = [
  { image: codrImage, caption: 'TUV at Conceptual Design Review' },
  { image: pdrImage, caption: 'TUV at Preliminary Design Review' },
  { image: cdrImage, caption: 'TUV at Critical Design Review' },
  { image: cdrCubesatImage, caption: 'TUV CubeSat Prototype' },
  { image: electricalImage, caption: 'System Testing' },
  { image: demoGroupImage, caption: 'TUV at CubeSat Demo Day' }
];

const BLADE = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const skills = [
    'Project Leadership', 'Systems Engineering', 'UV Radiation Analysis',
    'Team Management', 'CubeSat Design', 'Concept of Operations', 'Testing & Integration',
    'Data Analysis', 'Technical Documentation', 'Presentation Skills'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>BLADE: TUV CubeSat Mission</h1>
        <p className={styles.subtitle}>Bronco Space at CPP | Top 4 Team Selected for Flight</p>
      </header>

      {/* Project Inspiration Section */}
      <section className={styles.section}>
        <div className={styles.textContent}>
          <h2>Project Inspiration</h2>
          <p>
            The Balloon Launch Assessment Directive for Everyone (BLADE) is part of a student competition team by Bronco Space at CPP. 
            BLADE is a program intended to provide inexperienced students the opportunity to learn the processes of designing, 
            building, testing, and launching a BalloonSat and HAB vehicle to enhance their engineering skills. Each team is provided 
            resources and training from seasoned members of Bronco Space to perform the necessary tasks to complete their mission, 
            bringing on industry experience, textbook references, and sponsored manufacturing.
          </p>
          <p>
            At the beginning of the project, my team TUV was thinking about what our mission would be to sound scientific. 
            I talked to my team about how my skin is very sensitive toward the sun and I thought it would be cool if we could 
            do something about it. We further developed the primary objective of our 1U satellite mission dedicated to enhancing 
            our understanding of UV radiation protection in high-altitude and space environments.
          </p>
          <p>
            By investigating four materials' UV-blocking capabilities, we aimed to identify temporal patterns and variations in 
            UV absorbance. Our goal was to determine the most efficient materials for blocking UVA, UVB, and UVC radiations. 
            We tested 4 different materials, with the fifth material (clear acrylic) serving as our control for raw UV data.
          </p>
        </div>
        <div className={styles.cubesatContainer}>
          <img src={cubesatImage} alt="TUV CubeSat" className={styles.cubesatImage} />
          <p className={styles.caption}>Fig. 1 - Final TUV CubeSat Design</p>
        </div>
      </section>

      {/* Mission Image and Slideshow Section */}
      <section className={styles.missionSlideshow}>
        <div className={styles.missionColumn}>
          <img src={missionImage} alt="Mission Operation Design" className={styles.missionImage} />
          <p className={styles.caption}>Fig. 2 - Mission Operation Design</p>
        </div>
        
        <div className={styles.slideshowColumn}>
          <h2>Project Timeline</h2>
          <div className={styles.slideshow}>
            <button onClick={prevSlide} className={styles.slideButton}>&lt;</button>
            <div className={styles.slideContainer}>
              <div 
                className={styles.slideImageWrapper}
                style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
              >
                <div className={styles.slideCaption}>
                  {slides[currentSlide].caption}
                </div>
              </div>
            </div>
            <button onClick={nextSlide} className={styles.slideButton}>&gt;</button>
          </div>
        </div>
      </section>

      {/* Results and Demo Section */}
      <section className={styles.resultsSection}>
        <div className={styles.resultsContent}>
          <h2>Results & Achievements</h2>
          <p>
            As Project Lead for our 10-member team, I organized meetings, split tasks, assigned deadlines, 
            designed mission operations, assisted in component selection and testing, and managed CubeSat integration.
          </p>
          <p>
            Our team was selected as one of the top 4 teams out of 12 to have our CubeSat funded and flown, 
            and we were one of the first two teams to achieve flight by May on our campus!
          </p>
        </div>
        <div className={styles.demoVideoContainer}>
          <video controls className={styles.demoVideo}>
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className={styles.caption}>Fig. 9 - CubeSat Launch Demonstration</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skillsSection}>
        <h2>Technical Skills Utilized</h2>
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

export default BLADE;