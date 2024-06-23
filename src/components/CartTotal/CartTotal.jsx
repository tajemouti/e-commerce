import React, { useContext } from 'react';
import './cart_total.css';
import { ShopContext } from '../../context/ShopContext';

const CartTotal = () => {
  const { getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="cart-total">
      <div className="cart-items-total">
        <h1>Cart Totals</h1>
        <div>
          <div className="cart-items-total-item">
            <p>Subtotal</p>
            <p>
              $
              {getTotalCartAmount()}
            </p>
          </div>
          <hr />
          <div className="cart-items-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cart-items-total-item">
            <h3>Total</h3>
            <h3>
              $
              {getTotalCartAmount()}
            </h3>
          </div>
        </div>
        <button type="button">PROCEED TO CHECKOUT</button>
      </div>
      <div className="cart-items-promocode">
        <p>If you have a promo code, Enter it here</p>
        <div className="cart-items-promobox">
          <input type="text" placeholder="Promo code" />
          <button type="button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
