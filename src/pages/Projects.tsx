import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <div className="projects fade-in">
      <div className="projects-container">
        <h1>Projects</h1>
        
        <section className="projects-section function-block">
          <h2 className="function-name">featuredProjects {'{'}</h2>
          <div className="function-content">
            <div className="project-item">
              <div className="project-header">
                <h3>AggieStudy</h3>
                <div className="project-links">
                  <a href="https://aggiestudy.com" target="_blank" rel="noopener noreferrer">Live Site</a>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              <p className="project-description">
                Lead developer for aggiestudy.com, a full-stack web application aimed at creating a one-stop website for Texas A&M students to study for their exams.
                Developed REST API endpoints with Spring Boot and integrated PostgreSQL hosted on Heroku for efficient data management.
                Implemented a dynamic and responsive frontend using React.js hosted on Vercel, and utilized Axios for API calls.
              </p>
              <div className="project-tech">
                <span>React.js</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
                <span>Vercel</span>
                <span>Axios</span>
                <span>Git</span>
                <span>JavaScript</span>
                <span>Java</span>
              </div>
            </div>
            
            <div className="project-item">
              <div className="project-header">
                <h3>Minecraft Server Developer</h3>
                <div className="project-links">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              <p className="project-description">
                Created and developed custom Minecraft plugins using Java, the Spigot API, and Maven, enhancing user experience.
                Successfully managed and maintained a Minecraft server that attracted 1000+ new members, fostering a community.
                Made the server profitable by creating a plugin that introduced custom enchantments, driving in-game purchases.
              </p>
              <div className="project-tech">
                <span>Java</span>
                <span>Spigot API</span>
                <span>Maven</span>
              </div>
            </div>
            
            <div className="project-item">
              <div className="project-header">
                <h3>Election Prediction</h3>
                <div className="project-links">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              <p className="project-description">
                Developed a model to predict the presidential election using the Twitter API.
                Utilized sentiment analysis to classify tweets and assess voter sentiment trends, ensuring accurate and meaningful insights.
                Visualized the sentiment data and predictions using charts and dashboards to present findings effectively.
              </p>
              <div className="project-tech">
                <span>Python</span>
                <span>Twitter API</span>
                <span>Pandas</span>
                <span>Matplotlib</span>
              </div>
            </div>
          </div>
          <div className="function-end">{'}'}</div>
        </section>
        
        <section className="projects-section function-block">
          <h2 className="function-name">hackathons {'{'}</h2>
          <div className="function-content">
            <div className="activity-item">
              <div className="activity-header">
                <h3>TAMUhack 2023</h3>
                <span className="activity-date">January 2023</span>
              </div>
              <p className="activity-role">Participant</p>
              <p className="activity-description">
                Collaborated with a team to develop an innovative solution during Texas A&M's premier hackathon.
                Focused on creating technology that addresses real-world challenges within a 24-hour timeframe.
              </p>
            </div>
            
            <div className="activity-item">
              <div className="activity-header">
                <h3>HackTX 2022</h3>
                <span className="activity-date">October 2022</span>
              </div>
              <p className="activity-role">Participant</p>
              <p className="activity-description">
                Participated in The University of Texas at Austin's annual hackathon.
                Worked with a team to build a solution that leverages technology to solve meaningful problems.
              </p>
            </div>
          </div>
          <div className="function-end">{'}'}</div>
        </section>
      </div>
    </div>
  );
};

export default Projects; 