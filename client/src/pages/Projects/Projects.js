import React from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import { BsArrowUpRight } from "react-icons/bs";
import './project.css'
const Projects = () => {
  return (
    <div id="project" className="px-5 py-5 md:px-14  lg:px-12 xl:px-20 md:py-10 relative">
      <h1 className="text-white text-5xl">
        Latest projects <span className="h-5 w-10">___</span>
      </h1>
      <div className="flex justify-evenly items-center">
        {/* 1 */}
        <div className=" border-t-2 border-white mt-60">
          <div className="flex items-center space-x-4 my-4 relative">
            <>
              <BsArrowUpRight className="text-white text-3xl absolute left-6 top-2 font-bold" />
              <div className="h-12 w-12 bg-[#067bad] rounded-full"></div>
            </>
            <p className="text-white text-3xl font-semibold">CELO</p>
          </div>
          <div className="">
          <img src={project2} alt="" className=" h-72 w-96 " />
          </div>
        </div>
        {/* 2 */}
        <div className=" border-t-2 border-white">
          <div className="flex items-center space-x-4 my-4 relative">
            <>
              <BsArrowUpRight className="text-white text-3xl absolute left-6 top-2 font-bold" />
              <div className="h-12 w-12 bg-[#067bad] rounded-full"></div>
            </>
            <p className="text-white text-3xl font-semibold">EARTHLY</p>
          </div>
          <div className="">
          <img src={project3} alt="" className=" h-72 w-96" />
          </div>
        </div>
        {/* 3 */}
        <div className=" border-t-2 border-white -mt-52">
          <div className="flex items-center space-x-4 my-4 relative">
            <>
              <BsArrowUpRight className="text-white text-3xl absolute left-6 top-2 font-bold" />
              <div className="h-12 w-12 bg-[#067bad] rounded-full"></div>
            </>
            <p className="text-white text-3xl font-semibold">LEARNING BEE</p>
          </div>
          <div className="">
          <img src={project1} alt="" className="  h-72 w-96" />
          </div>
        </div>
      </div>
      <div className="h-24 w-24 lg:h-40 lg:w-40 border  border-gray-500 hover:pl-2  hover:pt-2 rounded-full absolute right-5 bottom-5">
                <div className="h-20 w-20 lg:h-36 lg:w-36  rounded-full hover:scale-110 duration-100 back flex flex-col justify-center items-center">
                  <h1 className="text-xl text-white font-bold uppercase">View all</h1>
                </div>
              </div>
    </div>
  );
};

export default Projects;
