import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import { FaProjectDiagram, FaMicrochip, FaMobileAlt, FaClinicMedical } from 'react-icons/fa';
import forkliftImage from '../assets/forklift.jpg';
import ngcpImage from '../assets/ngcp.jpg';
import tuvLogo from '../assets/tuv_logo.png';
import sapplingImage from '../assets/sappling.png';
import kittyeclipseLogo from '../assets/KittyEclipse_Logo.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [transition, setTransition] = useState(false);

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
    },
    {
      id: '3',
      title: 'Kitty Eclipse',
      description: 'Developed a game using Unity and C# as part of a game development course.',
      image: kittyeclipseLogo,
      tags: ['Student Program Project'],
      date: 'January 2025 - Present',
      route: '/kittyeclipse'
    },
    {
      id: '4',
      title: 'Smartphone Project',
      description: 'Developing innovative smartphone applications with cutting-edge features and user experience enhancements.',
      image: null,
      tags: ['Student Program Project'],
      date: 'August 2024 - Present',
      route: '/projects/smartphone'
    },
    {
      id: '5',
      title: 'Northrop Grumman Collaboration Project',
      description: 'Collaborating with Northrop Grumman on advanced aerospace technologies and systems integration.',
      image: ngcpImage,
      tags: ['Student Program Project'],
      date: 'August 2024 - Present',
      route: '/projects/ngcp'
    },
    {
      id: '6',
      title: 'Balloon Launch Assessment Directive for Everyone',
      description: 'Developed high-altitude balloon launch systems for atmospheric research and payload testing.',
      image: tuvLogo,
      tags: ['Student Program Project'],
      date: 'September 2023 - July 2024',
      route: '/projects/blade'
    },
    {
      id: '7',
      title: 'Pneumonia Dectection',
      description: 'Developed an AI model to detect pneumonia from chest X-ray images.',
      image: null,
      icon: <FaClinicMedical size={50} />,
      tags: ['Hackathon Project'],
      date: 'March 2024',
      route: '/projects/pneumonia'
    },
    {
      id: '8',
      title: 'Sapling',
      description: 'Developed Web App to assist Pre-K to K-5 to help detect specific learning disability.',
      image: sapplingImage,
      tags: ['Hackathon Project'],
      date: 'March 2024',
      route: '/projects/sapling'
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

      <div className={`${styles.projectsGrid} ${transition ? styles.transitionOut : ''}`}>
        {sortedProjects.map(project => (
          <Link to={project.route} key={project.id} className={`${styles.projectCard} ${transition ? styles.slideOut : ''}`}>
            <div className={styles.projectImageContainer}>
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={styles.projectImage}
                />
              ) : (
                <div className={styles.projectIconFallback}>
                  {project.title.includes('Circuit') ? (
                    <FaMicrochip size={80} />
                  ) : project.title.includes('Smartphone') ? (
                    <FaMobileAlt size={80} />
                  ) : project.title.includes('Pneumonia') ? (
                    <FaClinicMedical size={80} />
                  ) : (
                    <FaProjectDiagram size={80} />
                  )}
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