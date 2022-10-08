import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Cousin = () => {
    const [house,setHouse] = useContext(ringContext);
    return (
        <div className='border border-warning p-5 m-2'>
            <h2>Cousin</h2>
            <p>{house}</p>
            <button onClick={()=>setHouse(house-1)} className='btn btn-success'>Decrease</button>
        </div>
    );
};

export default Cousin;