import React from 'react';
import HomePage from '../HomePage/HomePage';
import NavBar from '../Navber/NavBar';
import './main.css'
const Main = () => {
    return (
        <div id='homes' className='font-sans w-100vw '>
            <NavBar/>
            <HomePage/>
        </div>
    );
};

export default Main;