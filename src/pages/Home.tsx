import React, { useState, useEffect } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const facts = [
    "CPEN @ Texas A&M University",
    "Software Engineer",
    "T-Mobile Intern (2025)",
    "Brazilian Jiu Jitsu White Belt",
    "Full-Stack Developer"
  ];
  
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
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
  
  return (
    <div className="home fade-in">
      <div className="function-block home-function">
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
    </div>
  );
};

export default Home; 