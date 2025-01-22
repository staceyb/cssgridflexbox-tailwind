import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import defaultTheme from 'tailwindcss/defaultTheme';
import logo from '/src/imgs/logo192.png?w=80&h=80&format=png';

export default function NavFlex() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <>
      <nav className="bg-white max-w-[1200px] m-auto space-y-2 dark:bg-black">
        <ul
          className="group justify-center items-center flex flex-row flex-wrap 
                       gap-4 py-4 sm:justify-end sm:items-end
                       text-black dark:text-white">
          <li className="mr-auto basis-full sm:basis-auto">
            <Link to="/">
              <img
                width="40"
                height="40"
                src={logo}
                alt="React blue astral logo. Click to go to home page."
                className="animate-pulse logo max-w-[40px]"
              />
            </Link>
          </li>
          <li className="text-1xl">
            <Link
              className="hover:text-[var(--lighterastroblue)]"
              to="/moonsofjupiter">
              Moons Of Jupiter
            </Link>
          </li>
          <li className="text-1xl">
            <Link
              className="hover:text-[var(--lighterastroblue)]"
              to="/saturnmoons">
              Moons of Saturn
            </Link>
          </li>
          <li className="text-1xl">
            <Link
              className="hover:text-[var(--lighterastroblue)]"
              to="/saturnmoonsflex">
              Moons of Saturn (Flex)
            </Link>
          </li>
          <li className="text-1xl">
            <Link className="hover:text-[var(--lighterastroblue)]" to="/mars">
              Mars
            </Link>
          </li>
          <li className="text-1xl">
            <Link
              className="hover:text-[var(--lighterastroblue)]"
              to="/planets">
              Planets
            </Link>
          </li>
          <li className="text-1xl">
            <Link
              className="hover:text-[var(--lighterastroblue)]"
              to="/saturnmoonscq">
              Moons of Saturn (Container Query)
            </Link>
          </li>
          <li className="text-1xl">
            <Link
              className="hover:text-[var(--lighterastroblue)]"
              to="/gridoverlap">
              Moons (Grid Overlap)
            </Link>
          </li>
        </ul>
      </nav>
      <div className="bg-white dark:bg-black max-w-[1200px] m-auto px-1">
        <input
          className="bg-white dark:bg-black dark:accent-[var(--lighterastroblue)]"
          type="checkbox"
          id="theme-box"
          name="darktheme"
          defaultChecked={darkTheme ? true : false}
          onChange={(e) => {
            document.documentElement.classList.toggle('dark');
            setDarkTheme(e.target.checked);
          }}></input>
        <label className="text-black dark:text-white px-1" htmlFor="theme-box">
          Uncheck for Light Theme
        </label>
      </div>
    </>
  );
}
