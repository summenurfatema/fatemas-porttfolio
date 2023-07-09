import React from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import { BsArrowUpRight } from "react-icons/bs";

const ModalProject = () => {
  const projects = [
    {
      id: 1,
      name: "celo",
      image: project2,
      link: "",
    },
    {
      id: 2,
      name: "earthly",
      image: project3,
      link: "",
    },
    {
      id: 3,
      name: "learning bee",
      image: project1,
      link: "",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                projects.map(project=>(
                    <div className=" border-2 shadow-lg rounded-md mt-6 ">
                    <a href={project.link} target="blank"className="flex items-center space-x-4 my-4 relative">
                      <>
                        <BsArrowUpRight className="text-white text-3xl absolute left-6 top-2 font-bold" />
                        <div className="h-12 w-12 bg-[#067bad] rounded-full"></div>
                      </>
                      <p className="text-white text-xl lg:text-2xl uppercase font-semibold">{project.name}</p>
                    </a>
                    <div className="">
                    <img src={project.image} alt="" className=" h-72 w-96 " />
                    </div>
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
