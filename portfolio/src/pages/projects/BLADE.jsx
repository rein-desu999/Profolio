import styles from './BLADE.module.css';
import { useState } from 'react';
import cubsatImage from '../../assets/blade/cubsat.png';
import cdrcubesatImage from '../../assets/blade/cdr_cubesat.png';
import cdrImage from '../../assets/blade/cdr.png';
import pdrImage from '../../assets/blade/pdr.png';
import codrImage from '../../assets/blade/codr.jpg';
import electricalImage from '../../assets/blade/electrical.png';
import demoGroupImage from '../../assets/blade/demo_group.png';
import missionImage from '../../assets/blade/mission.png';
import ReactPlayer from 'react-player';

const BLADE = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: codrImage, caption: "TUV at Conceptual Design Review" },
    { image: pdrImage, caption: "TUV at Preliminary Design Review" },
    { image: cdrImage, caption: "TUV at Critical Design Review" },
    { image: cdrcubesatImage, caption: "Prototype CubeSat" },
    { image: electricalImage, caption: "System Testing" },
    { image: demoGroupImage, caption: "TUV at CubeSat Demo Day" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className={styles.container}>
      {/* Project Header */}
      <header className={styles.header}>
        <h1>BLADE: UV Protection Research</h1>
        <p className={styles.date}>September 2023 - May 2024</p>
        <p className={styles.subtitle}>Bronco Space at CPP | Top 4 Team Selected for Flight</p>
      </header>

      {/* Project Inspiration Section */}
      <section className={styles.inspiration}>
        <div className={styles.textContent}>
          <h2>Project Inspiration</h2>
          <p>
            BLADE is part of a student competition team by Bronco Space at CPP. The Balloon Launch 
            Assessment Directive for Everyone (BLADE) provides inexperienced students the opportunity 
            to learn the processes of designing, building, testing, and launching a BalloonSat and 
            HAB vehicle to enhance their engineering skills.
          </p>
          <p>
            Each team is provided resources and training from seasoned members of Bronco Space to 
            perform the necessary tasks to complete their mission, bringing industry experience, 
            textbook references, and sponsored manufacturing.
          </p>
          <p>
            At the project's beginning, my team TUV was brainstorming scientific mission ideas. 
            I shared how my skin is very sensitive to the sun, which inspired our mission focus. 
            Our 1U satellite mission aims to enhance understanding of UV radiation protection in 
            high-altitude and space environments by investigating four materials' UV-blocking 
            capabilities to identify temporal patterns in UV absorbance.
          </p>
          <p>
            We tested four different materials, with clear acrylic as our control to gather raw UV data.
          </p>
        </div>
        <div className={styles.imageWithCaption}>
          <img src={cubsatImage} alt="Final CubeSat Design" className={styles.projectImage} />
          <p className={styles.caption}>Fig. 1 - Final CubeSat Design</p>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className={styles.slideshowSection}>
        <h2>Project Milestones</h2>
        <div className={styles.slideshow}>
          <button onClick={prevSlide} className={styles.slideButton}>&lt;</button>
          <div className={styles.slide}>
            <img src={slides[currentSlide].image} alt={slides[currentSlide].caption} />
            <p className={styles.slideCaption}>{slides[currentSlide].caption}</p>
          </div>
          <button onClick={nextSlide} className={styles.slideButton}>&gt;</button>
        </div>
      </section>

      {/* My Role & Results Section */}
      <section className={styles.roleResults}>
        <div className={styles.roleContent}>
          <h2>My Role & Results</h2>
          <p>
            As project lead of 10 members, my responsibilities included:
          </p>
          <ul>
            <li>Organizing team meetings and setting agendas</li>
            <li>Splitting tasks and assigning deadlines</li>
            <li>Designing and tracking mission operations</li>
            <li>Assisting in component selection and testing</li>
            <li>Overseeing CubeSat integration</li>
          </ul>
          <p>
            In the end, our team was chosen as one of the top 4 teams out of 12 to have our CubeSat 
            funded and flown, and we were among the first 2 teams to achieve flight by May on our campus!
          </p>
          <div className={styles.missionImage}>
            <img src={missionImage} alt="Mission Operation Design" />
            <p className={styles.caption}>Fig. 2 - Mission Operation Design</p>
          </div>
        </div>
        <div className={styles.demoVideo}>
          <ReactPlayer 
            url={require('../../assets/blade/demo.MOV')}
            controls
            width="100%"
            height="auto"
          />
          <p className={styles.caption}>CubeSat Launch Demonstration</p>
        </div>
      </section>
    </div>
  );
};

export default BLADE;