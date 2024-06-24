import React from 'react';
import './popular.css';
import dataProduct from '../assets/data';
import Item from '../Item/Item';

const Popular = () => (
  <div className="popular">
    <h1>POPULAR IN WOMEN</h1>
    <hr />
    <div className="popular-item">
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

export default Popular;
