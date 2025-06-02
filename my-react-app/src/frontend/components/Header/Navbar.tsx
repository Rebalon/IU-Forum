import React from 'react';
import '../../styles/navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {

  const navigate = useNavigate();

  const handleMenuClick = (e: React.MouseEvent, path?: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (path) {
      navigate(path);
    }
  };

  return (
    <nav className="navbar">
      <a href="#" onClick={e => handleMenuClick(e, '/recent')}>Recent activity</a>
      <a href="#" onClick={e => handleMenuClick(e, '/clubs')}>Clubs</a>
      <a href="#" onClick={e => handleMenuClick(e, '/chatbot')}>Chatbot</a>
    </nav>
  );
};

export default Navbar;
