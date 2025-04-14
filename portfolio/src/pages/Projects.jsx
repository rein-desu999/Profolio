import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import { FaProjectDiagram, FaMicrochip } from 'react-icons/fa';
import forkliftImage from '../assets/forklift.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: '1',
      title: 'Mini Forklift Project',
      description: 'Designed and built a miniature automated forklift system with obstacle detection and pathfinding capabilities.',
      image: forkliftImage, 
      tags: ['Class Project'],
      date: 'March 2024 - May 2024',
      route: '/projects/forklift'
    },
    {
      id: '2',
      title: 'Digital Circuit Design Lab',
      description: 'Developed digital circuits using Verilog and FPGAs.',
      image: null,
      icon: <FaMicrochip size={50} />,
      tags: ['Class Project'],
      date: 'January 2025 - May 2025',
      route: '/projects/digital-circuit'
    }
  ];

  const filters = ['All', 'Internship', 'Class Project', 'Student Program Project', 'Hackathon Project'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const getEndDate = (dateStr) => {
      const parts = dateStr.split(' - ');
      return parts.length > 1 ? new Date(parts[1]) : new Date(0);
    };
    return getEndDate(b.date) - getEndDate(a.date);
  });

  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      
      <div className={styles.filterButtonsContainer}>
        <div className={styles.filterButtons}>
          {filters.map(filter => (
            <button
              key={filter}
              className={`${styles.filterButton} ${activeFilter === filter ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.projectsGrid}>
        {sortedProjects.map(project => (
          <Link to={project.route} key={project.id} className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={styles.projectImage}
                />
              ) : (
                <div className={styles.projectIconFallback}>
                  {project.icon || <FaProjectDiagram size={48} />}
                </div>
              )}
              <div className={styles.projectOverlay}>
                <h3>{project.title}</h3>
                <p>{project.tags[0]}</p>
              </div>
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.date}</small>
              <div className={styles.projectTags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;