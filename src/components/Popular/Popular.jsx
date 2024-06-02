import React from 'react'
import './popular.css'
import data_product from '../assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item) => {
                return <Item />
            })}
        </div>
    </div>
  )
}

export default Popular