import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({house}) => {
    return (
        <div className='border border-warning m-2'>
            <h2>Aunt</h2>
            <section className='d-flex'>
                <Cousin house={house}></Cousin>
                <Cousin house={house}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;