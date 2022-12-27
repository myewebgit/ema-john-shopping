import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, handleAddToCart}) => {
    // console.log(props.product)//// This console is for checking the object (product specification)
    // const {product,handleAddToCart} =props;
    // const {name, img, seller, price, ratings} = props.product /// object for object return
    const {name, img, seller, price, ratings} = product /// object for object return
   
    return (
        <div className='product'>
          
            <img src={img} alt=''></img>
            <div className='product-name'>
            <p >{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Rating: {ratings} stars</small></p>
            </div>
           <button onClick={() => handleAddToCart(product)} className='btn-cart'><h4 className='btn-text'>Add to Cart</h4>
           <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;