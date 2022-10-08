import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const [house,setHouse] = useContext(ringContext);
    return (
        <div className='border border-warning p-5 m-2'>
            <h2>Special</h2>
            <p>{ring}</p>
            <p>{house}</p>
            <button onClick={()=>setHouse(house+1)} className='btn btn-success'>Increase</button>
        </div>
    );
};

export default Special;