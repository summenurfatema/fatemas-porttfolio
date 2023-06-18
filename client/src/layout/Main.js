import React from 'react';
import HomePage from '../HomePage/HomePage';
import NavBar from '../Navber/NavBar';
import './main.css'
const Main = () => {
    return (
        <div id='main' className='font-sans'>
            <NavBar/>
            <HomePage/>
        </div>
    );
};

export default Main;