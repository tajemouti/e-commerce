import React from 'react';
import './offers.css';
import exclusiveImage from '../assets/exclusive_image.png';

const Offers = () => (
  <div className="offers">
    <div className="offers-left">
      <h1>
        Exclusive
        <br />
        Offers For You
      </h1>
      <p>ONLY THE BEST SELLERS PRODUCTS</p>
      <button type="button">Check Now</button>
    </div>
    <div className="offers-right">
      <img src={exclusiveImage} alt="exclusive" />
    </div>
  </div>
);

export default Offers;
