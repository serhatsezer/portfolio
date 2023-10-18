import React from "react";

const Header = () => {
  return (
    <header className="p-10">
      <nav className="flex justify-between">
        <div className="flex-col">
          <h1 className="mb-1 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Serhat Sezer
          </h1>
          <p className="font-normal text-2xl text-gray-500 dark:text-gray-400">
            Software Engineer
          </p>
        </div>
        <div>
          <ul className="xl:flex-row xl:text-xl text-sm flex-col flex items-center justify-center gap-3">
            <li>
              <a
                className="transition ease-linear hover:text-slate-500 dark:hover:text-blue-300"
                href="https://linkedin.com/in/serhatsezer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                className="transition ease-linear hover:text-slate-500 dark:hover:text-blue-300"
                href="https://twitter.com/serhatsezer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="transition ease-linear hover:text-slate-500 dark:hover:text-blue-300"
                href="mailto:serhat.szr@gmail.com"
              >
                E-mail
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
