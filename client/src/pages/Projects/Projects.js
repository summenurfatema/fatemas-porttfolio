import React from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import { BsArrowUpRight } from "react-icons/bs";
import './project.css'
const Projects = () => {
  return (
    <div id="works" className="px-5 pt-5 pb-20 md:px-14  lg:px-12 xl:px-20 md:py-10 relative">
      <h1 className="text-white text-3xl lg:text-5xl mb-10">
        Latest projects <span className="h-5 w-10">___</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-between lg:justify-evenly items-center">
        {/* 1 */}
        <div className=" border-t-2 border-white mt-6 lg:mt-60">
          <a href="https://clinquant-melomakarona-e44230.netlify.app" target="blank"className="flex items-center space-x-4 my-4 relative">
            <>
              <BsArrowUpRight className="text-white text-3xl absolute left-6 top-2 font-bold" />
              <div className="h-12 w-12 bg-[#067bad] rounded-full"></div>
            </>
            <p className="text-white text-xl lg:text-3xl  font-semibold">CELO</p>
          </a>
          <div className="">
          <img src={project2} alt="" className=" h-72 w-96 " />
          </div>
        </div>
        {/* 2 */}
        <div className=" border-t-2 border-white mt-10 lg:mt-0 ">
          <a href='https://jazzy-cocada-2d1a25.netlify.app' target='blank' className="flex items-center space-x-4 my-4 relative">
            <>
              <BsArrowUpRight className="text-white text-3xl absolute left-6 top-2 font-bold" />
              <div className="h-12 w-12 bg-[#067bad] rounded-full"></div>
            </>
            <p className="text-white text-xl lg:text-3xl font-semibold">EARTHLY</p>
          </a>
          <div className="">
          <img src={project3} alt="" className=" h-72 w-96" />
          </div>
        </div>
        {/* 3 */}
        <div className=" border-t-2 border-white mt-10 lg:-mt-52">
          <a href="https://eloquent-elf-d6f868.netlify.app" target="blank" className="flex items-center space-x-4 my-4 relative">
            <>
              <BsArrowUpRight className="text-white text-3xl absolute left-6 top-2 font-bold" />
              <div className="h-12 w-12 bg-[#067bad] rounded-full"></div>
            </>
            <p className="text-white text-xl lg:text-3xl font-semibold">LEARNING BEE</p>
          </a>
          <div className="">
          <img src={project1} alt="" className="  h-72 w-96" />
          </div>
        </div>
      </div>
      <div className="h-24 w-24 lg:h-40 lg:w-40 border  border-gray-500 hover:pl-2  hover:pt-2 rounded-full absolute right-5 -bottom-10 lg::bottom-5">
                <div className="h-20 w-20 lg:h-36 lg:w-36  rounded-full hover:scale-110 duration-100 back flex flex-col justify-center items-center">
                  <h1 className="text-sm lg:text-xl text-white font-bold uppercase">View all</h1>
                </div>
              </div>
    </div>
  );
};

export default Projects;
