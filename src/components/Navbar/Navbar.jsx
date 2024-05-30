import React from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/cart_icon.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">
            
        </ul>
    </div>
  )
}

export default Navbar