import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import defaultTheme from 'tailwindcss/defaultTheme';

export default function NavFlex() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <>
      <nav className="bg-white font-bold max-w-[1200px] m-auto space-y-2 dark:bg-black">
        <ul
          className="group justify-center items-center flex flex-row flex-wrap 
                       gap-4 py-4 sm:justify-end sm:items-end
                       text-black dark:text-white">
          <li className="mr-auto basis-full sm:basis-auto">
            <Link to="/">
              <img
                width="40"
                height="40"
                src="images/logo192.png"
                alt="Home."
                className="logo max-w-[40px]"
              />
            </Link>
          </li>
          <li className="text-4xl">
            <Link
              className="hover:text-[var(--astroblue)]"
              to="/moonsofjupiter">
              Moons Of Jupiter
            </Link>
          </li>
          <li className="text-4xl">
            <Link className="hover:text-[var(--astroblue)]" to="/saturnmoons">
              Moons of Saturn
            </Link>
          </li>
          <li className="text-4xl">
            <Link
              className="hover:text-[var(--astroblue)]"
              to="/saturnmoonsflex">
              Moons of Saturn (Flex)
            </Link>
          </li>
          <li className="text-4xl">
            <Link className="hover:text-[var(--astroblue)]" to="/mars">
              Mars
            </Link>
          </li>
          <li className="text-4xl">
            <Link className="hover:text-[var(--astroblue)]" to="/planets">
              Planets
            </Link>
          </li>
          <li className="text-4xl">
            <Link className="hover:text-[var(--astroblue)]" to="/saturnmoonscq">
              Moons of Saturn (Container Query)
            </Link>
          </li>
          <li className="text-4xl">
            <Link className="hover:text-[var(--astroblue)]" to="/gridoverlap">
              Moons (Grid Overlap)
            </Link>
          </li>
        </ul>
      </nav>
      <div className="bg-white dark:bg-black max-w-[1200px] m-auto px-1">
        <input
          className="bg-white dark:bg-black accent-[skyblue] dark:accent-[var(--astroblue)]"
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
