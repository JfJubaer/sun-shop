import React from 'react';

const Cart = ({cart,setCart}) => {
    function rmvFromCart(p){
        const remain = cart.filter(product=>product!==p);
        setCart(remain);
    }
    let msg;
    if(cart.length===1){
        msg=<p>Aro nao</p>;
    }
    else if(cart.length>1){
        msg=<p>Thanx for Buying</p>;
    }
    return (
        <div >
            <h1>Orders Summary</h1>
            <h3 className= {`border p-3 ${cart.length>2?'text-danger':'text-warning'}`}>Total Items : {cart.length}</h3>
            <div className='container'>
                {cart.map(p=><p key={p._id}>{p.name}  <button onClick={()=>rmvFromCart(p)} className='btn btn-danger'>X</button></p>)}

            </div>
            {msg}
            {cart.length>2?<h5>amkeo diba?</h5>:<p></p>}
            {cart.length>2 && <h5>Oree baba eto kissuuu!!!</h5>}
            {cart.length>0 || <h5>Buy something!!!!</h5>}
        </div>
    );
};

export default Cart;