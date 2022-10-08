import React from 'react';

const Brother = ({house}) => {
    return (
        <div className='border border-warning p-5 m-2'>
            <h2>Bro</h2>
            <p>{house}</p>
        </div>
    );
};

export default Brother;