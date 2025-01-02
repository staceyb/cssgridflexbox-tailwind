import '../css/moonsofsaturn.css';
import React from 'react';
import AdditionalLinks from './AdditionalLinks';
/* Grid Info: Uses subgrid */

function MoonsOfSaturnGrid() {
  return (
    <div className="moonsofsaturn max-w-[1200px] m-auto text-black dark:text-white">
      <h1>The Moons of Saturn</h1>
      <div className="msContainer border-[#000000] dark:border-[#f5f5f5]">
        <article className="msCard">
          <img
            src="/images/fem-mimas.jpg"
            alt="Death Star vs. Mimas, with similar looking craters in the upper right."
          />
          <h2>That's No Moon. It's a Space Station.</h2>
          <p className="text">
            At 198km diameter, Mimas is bigger than the first Death Star (120km)
            but smaller than the second (800km).{' '}
          </p>
          <p className="link text-color-[--var(--astroblue)] dark:text-white">
            <a
              href="https://science.nasa.gov/saturn/moons/mimas/"
              target="_blank"
              className="button"
              rel="noreferrer">
              More about Mimas
            </a>
          </p>
        </article>
        <article className="msCard">
          <img
            src="/images/fem-titan-mosaic.jpg"
            alt="A fuzzy looking world, with darker patches on a mostly light surface."
          />
          <h2>Titan's Ethane Lake</h2>
          <p className="text">
            Titan is the only world besides Earth that has standing bodies of
            liquid, including rivers, lakes and seas, on its surface. Titan is
            bigger than Earth's moon, and larger than even the planet Mercury.
          </p>
          <p className="link text-color-[--var(--astroblue)] dark:text-white">
            <a
              href="https://science.nasa.gov/saturn/moons/titan/"
              target="_blank"
              className="button"
              rel="noreferrer">
              More about Titan
            </a>
          </p>
        </article>
        <article className="msCard border-[#000000] dark:border-[#f5f5f5]">
          <img
            src="/images/fem-enceladus.jpg"
            alt="Enceladus is a water world."
          />
          <h2>Enceladus: Geyser World</h2>
          <p className="text">
            Geysers venting from this ocean world add material to Saturn's E
            ring, and give clues that its subsurface saltwater ocean could be a
            possible habitat for life.
          </p>
          <p className="link text-color-[--var(--astroblue)] dark:text-white">
            <a
              href="https://science.nasa.gov/saturn/moons/enceladus/"
              target="_blank"
              className="button"
              rel="noreferrer">
              More about Enceladus
            </a>
          </p>
        </article>
        <article className="msCard">
          <img
            src="/images/fem-iapetus.jpg"
            alt="A white moon that looks like it has mold growing on one side of it."
          />
          <h2>Iapetus: Yin and Yang</h2>
          <p className="text">
            Saturn has tidally locked Iapetus. The moon always presents the same
            face toward Saturn. With its distant, inclined orbit, Iapetus is the
            only large moon from which there is a nice view of the rings of
            Saturn.
          </p>
          <p className="link text-color-[--var(--astroblue)] dark:text-white">
            <a
              href="https://science.nasa.gov/saturn/moons/iapetus/"
              target="_blank"
              className="button"
              rel="noreferrer">
              More about Iapetus
            </a>
          </p>
        </article>
        <article className="msCard">
          <img
            src="/images/fem-phoebe.jpg"
            alt="A moon with heavy cratering, making it look more like an asteroid."
          />
          <h2>Phoebe</h2>
          <p className="text">
            Unlike most major moons orbiting Saturn, Phoebe is very dark and
            reflects only 6 percent of the sunlight it receives. Its darkness
            and irregular, retrograde orbit suggest Phoebe is most likely a
            captured object. A captured object is a celestial body that is
            trapped by the gravitational pull of a much bigger body, generally a
            planet. Phoebe's darkness, in particular, suggests that the small
            moon comes from the outer solar system, an area where there is
            plenty of dark material.
          </p>
          <p className="link text-color-[--var(--astroblue)] dark:text-white">
            <a
              href="https://science.nasa.gov/saturn/moons/phoebe/"
              target="_blank"
              className="button"
              rel="noreferrer">
              More about Phoebe
            </a>
          </p>
        </article>
      </div>
      <AdditionalLinks></AdditionalLinks>
    </div>
  );
}

export default MoonsOfSaturnGrid;
