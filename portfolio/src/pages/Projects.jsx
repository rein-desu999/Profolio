import { useState } from 'react';
import { FaPhone, FaMicrochip } from 'react-icons/fa';
import styles from './Projects.module.css';
import { Link } from 'react-router-dom';

// Project data
const projects = {
  internship: [],
  class: [
    {
      id: 'forklift',
      title: 'Mini Forklift Project',
      date: 'March 2024 - May 2024',
      category: 'Class Project',
      image: '/assets/forklift.jpg'
    },
    {
      id: 'circuit',
      title: 'Digital Circuit Design Lab',
      date: 'Jan 2025 - May 2025',
      category: 'Class Project',
      icon: <FaMicrochip size={80} />,
      bgColor: '#f0f0f0'
    }
  ],
  student: [
    {
      id: 'kittyeclipse',
      title: 'KittyEclipse',
      date: 'Jan 2025 - Present',
      category: 'Student Program Project',
      image: '/assets/KittyEclipse_Logo.png'
    },
    {
      id: 'ngcp',
      title: 'NGCP',
      date: 'Aug 2024 - Present',
      category: 'Student Program Project',
      image: '/assets/ngcp.jpg'
    },
    {
      id: 'smartphone',
      title: 'Smartphone Project',
      date: 'Sept 2024 - Present',
      category: 'Student Program Project',
      icon: <FaPhone size={80} />,
      bgColor: '#f0f0f0'
    },
    {
      id: 'blade',
      title: 'BLADE Ragnarok',
      date: 'Sept 2023 - Jul 2024',
      category: 'Student Program Project',
      image: '/assets/TUV_Logo.png'
    }
  ],
  hackathon: [
    {
      id: 'hackathon1',
      title: 'Hackathon Project 1',
      date: '2024',
      category: 'Hackathon Project'
    },
    {
      id: 'hackathon2',
      title: 'Hackathon Project 2',
      date: '2024',
      category: 'Hackathon Project'
    },
    {
      id: 'hackathon3',
      title: 'Hackathon Project 3',
      date: '2024',
      category: 'Hackathon Project'
    }
  ]
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const allProjects = [
    ...projects.class,
    ...projects.student,
    ...projects.hackathon
  ];

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : activeFilter === 'class'
      ? projects.class
      : activeFilter === 'student'
        ? projects.student
        : projects.hackathon;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>My Projects</h1>
        <p>Collection of my work across different categories</p>
      </div>

      <div className={styles.filterButtons}>
        <button 
          className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={`${styles.filterButton} ${activeFilter === 'class' ? styles.active : ''}`}
          onClick={() => setActiveFilter('class')}
        >
          Class Projects ({projects.class.length})
        </button>
        <button 
          className={`${styles.filterButton} ${activeFilter === 'student' ? styles.active : ''}`}
          onClick={() => setActiveFilter('student')}
        >
          Student Program ({projects.student.length})
        </button>
        <button 
          className={`${styles.filterButton} ${activeFilter === 'hackathon' ? styles.active : ''}`}
          onClick={() => setActiveFilter('hackathon')}
        >
          Hackathon ({projects.hackathon.length})
        </button>
      </div>

      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className={styles.projectCard}>
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.projectImage}
              />
            ) : (
              <div 
                className={styles.projectImage} 
                style={{ 
                  backgroundColor: project.bgColor || '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {project.icon || project.title.charAt(0)}
              </div>
            )}
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p className={styles.projectDate}>{project.date}</p>
              <p>{project.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;