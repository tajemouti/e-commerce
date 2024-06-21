import React, { useContext } from 'react'
import './cart_items.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cart-items'>
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0)
        {
          return <div>
          <div className="cart-items-format">
            <img src={e.image} alt="product" className='cart-icon-product-icon'/>
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cart-items-quantity'>{cartItems[e.id]}</button>
            <p>${e.new_price*cartItems[e.id]}</p>
            <img src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="remove-icon" />
          </div>
          <hr />
        </div>
        }
      })}
    </div>
  )
}

export default CartItems