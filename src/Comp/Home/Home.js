import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Home = () => {
    const products = useLoaderData();
    const [cart,setCart]=useState([]);
    function addToCart(id){
       const exist = cart.find(product=>product._id===id);
       console.log(id);
       if(exist){
        alert('already added');
       }
       else{
        const newProduct = products.find(p=>p._id===id);
        const newCart = [...cart,newProduct];
        setCart(newCart);
       }
    }
    return (
        <div className='row mt-5'>
           <div className='col-9 row p-5'>
           {products.map(product=><Product addToCart={addToCart} key={product._id} product={product}></Product>)}
           </div>
           <div className='col-3'>
            <Cart setCart={setCart} cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Home;