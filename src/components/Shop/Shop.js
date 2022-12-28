import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect ( ()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])


    //***Connecting eventhandler to add products to cart */
    const handleAddToCart = (product) =>{
        //product as a parameter
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='shop-container'>
            
            {/* /* creting two div together following command*/}
            {/* .products-container+.cart-container    */}

            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}  /// 1st product is a props and last is the value of this props////
                    handleAddToCart ={handleAddToCart} /// send to Product as as props/////  Props can be sent as an object and as a function also
                    ></Product>)
                }
                
                </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

           
        </div>
    );
};

export default Shop;