import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ShopContext } from '../context/ShopContext';
import dropdownIcon from '../components/assets/dropdown_icon.png';
import Item from '../components/Item/Item';
import './css/shop_category.css';

const ShopCategory = ({ banner, category }) => {
  const { allProducts } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>
          {' '}
          out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by
          {' '}
          <img src={dropdownIcon} alt="dropdown" />
        </div>
      </div>
      <div className="shopcategory-products">
        {allProducts.map((item) => {
          if (category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
              />
            );
          }

          return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

ShopCategory.propTypes = {
  banner: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ShopCategory;
