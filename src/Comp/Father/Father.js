import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({ring,house}) => {
    return (
        <div className='border border-warning p-5 m-2'>
            <h2>Father</h2>
            <p>{house}</p>
            <section className='d-flex'>
                <Myself ring={ring}  house={house}></Myself>
                <Sister house={house}></Sister>
                <Brother house={house}></Brother>
            </section>
        </div>
    );
};

export default Father;