import React from "react";

const Dropdown = () => {
  return (
    <div className="md:hidden dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-square btn-ghost mr-1">
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
      </div>
      <ul
        tabIndex={0}
        className="menu menu-md dropdown-content  mt-2 z-[1] p-2 shadow bg-base-300 rounded-lg w-35"
      >
        <li className="hover:text-primary">
          <a>
            <span className="text-primary text-lg hover:text-white-100">🎓</span>
            Education
          </a>
        </li>
        <li className="hover:text-primary">
          <a>
            <span className="text-primary text-lg hover:text-white-100">🛹</span>
            Skills
          </a>
        </li>
        <li className="hover:text-primary">
          <a>
            <span className="text-primary text-lg hover:text-white-100">🧑‍💻</span>
            Projects
          </a>
        </li>
        <li className="hover:text-primary">
          <a>
            <span className="text-primary text-lg hover:text-white-100">🤙</span>
            Contacts
          </a>
        </li>
        <li className="mt-1 items-center">
          <a
            href="https://drive.google.com/file/d/1h-CvLFeCiNP-0ImyQMEe0nG1buQF9_1q/view"
            target="_blank"
            className="text-primary py-1 font-bold border border-green-400 rounded-md text-center hover:bg-primary hover:text-neutral"
          >
            📇 Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
