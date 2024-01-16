import React from "react";
import { TbCode, TbHexagonLetterR } from "react-icons/tb";
import { SiCodingninjas } from "react-icons/si";
import { AiOutlineCode } from "react-icons/ai";
import { SiVisualstudiocode } from "react-icons/si";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container mx-auto bg-base-300 rounded-lg mt-1">
        <div className="flex-1">
          <a className="btn px-2 rounded-md text-lg md:text-xl text-primary p-1 ml-1 my-1">
            <AiOutlineCode size={25} className="text-green-400" />
            {/* <img
              src="/student-lounge.png"
              alt="kafi"
              className="w-10 h-10 rounded-full"
            /> */}
            <code className="">Kafi Anan</code>
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

        <Dropdown />
      </div>
    </div>
  );
};

export default Navbar;
