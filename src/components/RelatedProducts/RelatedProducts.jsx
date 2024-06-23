import React from 'react';
import './related_products.css';
import dataProduct from '../assets/data';
import Item from '../Item/Item';

const RelatedProducts = () => (
  <div className="related-products">
    <h1>Related Products</h1>
    <hr />
    <div className="related-products-item">
      {dataProduct.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          newPrice={item.newPrice}
          oldPrice={item.oldPrice}
        />
      ))}
    </div>
  </div>
);

export default RelatedProducts;
