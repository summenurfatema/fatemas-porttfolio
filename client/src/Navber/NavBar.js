import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div id="nav" class=" text-white z-50 font-sans">
      <div class="px-4 py-5  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-14  lg:px-12 xl:px-10 2xl:px-10 3xl:px-14 lg:py-[26px]">
        <div class="relative flex items-center justify-between ">
          <a href="/">
            <span class="ml-2 text-[26px] md:text-[38px] lg:text-[48px] 6xl:text-[59px] font-bold tracking-wide text-white  capitalize font-bungee">
              Fatema<span className="text-[#0CABEF] text-2xl md:text-4xl lg:text-[60px] pl-2">.</span>
            </span>
          </a>
          <ul class="flex  items-center hidden space-x-[50px] lg:flex ">
            <li>
              <a
                href="#about"
                className="font-medium text-[18px] 6xl:text-[24px] tracking-wide text-white "
                onClick={(e) => {
                  e.preventDefault();
                  const aboutSection = document.getElementById("about");
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => aboutSection.focus(), 900);
                }}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="font-medium text-[18px] 6xl:text-[24px] tracking-wide text-white "
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById("skills");
                  contactSection.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => contactSection.focus(), 900);
                }}
              >
                Skills
              </a>
            </li>
           

            
            <li>
              <a
                href="#works"
                className="font-medium text-[18px] 6xl:text-[24px] tracking-wide text-white "
                onClick={(e) => {
                  e.preventDefault();
                  const teamSection = document.getElementById("works");
                  teamSection.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => teamSection.focus(), 900);
                }}
              >
                Works
              </a>
            </li>
            <li>
              <a
                href="#blogs"
                className="font-medium text-[18px] 6xl:text-[24px] tracking-wide text-white "
                onClick={(e) => {
                  e.preventDefault();
                  const blogSection = document.getElementById("blogs");
                  blogSection.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => blogSection.focus(), 900);
                }}
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-semibold text-[20px] tracking-wide text-white back px-5 py-3 rounded-lg"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById("contact");
                  contactSection.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => contactSection.focus(), 900);
                }}
              >
                Contact
              </a>
            </li>
            
          </ul>
          <div className="lg:hidden">
            <button
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-50">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                    <a href="/">
            <span class="ml-2 text-[29px] md:text-[38px] lg:text-[48px] 6xl:text-[59px] font-bold tracking-wide text-black capitalize font-bungee">
              Fatema<span className="text-[#0CABEF] text-2xl md:text-4xl lg:text-[60px] pl-2">.</span>
            </span>
          </a>
          
                    </div>
                    <button className="text-xl text-white rounded-full font-bungee bg-gray-400 hover:text-black hover:bg-gray-200 cursor-pointer py-1 px-3">X</button>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <a
                          href="#about"
                          className="font-medium text-xl tracking-wide text-gray-800 "
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMenuOpen(false);
                            const aboutSection =
                              document.getElementById("about");
                            aboutSection.scrollIntoView({ behavior: "smooth" });
                            setTimeout(() => aboutSection.focus(), 900);
                          }}
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#skills"
                          className="font-medium text-xl tracking-wide text-gray-800 "
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMenuOpen(false);
                            const blogSection = document.getElementById("skills");
                            blogSection.scrollIntoView({ behavior: "smooth" });
                            setTimeout(() => blogSection.focus(), 900);
                          }}
                        >
                          skills
                        </a>
                      </li>
                      <li>
                        <a
                          href="#works"
                          className="font-medium text-xl tracking-wide text-gray-800 "
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMenuOpen(false);
                            const contactSection =
                              document.getElementById("works");
                            contactSection.scrollIntoView({
                              behavior: "smooth",
                            });
                            setTimeout(() => contactSection.focus(), 900);
                          }}
                        >
                          Works
                        </a>
                      </li>
                      <li>
                        <a
                          href="#blogs"
                          className="font-medium text-xl tracking-wide text-gray-800 "
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMenuOpen(false);
                            const teamSection = document.getElementById("team");
                            teamSection.scrollIntoView({ behavior: "smooth" });
                            setTimeout(() => teamSection.focus(), 900);
                          }}
                        >
                          Blogs
                        </a>
                      </li>
                      <li>
              <a
                href="#contact"
                className="font-medium text-xl tracking-wide text-white back px-6 py-2 rounded-lg"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById("contact");
                  contactSection.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => contactSection.focus(), 900);
                }}
              >
                Contact
              </a>
            </li>
                    
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
