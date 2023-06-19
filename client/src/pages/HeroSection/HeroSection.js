import React from 'react';
import blob from '../../assets/blob.png'
import LazyDiv from '../LazyDiv/LazyDiv';
const HeroSection = () => {
    return (
        <div className='flex fex-col justify-between items-center px-5 py-5 md:px-14  lg:px-12 xl:px-20 md:py-10 3xl:h-screen relative'>

            <div className='w-full md:w-1/2 space-y-4'>
                <h1 className='text-white text-6xl'>Hi ! I Am </h1>
                <h1 className='text-white text-6xl pb-5'>Fatema Summe Nur</h1>
                <p className='text-white text-[25px] leading-10 tracking-wider'>I’m a Web developer & I’m very passionate
                 and dedicated to my work. I have acquired the skills and knowledge necessary 
                 to make your project a success.</p>
            </div>

            <div className='w-full md:w-1/2  relative'>
            
           <img src={blob} alt='blob'/>

            </div>
            <LazyDiv className='' />
        </div>
    );
};

export default HeroSection;