import React from 'react';
import Special from '../Special/Special';

const Myself = ({house,ring}) => {
    return (
        <div className='border border-warning p-5 m-2'>
            <h2>Myself</h2>
            <p>{house}</p>
            <section>
                <Special ring={ring}></Special> 
            </section>
        </div>
    );
};

export default Myself;