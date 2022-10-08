import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Comp/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <footer className='m-5 p-5 border-top opacity-50'>Copyright Warning</footer>
        </div>
    );
};

export default Main;