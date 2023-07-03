import React from 'react';
import blob from '../../assets/blob.png'
import LazyDiv from '../LazyDiv/LazyDiv';
const HeroSection = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center px-5 py-5 md:px-14  lg:px-12 xl:px-10 3xl:px-14 4xl:px-14 md:py-10 3xl:h-screen relative'>

            <div className='w-full lg:w-1/2 space-y-3 lg:space-y-4'>
                <h1 className='text-white text-[30px] md:text-5xl lg:text-6xl 6xl:text-[80px]'>Hi ! I Am </h1>
                <h1 className='text-white text-[30px] md:text-5xl lg:text-6xl 6xl:text-[80px] pb-5'>Fatema Summe Nur</h1>
                <p className='text-white text-[18px] font-thin md:text-[22px] lg:text-[25px] 6xl:text-[35px] leading-10 6xl:leading-[50px] tracking-wider 4xl:font-normal'>I’m a Web developer & I’m very passionate
                 and dedicated to my work. I have acquired the skills and knowledge necessary 
                 to make your project a success.</p>
            </div>

            <div className='w-full lg:w-1/2  relative'>
            
           <img src={blob} alt='blob' className='rounded-full'/>

            </div>
            <LazyDiv className='' />
        </div>
    );
};

export default HeroSection;