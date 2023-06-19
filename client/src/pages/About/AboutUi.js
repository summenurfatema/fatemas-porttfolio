import React from 'react';
import LeftAnimation from './LeftAnimation';




const AboutUi = () => {
    return (
        <div id='about' className='flex fex-col justify-end items-center px-5 py-5 md:px-14  lg:px-12 xl:px-20 md:py-10 '>
          <div className='w-full md:w-1/2 space-y-4'>
                <h1 className='text-white text-5xl mb-10'>About me  <span className='h-5 w-10'>___</span></h1>
               
                <p className='text-white text-[23px] leading-10 tracking-wide'>I'm Fatema Summe Nur. I live in Chittagong,
                Bangladesh. I've completed BSc course. Now I'm doing Master's on Botany. Besides, I've 
                completed a Web Development Course to develop myself as a Web Developer.</p>

                <p className='text-white text-[23px] leading-10 tracking-wide'> As a Front-end Web Developer. 
                I can build awesome, user frindly, and highly responsive websites. My resume is available on the right side, through 
                which you can know more about me.</p>
                <button className=''> Get Resume
</button>
            </div>
            <div className='w-full md:w-1/2'>
                
<LeftAnimation/>
            </div>
        </div>
    );
};

export default AboutUi;