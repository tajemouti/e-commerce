import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import cart from '../assets/cart_icon.png';
import './navbar.css';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');

  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button
              type="button"
              className={`${menu === 'shop' ? 'active' : ''}`}
              onClick={() => { setMenu('shop'); }}
            >
              Shop
            </button>
          </Link>
          {menu === 'shop' && <hr />}
        </li>
        <li>
          <Link to="/men" style={{ textDecoration: 'none' }}>
            <button
              type="button"
              className={`${menu === 'men' ? 'active' : ''}`}
              onClick={() => { setMenu('men'); }}
            >
              Men
            </button>
          </Link>
          {menu === 'men' && <hr />}
        </li>
        <li>
          <Link to="/women" style={{ textDecoration: 'none' }}>
            <button
              type="button"
              className={`${menu === 'women' ? 'active' : ''}`}
              onClick={() => { setMenu('women'); }}
            >
              Women
            </button>
          </Link>
          {menu === 'women' && <hr />}
        </li>
        <li>
          <Link to="/kids" style={{ textDecoration: 'none' }}>
            <button
              type="button"
              className={`${menu === 'kids' ? 'active' : ''}`}
              onClick={() => { setMenu('kids'); }}
            >
              Kids
            </button>
          </Link>
          {menu === 'kids' && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button type="button">Login</button></Link>
        <Link to="/cart"><img src={cart} alt="cart icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
