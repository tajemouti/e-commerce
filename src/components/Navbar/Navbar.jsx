import React, { useState } from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/cart_icon.png'
import './navbar.css'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}>Men{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}>Women{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart} alt="cart icon" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar