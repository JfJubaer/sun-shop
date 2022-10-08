import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

export const ringContext = createContext('Golden Ring');

const Grandpa = () => {
    const [house,setHouse]=useState(7);
    
    const ring = 'diamond ring';
    return (
      <ringContext.Provider value={[house,setHouse]}>
          <div className='border border-warning'>
            <h4>Grandpa</h4>
            <section className='d-flex p-5'>
                <Father ring={ring} house={house}></Father>
                <Aunty house={house}></Aunty>
                <Uncle house={house}></Uncle>
            </section>
            </div>
      </ringContext.Provider>
    );
};

export default Grandpa;