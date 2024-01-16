import React from "react";
import { TbCode, TbHexagonLetterR } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container mx-auto bg-base-300 rounded-lg mt-1">
        <div className="flex-1">
          <a className="btn px-2 rounded-md text-lg md:text-xl text-primary p-1 ml-1 my-1">
            <TbCode size={32} className="text-green-400" />
            {/* <img
              src="/photo.png"
              alt="kafi"
              className="w-10 h-10 rounded-full"
            /> */}
            <code className="">Rafi</code>
          </a>
        </div>
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li className="hover:text-primary">
              <a>
                <span className="text-primary hover:text-white-100">i.</span>
                Education
              </a>
            </li>
            <li className="hover:text-primary">
              <a>
                <span className="text-primary hover:text-white-100">ii.</span>
                Skills
              </a>
            </li>
            <li className="hover:text-primary">
              <a>
                <span className="text-primary hover:text-white-100">iii.</span>
                Projects
              </a>
            </li>
            <li className="hover:text-primary">
              <a>
                <span className="text-primary hover:text-white-100">iv.</span>
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <a
          href="https://drive.google.com/file/d/1h-CvLFeCiNP-0ImyQMEe0nG1buQF9_1q/view"
          target="_blank"
        >
          <button className="btn btn-primary rounded-md btn-outline m-2 mr-3 btn-sm hidden md:block">
            Resume
          </button>
        </a>

        <div className="flex-none md:hidden">
          <button className="btn btn-square btn-ghost mr-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-7 h-7 stroke-current text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
