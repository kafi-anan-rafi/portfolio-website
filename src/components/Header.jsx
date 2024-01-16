import { Cursor, useTypewriter } from "react-simple-typewriter";

const Header = () => {
  const [name] = useTypewriter({
    words: ["Kafi Anan Rafi"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 100,
  });

  return (
    <div className="container m-2 mx-auto grid md:grid-cols-3 gap-10 my-5 md:my-20 p-2 items-center">
      <div className="md:col-span-1 w-60 h-60 md:w-full md:h-full md:block mx-auto ">
        <img src="/transparent.png" className="rounded-full" alt="" />
      </div>
      <div className="md:col-span-2 text-center md:text-left">
        <code className="text-md text-green-400 bg-neutral p-1 px-2 rounded-sm">
          Hello! My name is
        </code>
        <h1 className="text-5xl font-black md:text-6xl mt-3 mb-3">
          <span>{name}</span>
          <Cursor cursorStyle="|" cursorColor="#4ade80" />
        </h1>

        <h1 className="md:text-5xl text-3xl text-slate-400 mb-1">
          I love building things for the web.
        </h1>
        <div className="grid">
          <p className="text-slate-300 text-md md:text-lg my-2">
            I'm a <span className="text-green-400">Software Engineer</span>{" "}
            specializing in building (and occasionally designing) full-stack
            applications using{" "}
            <span className="text-sky-500 bg-neutral px-2 rounded-sm">
              TypeScript
            </span>
            ,{" "}
            <span className="text-teal-400 bg-neutral px-2 rounded-sm">
              React.js
            </span>
            ,{" "}
            <span className="text-yellow-300 bg-neutral px-2 rounded-sm">
              Next.js
            </span>{" "}
            &{" "}
            <span className="text-pink-400 bg-neutral px-2 rounded-sm">
              Node.js
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
