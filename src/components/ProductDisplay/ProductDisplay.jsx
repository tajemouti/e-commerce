import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './product_display.css';
import starIcon from '../assets/star_icon.png';
import starDullIcon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
        </div>
        <div className="product-display-img">
          <img className="product-display-main-img" src={product.image} alt="product" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starIcon} alt="star" />
          <img src={starDullIcon} alt="star-dull" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old">
            {product.oldPrice}
          </div>
          <div className="product-display-right-price-new">
            $
            {product.newPrice}
          </div>
        </div>
        <div className="product-display-right-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam facere quo,
          iste asperiores harum maiores recusandae deserunt est natus culpa, voluptatum
          aliquid odit ipsa aspernatur excepturi nam minima voluptate pariatur.
        </div>
        <div className="product-display-right-size">
          <h1>Select size</h1>
          <div className="product-display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button type="button" onClick={() => { addToCart(product.id); }}>ADD TO CART</button>
        <p className="product-display-right-category">
          <span>Category :</span>
          Women, T-shirt, Crop Top
        </p>
        <p className="product-display-right-category">
          <span>Tags :</span>
          Modern, Latest
        </p>
      </div>
    </div>
  );
};

ProductDisplay.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    oldPrice: PropTypes.number.isRequired,
    newPrice: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductDisplay;
