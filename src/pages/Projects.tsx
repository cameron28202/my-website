import React, { useRef } from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projectsGridRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'AggieStudy',
      description: 'Project Manager for AggieStudy, a full-stack web application aimed at creating a one-stop website for Texas A&M students to study for their exams.',
      technologies: ['React.js', 'Spring Boot', 'PostgreSQL', 'Vercel', 'Axios', 'Git', 'JavaScript', 'Java'],
      image: '/images/aggiestudy.png',
      links: [{'name': 'Live Website', 'link': 'https://aggiestudy.com'}, {'name': 'GitHub', 'link': 'https://github.com/'}],
    },
    {
      title: 'Tidal Hackathon',
      description: 'Participated in the Tidal Hackathon, a two-day hackathon sponsored by Nvidia, AWS and Phillips 66 at Texas A&M. Experimented with a machine learning model for a dynamic speed limit sign.',
      technologies: ['Python', 'Pandas', 'Sklearn'],
      image: '/images/tidal.jpg',
      links: []
    },
    {
      title: 'Minecraft Server Developer',
      description: 'Created and developed custom Minecraft plugins using Java, the Spigot API, and Maven. Grew a server to 1000+ members, driving in game purchases with a custom enchantment plugin. ',
      technologies: ['Java', 'Spigot API', 'Maven'],
      image: '/images/minecraft.avif',
      links: []
    },
    {
      title: 'Relevant Coursework at TAMU',
      description: 'As a junior at Texas A&M University, Iv taken the following: Data Structures and Algorithms, Object Oriented Programming, Discrete Mathematics, Digital System Design, Electrical Circuit Theory, Linear Algebra, Differential Equations, Computer Architecture and Design, Operating Systems and Network Programming',
      technologies: ['C/C++', 'Java', 'JavaScript', 'ARMv8', 'Verilog'], 
      image: '/images/datastructure.png',
      links: []
    }
    
  ];


  
  const scrollLeft = () => {
    if (projectsGridRef.current) {
      projectsGridRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (projectsGridRef.current) {
      projectsGridRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="projects fade-in">
      <div className="projects-container">
        
        <section className="projects-section function-block">
          <h2 className="function-name">featuredProjects {'{'}</h2>
          <div className="function-content">
            <div className="projects-grid" ref={projectsGridRef}>

              {projects.map((project, index) => (
                <div className="project-item" key={index}>
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-links">
                      {project.links.map((link, index) => (
                        <a href={link.link} key={index} target="_blank" rel="noopener noreferrer">{link.name}</a>
                      ))}
                    </div>
                  </div>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <img src={project.image} alt={project.title} />
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>  
                </div>
              ))}
            </div>

            
            

            {/* Scroll controls */}
            <div className="scroll-controls">
              <button className="scroll-button" onClick={scrollLeft}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="scroll-button" onClick={scrollRight}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="function-end">{'}'}</div>
        </section>

        <section className="projects-section function-block">
          <h2 className="function-name">currentInterests {'{'}</h2>
          <div className="function-content">
              <p>Currently learning about computer architecture and assembly language (ARMV8), operating systems, and networking. Feel free to reach out to work on an open-source project. Will be participating in Build4Good 2025 @ TAMU!</p>
          </div>
          <div className="function-end">{'}'}</div>
        </section>
        
      </div>
    </div>
  );
};

export default Projects; 