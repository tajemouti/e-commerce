import React from 'react';
import './footer.css';
import footerLogo from '../assets/logo_big.png';
import instagramIcon from '../assets/instagram_icon.png';
import pintesterIcon from '../assets/pintester_icon.png';
import whatsappIcon from '../assets/whatsapp_icon.png';

const Footer = () => (
  <div className="footer">
    <div className="footer-logo">
      <img src={footerLogo} alt="logo" />
      <p>SHOPPER</p>
    </div>
    <ul className="footer-links">
      <li>Company</li>
      <li>Products</li>
      <li>Offices</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <div className="footer-social-icon">
      <div className="footer-icons-container">
        <img src={instagramIcon} alt="instagram" />
      </div>
      <div className="footer-icons-container">
        <img src={pintesterIcon} alt="pintester" />
      </div>
      <div className="footer-icons-container">
        <img src={whatsappIcon} alt="whatsapp" />
      </div>
    </div>
    <div className="footer-copyright">
      <hr />
      <p>Copyrights @ 2024 - All rights Reserved</p>
    </div>
  </div>
);

export default Footer;
