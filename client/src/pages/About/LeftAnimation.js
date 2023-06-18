import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { Autoplay } from "swiper";
import "./animation.css";
// import required modules
import { EffectCards } from "swiper";

export default function LeftAnimation() {
  return (
    <>

      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,

          pauseOnMouseEnter: true,
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="mySwiper mt-20"
      >
        <SwiperSlide>React Developer</SwiperSlide>
        <SwiperSlide>
          <h1>Front-end</h1>
          <h1>Developer</h1>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlide>
            <h1>MERN Stack</h1>
            <h1>Developer</h1>
          </SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>React Developer</SwiperSlide>
        <SwiperSlide>
          <h1>Front-end</h1>
          <h1>Developer</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>MERN Stack</h1>
          <h1>Developer</h1>
        </SwiperSlide>
        <SwiperSlide>React Developer</SwiperSlide>
        <SwiperSlide>
          <h1>Front-end</h1>
          <h1>Developer</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>MERN Stack</h1>
          <h1>Developer</h1>
        </SwiperSlide>
      </Swiper>
      <h1 className='text-gray-800 text-3xl my-7 text-center font-semibold'>Can play role as a <span className='h-5 w-10'>___</span></h1>
    
    </>
  );
}
