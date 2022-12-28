import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect ( ()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])

    useEffect( ()=>{
        const storedCart = getStoredCart();
        const savedCart = []
        for(const id in storedCart){
            const addedProduct = products.find(product =>product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
                console.log(addedProduct);

            }
            
            console.log(addedProduct);
            
        }
        setCart(savedCart)
    },[products])

    //***Connecting eventhandler to add products to cart */
    const handleAddToCart = (selectedProduct) =>{
        //product as a parameter
        // console.log(product);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
const rest = cart.filter(product => product.id !== selectedProduct.id);
exists.quantity = exists.quantity +1;
newCart = [...rest, exists]
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
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