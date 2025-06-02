import React from 'react';
import '../../styles/navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <a href="#" className="navLink">
        Recent activity
      </a>
      <a href="#" className="navLink">
        Clubs
      </a>
      <a href="#" className="navLink">
        Chatbot
      </a>
    </nav>
  );
};

export default Navbar;
