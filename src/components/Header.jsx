export const Header = () => {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-10 my-10">
      <div className="col-span-1 ">
        <img src="/image.jpeg" alt="" />
      </div>

      <div className="col-span-3">
        <code className="text-md text-primary font-bold">Hi, my name is</code>
        <h1 className="font-bold text-7xl mt-3 mb-2">Kafi Anan Rafi</h1>
        <h1 className="text-5xl text-slate-400">
          I love building things for the Web.
        </h1>
        <div className="grid grid-cols-4 gap-5">
          <p className="text-slate-300 text-lg mt-2 col-span-3">
            I'm a <span className="text-primary">software engineer</span>{" "}
            specializing in building (and occasionally designing) full-stack
            application using{" "}
            <code className="font-bold  text-sky-400">TypeScript</code>,{" "}
            <code className="font-bold text-secondary">React.js</code>,{" "}
            <code className="font-bold text-warning">Next.js</code> &{" "}
            <code className="font-bold text-error">Node.js</code>
          </p>
        </div>
      </div>
    </div>
  );
};
