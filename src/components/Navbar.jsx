import React from "react";
import { TbHexagonLetterR } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container mx-auto bg-base-300 rounded-lg mt-1">
        <div className="flex-1">
          <a className="btn rounded-lg btn-ghost text-xl text-primary p-1 ml-1 my-1">
            <TbHexagonLetterR size={40} color="text-primary" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li className="hover:text-primary">
              <a>
                <span className="text-primary font-bold hover:text-white-100">
                  i.
                </span>
                Education
              </a>
            </li>
            <li className="hover:text-primary">
              <a>
                <span className="text-primary font-bold hover:text-white-100">
                  ii.
                </span>
                Skills
              </a>
            </li>
            <li className="hover:text-primary">
              <a>
                <span className="text-primary font-bold hover:text-white-100">
                  iii.
                </span>
                Projects
              </a>
            </li>
            <li className="hover:text-primary">
              <a>
                <span className="text-primary font-bold hover:text-white-100">
                  iv.
                </span>
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <a
          href="https://drive.google.com/file/d/1h-CvLFeCiNP-0ImyQMEe0nG1buQF9_1q/view"
          target="_blank"
        >
          <button className="btn btn-primary rounded-md btn-outline m-2 mr-3 btn-sm">Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
