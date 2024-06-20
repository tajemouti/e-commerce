import React, { useContext } from 'react'
import './product_display.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className='product-display'>
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
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_dull_icon} alt="star-dull" />
                    <p>(122)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="product-display-right-price-old">
                        {product.old_price}
                    </div>
                    <div className="product-display-right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="product-display-right-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam facere quo, iste asperiores harum maiores recusandae deserunt est natus culpa, voluptatum aliquid odit ipsa aspernatur excepturi nam minima voluptate pariatur.
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
                <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
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
    )
}

export default ProductDisplay