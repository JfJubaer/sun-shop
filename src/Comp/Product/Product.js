import React from 'react';

const Product = ({product,addToCart}) => {
    const {_id,name,price,picture}=product;
    return (
        <div className='col-4 g-5 '>
        <div className="card shadow-lg ">
            <img src={picture} className="card-img-top" style={{width:'100%',height:'300px'}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Name : {name}</h5>
                <p className="card-text">Price : {price}</p>
                <button onClick={()=>addToCart(_id)} className='btn btn-warning w-100'>Buy</button>
            </div>
            </div>
        </div>
    );
};

export default Product;