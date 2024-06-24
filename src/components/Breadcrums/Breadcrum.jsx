import React from 'react';
import PropTypes from 'prop-types';
import arrowIcon from '../assets/breadcrum_arrow.png';
import './breadcrum.css';

const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum">
      HOME
      {' '}
      <img src={arrowIcon} alt="arrow" />
      {' '}
      SHOP
      {' '}
      <img src={arrowIcon} alt="arrow" />
      {' '}
      {product.category}
      {' '}
      <img src={arrowIcon} alt="arrow" />
      {' '}
      {product.name}
    </div>
  );
};

Breadcrum.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Breadcrum;
