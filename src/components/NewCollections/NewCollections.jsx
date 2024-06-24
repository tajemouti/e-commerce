import React from 'react';
import './new_collections.css';
import newCollection from '../assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => (
  <div className="new_collections">
    <h1>NEW COLLECTIONS</h1>
    <hr />
    <div className="collections">
      {newCollection.map((item) => (
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

export default NewCollections;
