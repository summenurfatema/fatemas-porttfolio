import React from 'react';
import blob from '../../assets/bgShape2.png'
import facebook from '../../assets/facebook2.png'
import github from '../../assets/github.png'
import linkedIn from '../../assets/linkedin.png'
import LazyDiv from '../LazyDiv/LazyDiv';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    AOS.init();
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center px-5 py-5 md:px-14  lg:px-12 xl:px-10 3xl:px-14 4xl:px-14 md:py-10 3xl:h-screen relative'>

            <div className='w-full lg:w-6/12 space-y-3 lg:space-y-4'>
                <h1 className='text-white text-[30px] md:text-5xl lg:text-6xl 6xl:text-[80px]'>Hi ! I Am </h1>
                <h1 className='text-white text-[30px] md:text-5xl lg:text-6xl 6xl:text-[80px] pb-5'>Fatema Summe Nur</h1>
                <p className='text-white text-[18px] font-thin md:text-[22px] lg:text-[25px] 6xl:text-[35px] leading-10 6xl:leading-[50px] tracking-wider 4xl:font-normal'>I’m a Web developer & I’m very passionate
                 and dedicated to my work. I have acquired the skills and knowledge necessary 
                 to make your project a success.</p>
            </div>

            <div className='w-full lg:w-5/12  relative'>
            
           <img src={blob} alt='blob' className='rounded-full z-50'/>
           <div  className='absolute top-5 left-12 md:left-44 md:top-20 lg:top-14 lg:left-14 xl:left-28 2xl:left-32'>
           <img  src={facebook} alt='blob' className='rounded-full w-1/4 md:w-1/3'/>
           </div>
           <div  className='absolute top-16 left-2 md:left-28 md:top-36  lg:top-28 lg:left-0 xl:left-16 2xl:left-20'>
           <img  src={github} alt='blob' className='rounded-full w-1/4 md:w-1/3'/>
           </div>
           <div  className='absolute top-28 -left-5 md:left-16 md:top-56  lg:top-44 lg:-left-7 xl:left-6 2xl:left-10'>
           <img  src={linkedIn} alt='blob' className='rounded-full w-1/4 md:w-1/3'/>
           </div>
           {/* <div className='h-[450px] w-[450px] border-2 border-blue-500 rounded-full absolute top-10 left-20'></div>
           <div className='h-[480px] w-[480px] border-2 border-blue-500 rounded-full absolute top-10 left-20'></div> */}

            </div>
            <LazyDiv className='' />
        </div>
    );
};

export default HeroSection;