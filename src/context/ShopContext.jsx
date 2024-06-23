import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import allProducts from '../components/assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  for (let index = 0; index < allProducts.length + 1; index += 1) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');

    return savedCart ? JSON.parse(savedCart) : getDefaultCart();
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    Object.keys(cartItems).forEach((item) => {
      if (cartItems[item] > 0) {
        const itemInfo = allProducts.find((product) => product.id === Number(item));
        totalAmount += itemInfo.newPrice * cartItems[item];
      }
    });

    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;

    Object.keys(cartItems).forEach((item) => {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    });

    return totalItem;
  };

  const contextValue = {
    getTotalCartItems, getTotalCartAmount, allProducts, cartItems, addToCart, removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
