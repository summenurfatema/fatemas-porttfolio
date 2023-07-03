import React from 'react';

import AboutUi from '../pages/About/AboutUi';
import HeroSection from '../pages/HeroSection/HeroSection';
import Skill from '../pages/Skill/Skill';
import Contact from '../pages/Contact/Contact';
import Projects from '../pages/Projects/Projects';
import MarqueeElement from '../pages/Marquee/MarqueeElement';
import LazyDiv from '../pages/LazyDiv/LazyDiv';

const HomePage = () => {

    return (
        <div>
          
            <HeroSection/>
            <AboutUi/>
             <Skill/>
           <Projects/>
              <Contact/>
           <MarqueeElement/> 
         
         
        </div>
    );
};

export default HomePage;