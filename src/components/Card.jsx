import React from "react";

const Card = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-5">
      {/* University */}
      <li>
        <div className="timeline-middle">
          <img src="/aiub.png" alt="aiub logo" className="w-12 h-12" />
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="italic">Jan 2019 - Sept 2023</time>
          <div className="text-xl font-bold text-blue-500">
            American International University-Bangladesh (AIUB)
          </div>
          <div>BSc in Computer Science and Engineering (CSE)</div>
          <div className="text-sm font-bold mb-3 md:mb-0">CGPA: 3.50 (out of 4.00)</div>
        </div>
        <hr />
      </li>
      {/* College */}

      <li className="">
        <hr />
        <div className="timeline-middle">
          <img src="/bmarpc.png" alt="aiub logo" className="w-12 h-12" />
        </div>
        <div className="timeline-end">
          <time className="italic">Feb 2016 - Dec 2018</time>
          <div className="text-xl font-bold text-yellow-300">
            Birshreshtha Munshi Abdur Rouf Public College
          </div>
          <div>Higher Secondary Certificate (HSC)</div>
          <div className="text-sm font-bold mb-3 md:mb-0">GPA: 4.33 (out of 5.00)</div>
        </div>
        <hr />
      </li>

      {/* School */}
      <li>
        <hr />
        <div className="timeline-middle">
          <img
            src="/LHS.png"
            alt="aiub logo"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="italic">Jan 2014 - Dec 2016</time>
          <div className="text-xl font-bold text-secondary">Lordhardinge Secondary School</div>
          <div>Secondary School Certificate (SSC)</div>
          <div className="text-sm font-bold">CGPA: 5.00 (out of 5.00)</div>
        </div>
        <hr />
      </li>
    </ul>
    // <ol class="relative border-s border-gray-200 dark:border-gray-700">
    //   <li class="mb-10 ms-4">
    //     <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    //     <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
    //       February 2022
    //     </time>
    //     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
    //       Application UI code in Tailwind CSS
    //     </h3>
    //     <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
    //       Get access to over 20+ pages including a dashboard layout, charts,
    //       kanban board, calendar, and pre-order E-commerce & Marketing pages.
    //     </p>
    //     <a
    //       href="#"
    //       class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    //     >
    //       Learn more{" "}
    //       <svg
    //         class="w-3 h-3 ms-2 rtl:rotate-180"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 14 10"
    //       >
    //         <path
    //           stroke="currentColor"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           d="M1 5h12m0 0L9 1m4 4L9 9"
    //         />
    //       </svg>
    //     </a>
    //   </li>
    //   <li class="mb-10 ms-4">
    //     <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    //     <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
    //       March 2022
    //     </time>
    //     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
    //       Marketing UI design in Figma
    //     </h3>
    //     <p class="text-base font-normal text-gray-500 dark:text-gray-400">
    //       All of the pages and components are first designed in Figma and we
    //       keep a parity between the two versions even as we update the project.
    //     </p>
    //   </li>
    //   <li class="ms-4">
    //     <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    //     <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
    //       April 2022
    //     </time>
    //     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
    //       E-Commerce UI code in Tailwind CSS
    //     </h3>
    //     <p class="text-base font-normal text-gray-500 dark:text-gray-400">
    //       Get started with dozens of web components and interactive elements
    //       built on top of Tailwind CSS.
    //     </p>
    //   </li>
    // </ol>
  );
};

export default Card;
