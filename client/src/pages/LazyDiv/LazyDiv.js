import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import clock from "../../lottie/7236-clock-seamless-animation.json";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import {BsPatchMinusFill} from 'react-icons/bs'

const LazyDiv = () => {
  AOS.init();
  const [currentText, setCurrentText] = useState(null);
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      const randomText = getRandomText();
      setCurrentText(randomText);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // useEffect(() => {
  //   const closeTimer = setTimeout(() => {
  //     setCurrentText(null);
  //   }, 8000);

  //   return () => {
  //     clearTimeout(closeTimer);
  //   };
  // }, [currentText]);

  const closePopup = () => {
    setCurrentText(null);
  };

  const getRandomText = () => {
    const texts = [
      "The two most powerful warriors are patience and time. – Leo Tolstoy, War and Peace.",
      "Time is money. – Benjamin Franklin.",
      "Time waits for no one. – Folklore.",
      "Better three hours too soon than a minute too late. – William Shakespeare",
      "Lost time is never found again. – Benjamin Franklin.",
      "Time is the most valuable thing a man can spend. – Theophrastus",
      "Time is the wisest counselor of all. – Pericles",
      "The key is in not spending time, but in investing it. – Stephen R. Covey.",
      "It is the time you have wasted for your rose that makes your rose so important. – Antoine de Saint-Exupéry, The Little Prince.",
      "Punctuality is the thief of time. – Oscar Wilde, The Picture of Dorian Gray.",
    ];
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
  };
  useEffect(() => {
    // Get the current time based on the user's timezone
    const userTime = new Date().toLocaleString("en-US", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });

    // Format the time as hh:mm AM/PM
    const formattedTime = new Date(userTime).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    setCurrentTime(formattedTime);
  }, []);
  return (
    <>
      {currentText && (
        <div data-aos="fade-left" className="popup bg-white px-5 py-10 flex-flex-col items-center justify-center rounded-2xl absolute right-20 top-10 w-[600px]">
          <BsPatchMinusFill  onClick={closePopup} className="text-2xl text-[#067bad] relative -right-[500px] -top-5 cursor-pointer"/>
          <div className="popup-content">
            <div className=" w-full ">
              <Lottie
                data-aos="zoom-out-left"
                loop={true}
                className="w-1/2 ml-28"
                animationData={clock}
              />
            </div>
            {currentTime && (
              <p className="font-bold glow text-sm font-swashed xl:text-2xl text-gray-800 pb-3 text-center">
                Time : {currentTime}
              </p>
            )}
            <p className="text-[24px] leading-10 font-swashed tracking-wide text-gray-800 px-10 text-center py-5">{currentText}</p>
            
          </div>
        </div>
      )}
    </>
  );
};

export default LazyDiv;
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////////////////////////////
//////////////////////////////////////////////////
