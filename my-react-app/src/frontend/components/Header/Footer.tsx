import React from 'react';
import '../../styles/footer.css';
import { useNavigate } from 'react-router-dom';

interface FooterProps {
  headerFooterColor: string;
}

const Footer: React.FC<FooterProps> = ({ headerFooterColor }) => {

  const navigate = useNavigate();
  const handleMenuClick = (e: React.MouseEvent, path?: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (path) {
      navigate(path);
    }
  };
  return (
    <footer className="footer" style={{ backgroundColor: headerFooterColor }}>
      <div className="footer-left">
        <span>© 2024 IU Forum</span>
      </div>
      <div className="footer-right">
        <a href="#" onClick={e => handleMenuClick(e, '/about')}>About</a>
        <a href="#" onClick={e => handleMenuClick(e, '/privacy')}>Privacy</a>
        <a href="#" onClick={e => handleMenuClick(e, '/terms')}>Terms</a>
        <a href="#" onClick={e => handleMenuClick(e, '/help')}>Help</a>
      </div>
    </footer>
  );
};

export default Footer;