import React from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import omni from '../../assets/omniverse.life_.png'
import sneha from '../../assets/snehapoddar.com_.png'
import research from '../../assets/research.png'
import work from '../../assets/work2.png';
import { BsArrowUpRight } from "react-icons/bs";

const ModalProject = () => {
  const projects = [
    {
      id: 7,
      name: "Research Buddy",
      image:research ,
      link: "https://researchbdy.com/",
    },
    {
      id: 1,
      name: "Omniverse Life",
      image:omni ,
      link: "https://omniverse.life/",
    },
    {
      id: 6,
      name: "Work4Cash",
      image: work,
      link: "https://work4cash.pro/",
    },
    {
      id: 2,
      name: "Sneha Poddar",
      image: sneha,
      link: "https://snehapoddar.com/",
    },
    {
      id: 3,
      name: "Celo",
      image: project2,
      link: "https://clinquant-melomakarona-e44230.netlify.app",
    },
    {
      id: 4,
      name: "Earthly",
      image: project3,
      link: "https://reliable-alfajores-36a3cf.netlify.app",
    },
    {
      id:5,
      name: "Learning Bee",
      image: project1,
      link: "https://eloquent-elf-d6f868.netlify.app",
    },
   
  ];
  return (
    <div>
      <input type="checkbox" id="my_modal_4" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          
          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <label htmlFor="my_modal_4" className="btn hover:bg-gray-100 bg-white text-gray-800">
              Close!
            </label>
            
          </div>
          {/* main */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {
                projects.map(project=>(
                    <div className=" border-2 shadow-lg rounded-md mt-6 ">
                    <a href={project.link} target="blank"className="flex flex-col items-center space-y-4 my-4 relative">
                      {/* <>
                        <BsArrowUpRight className="text-white text-3xl absolute left-6 top-2 font-bold" />
                        <div className="h-12 w-12 bg-[#067bad] rounded-full"></div>
                      </> */}
                      {/* */}
                       <p className="text-gray-900 text-xl lg:text-2xl uppercase font-semibold">{project.name}</p>
                    <img src={project.image} alt="" className=" h-72 w-full " />
                    </a>
                 
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
