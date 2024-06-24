import React from 'react';
import PropTypes from 'prop-types';
import './item.css';
import { Link } from 'react-router-dom';

const Item = ({
  id, image, name, newPrice, oldPrice,
}) => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <button
          type="button"
          onClick={handleScrollToTop}
        >
          <img src={image} alt="item" />
        </button>
      </Link>

      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          $
          {newPrice}
        </div>
        <div className="item-price-old">
          $
          {oldPrice}
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  newPrice: PropTypes.number.isRequired,
  oldPrice: PropTypes.number.isRequired,
};

export default Item;
