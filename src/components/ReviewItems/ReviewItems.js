import { faDeleteLeft, faRemove, faTabletAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItems.css'
const ReviewItems = (props) => {
    const {product, handleRemoveProduct} =props;
    const{img, name, price, shipping, quantity} = product;
    return (
        <div className='review-items'>
            <div>
                <img src={img} alt=''/>
            </div>
            <div className="review-item-detail-container">
            <div className="review-item-details" title={name}>
                <p className='product-name'>{name.length >20 ?name.slice(0,20)+'...': name}</p>
                <p>Price: <span className='orange-color'>{price}</span></p>
                <p>Shipping: <span className='orange-color'>{shipping}</span></p>
                <p>Quantity: <span className='orange-color'>{quantity}</span></p>
            </div>
            <div className="delete-container">
                <button onClick={() =>handleRemoveProduct(product)} className='det-btn'><FontAwesomeIcon className='det-icon' icon={faTrash}></FontAwesomeIcon></button>
            </div>
            </div>
        </div>
    );
};

export default ReviewItems;