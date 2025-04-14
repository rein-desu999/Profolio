import { useState, useEffect } from 'react';
import styles from './KittyEclipse.module.css';
import kittyImage from '../../assets/Kitty.png';
import eyesImage from '../../assets/KittyEyes.png';
import logoImage from '../../assets/KittyEclipse_Logo.png';

const KittyEclipse = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    document.body.classList.add(styles.overrideGradient);
    const timer = setTimeout(() => setShowContent(true), 9000);
    
    return () => {
      document.body.classList.remove(styles.overrideGradient);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Animation Overlay */}
      {!showContent && (
        <div className={styles.animationContainer}>
          <img src={kittyImage} className={styles.kitty} alt="Kitty" />
          <img src={eyesImage} className={styles.eyes} alt="Eyes" />
          <img src={logoImage} className={styles.logo} alt="KittyEclipse Logo" />
        </div>
      )}

      {/* Page Content */}
      <div className={styles.content}>
        <h1>KittyEclipse Project</h1>
        {/* Project details will go here */}
      </div>
    </div>
  );
};

export default KittyEclipse;