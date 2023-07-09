import React, { useRef } from 'react';
import box from '../../lottie/post.json'
import Lottie from 'lottie-react'
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
 
  const form = useRef();

 

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        "service_bjokw1a",
        "template_fatema",
        form.current,
        "wsGx46LaoIgI5AnHf"
      )
      .then(
        (result) => {
          console.log(result);
          toast.success("Your message has been sent successfully !!!");
          form.current.reset();
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <div id='contact' className='px-5 pb-5 pt-14 md:px-14  lg:px-12 xl:px-20 md:py-16'>
        	<h1 className='text-white text-3xl lg:text-5xl mb-7'>Let's discuss <span className='h-5 w-10'>___</span></h1>
      <div className="flex items-center lg:justify-evenly flex-col md:flex-row-reverse lg:px-14">
        {/* left */}
        <div className='pl-0 lg:pl-10 xl:pl-20 w-full md:w-1/2 lg:w-2/5 3xl:w-2/5'>
           <Lottie data-aos="zoom-in" loop={true} className=' md:w-[270px] lg:w-[300px] xl:h-[400px]  xl:w-[400px]' animationData={box}/>
           </div>

        {/* Right side */}

        <div className="w-full md:w-2/3 lg:w-3/5 3xl:w-3/5 px-3 my-5 relative">
          <div className="border rounded-full py-0 md:mx-0 lg:mx-10">
            <form  ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col items-center space-y-5 lg:space-y-10 pb-10 lg:pb-14 pt-20 lg:pt-32 md:pt-28 md:pb-6 ">
                <input
                  name="name"
                  type="name"
                  
                  className="text-sm lg:text-xl border-b-2 py-3 bg-transparent bg-opacity-0 text-white w-4/5 focus-none focus:outline-none"
                  placeholder="Full Name"
                  autoComplete='off'
                />

                <input
                  className="text-sm lg:text-xl border-b-2 py-3 bg-transparent  text-white w-4/5 focus-none focus:outline-none"
                  name="email"
                  type="email"
                 
                  placeholder="Email Address"
                 autoComplete='off'
                 
                />

                <textarea
                  className="text-sm lg:text-xl border-b-2 py-3 bg-transparent text-white w-4/5  focus-none focus:outline-none"
                  name="message"
                  placeholder="Your Messege"
                ></textarea>
              </div>
              <div className="h-24 w-24 lg:h-40 lg:w-40 border  border-gray-500 hover:pl-2  hover:pt-2 rounded-full ">
                <div className="h-20 w-20 lg:h-36 lg:w-36  rounded-full hover:scale-110 duration-200  back flex flex-col justify-center items-center">
                  <h1 className="text-sm lg:text-xl text-white font-bold uppercase">Send</h1>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
//////////////////////////////////////////
//////////////////////////////////////////
//////////////
//////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////
//////////////////////////////////////////
/////////////
