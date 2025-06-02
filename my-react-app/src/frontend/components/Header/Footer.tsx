import React from 'react';
import '../../styles/footer.css';

interface FooterProps {
  headerFooterColor: string;
}

const Footer: React.FC<FooterProps> = ({ headerFooterColor }) => {
  return (
    <footer className="footer" style={{ backgroundColor: headerFooterColor }}>
      <div className="footer-left">
        <span>© 2024 IU Forum</span>
      </div>
      <div className="footer-right">
        <a href="#" className="footer-link">About</a>
        <a href="#" className="footer-link">Privacy</a>
        <a href="#" className="footer-link">Terms</a>
        <a href="#" className="footer-link">Help</a>
      </div>
    </footer>
  );
};

export default Footer;