import React from 'react';

const HeroSection = () => {
    return (
        <div className='flex fex-col justify-between items-center px-5 py-5 md:px-14  lg:px-12 xl:px-20 md:py-10 3xl:h-screen'>

            <div className='w-full md:w-1/2 space-y-4'>
                <h1 className='text-white text-6xl'>Hi ! I Am </h1>
                <h1 className='text-white text-6xl pb-5'>Fatema Summe Nur</h1>
                <p className='text-white text-[25px] leading-10 tracking-wider'>I’m a Web developer & I’m very passionate
                 and dedicated to my work. I have acquired the skills and knowledge necessary 
                 to make your project a success.</p>
            </div>

            <div className='w-full md:w-1/2  relative'>
            
            <div className='h-64 w-64 bg-[#FCD966] rounded-full absolute right-28 bottom-10'></div>
            <div className='h-64 w-64 bg-[#8670EF] rounded-full absolute right-5 -bottom-20'></div>

            </div>
            
        </div>
    );
};

export default HeroSection;