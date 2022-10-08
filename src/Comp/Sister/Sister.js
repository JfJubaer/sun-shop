import React from 'react';

const Sister = ({house}) => {
    return (
        <div className='border border-warning p-5 m-2'>
            <h2>Sis</h2>
            <p>{house}</p>
        </div>
    );
};

export default Sister;