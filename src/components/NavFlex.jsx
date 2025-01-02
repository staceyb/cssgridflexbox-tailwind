import React from 'react';
import { Link } from 'react-router-dom';
import defaultTheme from 'tailwindcss/defaultTheme';

export default function NavFlex() {
  return (
    <>
      <nav className="bg-white font-bold  max-w-[1200px] m-auto space-y-2 dark:bg-black">
        <ul className="group justify-center items-center flex flex-row flex-wrap gap-4 py-4 px-2 sm:justify-end sm:items-end">
          <li className="mr-auto basis-full sm:basis-auto">
            <Link className="text-black dark:text-white" to="/">
              <img
                src="images/logo192.png"
                alt="Home."
                className="logo max-w-[40px]"
              />
            </Link>
          </li>
          <li className="text-4xl">
            <Link
              className="text-black hover:text-[var(--astroblue)] dark:text-white"
              to="/moonsofjupiter">
              Moons Of Jupiter
            </Link>
          </li>
          <li className="text-4xl">
            <Link
              className="text-black hover:text-[var(--astroblue)] dark:text-white"
              to="/saturnmoons">
              Moons of Saturn
            </Link>
          </li>
          <li className="text-4xl">
            <Link
              className="text-black hover:text-[var(--astroblue)] dark:text-white"
              to="/saturnmoonsflex">
              Moons of Saturn (Flex)
            </Link>
          </li>
          <li className="text-4xl">
            <Link
              className="text-black hover:text-[var(--astroblue)] dark:text-white"
              to="/mars">
              Mars
            </Link>
          </li>
          <li className="text-4xl">
            <Link
              className="text-black hover:text-[var(--astroblue)] dark:text-white"
              to="/planets">
              Planets
            </Link>
          </li>
          <li className="text-4xl">
            <Link
              className="text-black hover:text-[var(--astroblue)] dark:text-white"
              to="/saturnmoonscq">
              Moons of Saturn (Container Query)
            </Link>
          </li>
          <li className="text-4xl">
            <Link
              className="text-black hover:text-[var(--astroblue)] dark:text-white"
              to="/gridoverlap">
              Moons (Grid Overlap)
            </Link>
          </li>
        </ul>
      </nav>
      <div className="bg-white dark:bg-black max-w-[1200px] m-auto px-1">
        <input
          className="bg-white dark:bg-black accent-white dark:accent-darkblue "
          type="checkbox"
          id="theme-box"
          name="dark-theme"
          onChange={(e) => {
            document.documentElement.classList.toggle('dark');
          }}></input>
        <label className="text-black dark:text-white px-1" htmlFor="dark-theme">
          Check to toggle Light/Dark theme
        </label>
      </div>
    </>
  );
}
