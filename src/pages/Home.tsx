import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const facts = [
    "CPEN @ TAMU",
    "Software Engineer",
    "T-Mobile SWE Intern (2025)",
    "Brazilian Jiu Jitsu White Belt",
    "Full-Stack Developer"
  ];
  
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Refs for scroll animations
  const socialTrayRef = useRef<HTMLDivElement>(null);
  const navSectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // If we're not deleting, we're typing
    if (!isDeleting) {
      // If the displayed text is shorter than the current fact, add a character
      if (displayText.length < facts[currentFactIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(facts[currentFactIndex].substring(0, displayText.length + 1));
        }, 100); // Typing speed
      } 
      // If we've finished typing, wait before starting to delete
      else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Wait time after typing completes
      }
    } 
    // If we're deleting
    else {
      // If there's still text to delete
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50); // Deleting speed (faster than typing)
      } 
      // If we've deleted everything, move to the next fact
      else {
        setIsDeleting(false);
        setCurrentFactIndex((currentFactIndex + 1) % facts.length);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentFactIndex, facts]);
  
  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px', // Trigger slightly before element enters viewport
      threshold: 0.15 // Trigger when 15% of the element is visible
    };
    
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        // When element enters viewport
        if (entry.isIntersecting) {
          // Add a small delay for a more natural feel
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 100);
        } 
        // When element leaves viewport
        else {
          // Remove the visible class when element is out of view
          entry.target.classList.remove('visible');
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (socialTrayRef.current) {
      observer.observe(socialTrayRef.current);
    }
    
    if (navSectionRef.current) {
      observer.observe(navSectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="home">
      <div className="function-block home-function fade-in no-border">
        <div className="function-name">intro {'{'}</div>
        <div className="function-content">
          <div className="name-display">
            <div className="first-name">Cam</div>
            <div className="last-name">Stone</div>
            <div className="title">
              <span className="typing-text">{displayText}</span>
              <span className="cursor"></span>
            </div>
          </div>
        </div>
        <div className="function-end">{'}'}</div>
      </div>
      
      {/* Social Links Tray */}
      <div ref={socialTrayRef} className="social-tray function-block scroll-fade no-border">
        <div className="function-name">connect {'{'}</div>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="mailto:your.email@example.com" className="social-link">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
        <div className="function-end">{'}'}</div>
      </div>
      
      {/* Navigation Section */}
      <div ref={navSectionRef} className="nav-section function-block scroll-fade no-border">
        <div className="function-name">explore {'{'}</div>
        <div className="nav-links">
          <Link to="/projects" className="nav-link">
            <div className="nav-icon">
              <i className="fas fa-code-branch"></i>
            </div>
            <div className="nav-text">
              <h3>Projects</h3>
              <p>Check out my work</p>
            </div>
          </Link>
          <Link to="/about" className="nav-link">
            <div className="nav-icon">
              <i className="fas fa-user"></i>
            </div>
            <div className="nav-text">
              <h3>About</h3>
              <p>Learn more about me</p>
            </div>
          </Link>
        </div>
        <div className="function-end">{'}'}</div>
      </div>
    </div>
  );
};

export default Home; 