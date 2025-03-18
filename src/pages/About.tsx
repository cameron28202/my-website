import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about fade-in">
      <div className="about-container">
        
        <section className="about-section function-block">
          <h2 className="function-name">about {'{'}</h2>
          <div className="function-content">
            <p>
              Hey! I'm Cam, a Junior at Texas A&M University pursuing a Bachelor's degree in Computer Engineering with a minor in Mathematics. 
              I'm passionate about learning, specifically in AI and machine learning. I have over 6 months of internship experience in the field 
              of software engineering, and I'm actively seeking new opportunities.
            </p>
            <p>
              My passion for engineering was sparked when I was hooked on Minecraft. I taught myself the basics of programming with YouTube 
              tutorials so I could make fun mods and plugins for my friends and I to enjoy. Nowadays, I enjoy Brazilian Jiu Jitsu and working on 
              open-source projects.
            </p>
          </div>
          <div className="function-end">{'}'}</div>
        </section>
        
        <section className="about-section function-block">
          <h2 className="function-name">timeline {'{'}</h2>
          <div className="function-content">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">May 2025</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Incoming Software Engineer Intern</h3>
                  </div>
                  <p className="timeline-location">T-Mobile, Bellevue, Washington</p>
                  <p className="timeline-description">Developing a full-stack web application to streamline emergency response and enhance communication with law enforcement.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">Aug 2024 - Dec 2024</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Software Engineer Co-Op</h3>
                  </div>
                  <p className="timeline-location">RoviSys Automation & Information Solutions, Houston, Texas</p>
                  <p className="timeline-description">Engineered industrial data management solutions and HMI screens for oil & gas facilities, improving operational efficiency and real-time visualization.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">Jun 2024 - Jul 2024</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Machine Learning Research Intern</h3>
                  </div>
                  <p className="timeline-location">University of Technology of Compiègne, Heudiasyc Laboratory, France</p>
                  <p className="timeline-description"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="function-end">{'}'}</div>
        </section>
        
        
        <section className="about-section function-block">
          <h2 className="function-name">connect {'{'}</h2>
          <div className="function-content">
            <div className="contact-links">
              <a href="https://github.com/cameron28202" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/cameronwstone" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href="mailto:cameron28202@gmail.com" className="contact-link">
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </a>
            </div>
          </div>
          <div className="function-end">{'}'}</div>
        </section>
      </div>
    </div>
  );
};

export default About; 