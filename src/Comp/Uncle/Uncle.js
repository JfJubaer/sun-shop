import React from 'react';

const Uncle = ({house}) => {
    return (
        <div className='border border-warning p-5 m-2'>
            <h2>Uncle</h2>
            <p>{house}</p>
        </div>
    );
};

export default Uncle;