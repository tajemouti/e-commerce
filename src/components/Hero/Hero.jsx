import React from 'react';
import './hero.css';
import handIcon from '../assets/hand_icon.png';
import arrowIcon from '../assets/arrow.png';
import heroImage from '../assets/hero_image.png';

const Hero = () => (
  <div className="hero">
    <div className="hero-left">
      <h2>NEW ARRIVALS ONLY</h2>
      <div>
        <div className="hero-hand-icon">
          <p>New</p>
          <img src={handIcon} alt="hand-icon" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
      </div>
      <div className="hero-latest-btn">
        <div>Lastest Collection</div>
        <img src={arrowIcon} alt="arrow-icon" />
      </div>
    </div>
    <div className="hero-right">
      <img src={heroImage} alt="hero" />
    </div>
  </div>
);

export default Hero;
