import React from 'react';

export default function AdditionalLinks() {
  return (
    <ul className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr_1fr] gap-4 border-[#000000] border-1 dark:border-[#f5f5f5] md:divide-x">
      <li>
        <a
          className="text-[var(--astroblue)] inline-block font-bold text-xl text-center m-auto px-2 sm:px-2 md:px-4 py-6 md:py-12"
          href="https://science.nasa.gov/saturn/moons/dione/"
          target="_blank"
          rel="noreferrer">
          Dione: Cratered on the Wrong Side
        </a>
      </li>
      <li>
        <a
          className="text-[var(--astroblue)] inline-block font-bold text-xl m-auto px-2 sm:px-2 md:px-4 py-6 lg:py-12"
          href="https://science.nasa.gov/saturn/moons/tethys/"
          target="_blank"
          rel="noreferrer">
          Tethys: 40% is the Odysseus Crater
        </a>
      </li>
      <li>
        <a
          className="text-[var(--astroblue)] inline-block font-bold text-xl m-auto px-2 sm:px-2 md:px-4 py-6 md:py-12"
          href="https://science.nasa.gov/saturn/moons/rhea/"
          target="_blank"
          rel="noreferrer">
          Rhea: A Moon with Rings?
        </a>
      </li>
    </ul>
  );
}
