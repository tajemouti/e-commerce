import React from 'react';
import './newsletter.css';

const NewsLetter = () => (
  <div className="newsletter">
    <h1>Get Exclusive Offers On Your Email</h1>
    <p>Subscribe to our newsletter and stay updated</p>
    <div>
      <input type="email" placeholder="Type your E-mail here" />
      <button type="button">Subscribe</button>
    </div>
  </div>
);

export default NewsLetter;
