import React from 'react'
import './hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div className="hand-icon">
                <p>New</p>
                <img src={hand_icon} alt="hand-icon" />
                <p>Collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Lastest Collection</div>
                <img src={arrow_icon} alt="arrow-icon" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="hero" />
        </div>
    </div>
  )
}

export default Hero