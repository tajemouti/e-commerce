import React from 'react'
import './offers.css'
import exclusive_image from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive<br/>Offers For You</h1>
            <p>ONLY THE BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="exclusive" />
        </div>
    </div>
  )
}

export default Offers