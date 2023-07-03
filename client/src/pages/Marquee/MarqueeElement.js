import React from 'react';
import Marquee from 'react-fast-marquee'
const MarqueeElement = () => {
    return (
      <div>
        <Marquee className='flex justify-between py-7'>
        <h1 className='text-white text-xl lg:text-5xl font-bungee'>Thank You <span className='px-10 md:px-48 lg:px-60 font-bungee'>ধন্যবাদ </span>  <span className='pr-10'>Gracias</span></h1>
      
        
        
      </Marquee>
      </div>
    );
};

export default MarqueeElement;