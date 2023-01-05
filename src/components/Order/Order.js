import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Order.css'
const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const Navigate = useNavigate();
const handleRemoveProduct = (product)=>{
  const rest = cart.filter(pd => pd.id !== product.id);
  setCart(rest);
  removeFromDb(product.id)
}

    return (
        <div className='shop-container'>
            <div className='review-items-container'>
                {
        cart.map(product =><ReviewItems 
            key={product.id} 
            product={product}
            handleRemoveProduct = {handleRemoveProduct}
            ></ReviewItems>)
                }
            </div>
            {/* <h2> This is order page: {products.length}</h2>
            <h2> This is cart page: {cart.length}</h2> */}
            <div className='cart-container'>
                <Cart cart={cart}> <button  onClick={()=>Navigate('/shipment')}>Proceed Shipping</button></Cart>

            </div>
        </div>
    );
};

export default Order;