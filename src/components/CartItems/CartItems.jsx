import React, { useContext } from 'react';
import './cart_items.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import removeIcon from '../assets/cart_cross_icon.png';

const CartItems = () => {
  const {
    allProducts, cartItems, removeFromCart,
  } = useContext(ShopContext);

  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProducts.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart-items-format cart-items-format-main">
                <Link to={`/product/${e.id}`}>
                  <img src={e.image} alt="product" className="cart-icon-product-icon" />
                </Link>
                <p>{e.name}</p>
                <p>
                  $
                  {e.newPrice}
                </p>
                <button type="button" className="cart-items-quantity">{cartItems[e.id]}</button>
                <p>
                  $
                  {e.newPrice * cartItems[e.id]}
                </p>
                <button
                  type="button"
                  onClick={() => { removeFromCart(e.id); }}
                  className="cart-items-quantity"
                >
                  <img src={removeIcon} className="cart-items-remove-icon" alt="remove-icon" />
                </button>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

    </div>
  );
};

export default CartItems;
