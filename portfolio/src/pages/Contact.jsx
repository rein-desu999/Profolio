import { useRef } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    
    window.location.href = `mailto:diluckaeya77@gmail.com?subject=Contact from Portfolio&body=Name: ${data.firstName} ${data.lastName}%0D%0AEmail: ${data.email}%0D%0AMessage: ${data.message}`;
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.section}>
        <h2>Get In Touch</h2>
        <form ref={formRef} onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.nameFields}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
      
      <div className={styles.section}>
        <h2>Contact Info</h2>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <span>Email: boihoanh05@gmail.com</span>
          </div>
          <div className={styles.contactItem}>
            <a 
              href="https://www.linkedin.com/in/boi-hoanh-lam-/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.linkedInLink}
            >
              <FaLinkedin className={styles.linkedInLogo} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}