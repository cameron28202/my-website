import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <span className="logo-text">CS</span>
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/projects">projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 