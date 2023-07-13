import React from "react";
import come from "../../lottie/coming-soon.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div
      id="homes"
      className="h-screen flex flex-col justify-center items-center"
    >
      <Lottie
        loop={true}
        className=" md:w-[270px] lg:w-[300px] xl:h-[400px]  xl:w-[400px]"
        animationData={come}
      />
      <Link to="/">
        <button
          type="buttonn"
          class="inline-block rounded text-2xl px-6 pb-2 pt-2.5 font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#50E3C2] bg-blue-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default ComingSoon;
